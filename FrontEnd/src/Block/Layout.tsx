import Components from "../Pages/Components"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Components/>
    </div>
  )
}

export default Layout
