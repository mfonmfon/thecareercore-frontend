import { createBrowserRouter, RouterProvider } from "react-router-dom"
import THECAREERCOREROUTES from "./components/router/Router"

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
