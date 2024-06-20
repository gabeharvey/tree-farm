import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TreeFarm from '../components/TreeFarm.jsx';
import About from '../components/About.jsx'
import Services from '../components/Services.jsx';
import Gallery from '../components/Gallery.jsx';
import PrivacyPolicy from '../components/PrivacyPolicy.jsx';
import TermsOfService from '../components/TermsOfService.jsx';
import ContactUs from '../components/ContactUs.jsx';

const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <TreeFarm />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "termsofservice",
        element: <TermsOfService />
      },
      {
        path: "contactus",
        element: <ContactUs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
