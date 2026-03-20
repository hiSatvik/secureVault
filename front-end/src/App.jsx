import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LeftSection from "./pages/dashboard/LeftSection";
import AddFiles from "./pages/dashboard/AddFiles";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddFiles />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}