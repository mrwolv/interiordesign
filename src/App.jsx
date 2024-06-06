import React from "react";

import Router from "./router/Router";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}
