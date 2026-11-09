import MyNavbar from "../components/common/MyNavbar"
import Footer from "../components/common/Footer"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
