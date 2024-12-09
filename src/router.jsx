import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },

  { path: "/Contact", element: <Contact /> },
]);
