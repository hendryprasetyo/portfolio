import { Footer, Navbar } from '.'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <div className="flex relative bg-primary min-h-screen w-full flex-col antialiased overflow-hidden">
      <Navbar />
      <main className="mx-auto flex w-full flex-grow flex-col lg:max-w-screen-lg xl:max-w-screen-xl xl:px-[2rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
