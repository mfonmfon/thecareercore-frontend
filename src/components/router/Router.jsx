import AttendeesRegistration from "../../auth/attendeesregistration/AttendeesRegistration";
import AboutTheCareerCore from "../../pages/about/AboutTheCareerCore";
import BecomeASponsor from "../../pages/becomeasponsor/BecomeASponsor";
import TheCareerCoreLandingPage from "../../pages/home/TheCareerCoreLandingPage";
import AttendeesRegistrationCompletion from '../../auth/successmessage/AttendeesRegisterationSuccessPage'
import TicketHerosection from "../ticketherosection/TicketHerosection";
import TicketPurchaseCard from "../ticketpurchase/TicketPurchaseCard";


const THECAREERCOREROUTES = [
  {
    path: '',
    element: <TheCareerCoreLandingPage/>,
    children: [
      {
        path: '/',
        element: <TheCareerCoreLandingPage/>
      }
    ]
  },
  {
    path: '/about',
    element: <AboutTheCareerCore/>
  },
  {
    path: '/becomeasponsor',
    element: <BecomeASponsor/>
  },
  {
    path: '/register',
    element: <AttendeesRegistration/>
  },
  {
    path: '/partner',
    element: <BecomeASponsor/>
  },
  {
    path: '/registration-completion',
    element: <AttendeesRegistrationCompletion/>
  },
  {
    path:'/purchase-ticket',
    element: <TicketPurchaseCard/>
  }
]
export default THECAREERCOREROUTES
