import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./components/Notfound";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/our-services-and-features",
        element: <Services />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/meet-the-team",
        element: <Team />,
      },
      {
        path: "/",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
