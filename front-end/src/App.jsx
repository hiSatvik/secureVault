import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LeftSection from "./pages/dashboard/LeftSection";
import AddFiles from "./pages/dashboard/AddFiles";
import DisplayFiles from "./pages/dashboard/DisplayFiles";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DisplayFiles />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}