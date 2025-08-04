import AttendeesRegistration from "../../auth/attendeesregistration/AttendeesRegistration";
import AboutTheCareerCore from "../../pages/about/AboutTheCareerCore";
import BecomeASponsor from "../../pages/becomeasponsor/BecomeASponsor";
import TheCareerCoreLandingPage from "../../pages/home/TheCareerCoreLandingPage";
import AttendeesRegistrationCompletion from '../../auth/successmessage/AttendeesRegisterationSuccessPage'
import TicketHerosection from "../ticketherosection/TicketHerosection";
import TicketPurchaseCard from "../ticketpurchase/TicketPurchaseCard";
import NotFound from "../../pages/notfoundpage/NotFound";
import GuidePage from "../../pages/guide/GuidePage";
import FounderPage from "../../pages/founderpage/FounderPage";


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
    path: '/notfound',
    element: <NotFound/>
  },
  {
    path: '/guide',
    element: <GuidePage/>
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
  },
  {
    path: '/founder',
    element: <FounderPage/>
  },
  {
    path: 'success',
    element: <AttendeesRegistrationCompletion/>
  },
  {
    path: '/https://selar.com/575777n591',
    element: 'https://selar.com/575777n591'
  }
]
export default THECAREERCOREROUTES
