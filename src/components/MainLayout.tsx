import { Footer, Hero, Navbar } from '.'
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-0 bg-primary overflow-hidden">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
