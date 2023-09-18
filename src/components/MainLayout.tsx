import { Footer, Hero, Navbar } from '.'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className="relative z-0 bg-primary overflow-hidden">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
