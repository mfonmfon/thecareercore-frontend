import { createBrowserRouter, RouterProvider } from "react-router-dom"
import TheCareerCoreHeader from "./components/thecareercoreheader/TheCareerCoreHeader"
import TheCareerCoreHerosection from "./components/thecareercoreherosection/TheCareerCoreHerosection"
import THECAREERCOREROUTES from "./components/router/Router"
// import './App.css'

function App() {
  const router = createBrowserRouter([
    ...THECAREERCOREROUTES,
  ])
  return (
      <div>
        <RouterProvider router={router} >

        </RouterProvider>
      </div>
    
  )
}

export default App
