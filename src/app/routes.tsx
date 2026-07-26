import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Home";
import Regulamin from "./Regulamin";
import PlaceholderPage from "./PlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "Sklep",     element: <PlaceholderPage pageKey="shop" /> },
      { path: "FAQ",       element: <PlaceholderPage pageKey="faq" /> },
      { path: "Regulamin", Component: Regulamin },
      { path: "Pomoc",     element: <PlaceholderPage pageKey="help" /> },
    ],
  },
]);
