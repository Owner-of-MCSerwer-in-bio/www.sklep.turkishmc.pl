import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LangProvider } from "./LangContext";

export default function App() {
  return (
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  );
}
