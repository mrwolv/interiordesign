import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../ui/Layout";
import Home from "../ui/Home";
import ContactUs from "../pages/Contact-us";
import Error from "../pages/Error";

export default function Router() {
  const BrowserRoute = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={BrowserRoute} />;
}
