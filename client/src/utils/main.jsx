import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TreeFarm from '../components/TreeFarm.jsx';
import About from '../components/About.jsx'
import Services from '../components/Services.jsx';

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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
