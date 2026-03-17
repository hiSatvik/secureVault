import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AnchorLink from "./Components/AnchorLink"
import Layout from "./pages/home/layout"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}