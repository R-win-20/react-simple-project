import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Notfound = lazy(() => import("./components/Notfound"));
const Layout = lazy(() => import("./components/Layout"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Team = lazy(() => import("./components/Team"));
const Terms = lazy(() => import("./components/Terms"));
const Blog = lazy(() => import("./components/Blog"));

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Loading..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/our-services-and-features",
        element: (
          <Suspense fallback={"Loading..."}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={"Loading..."}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/meet-the-team",
        element: (
          <Suspense fallback={"Loading..."}>
            <Team />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/blog-marketing-solutions",
    element: (
      <Suspense fallback={"Loading..."}>
        <Blog />
      </Suspense>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <Suspense fallback={"Loading..."}>
        <Terms />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={"Loading..."}>
        <Notfound />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
