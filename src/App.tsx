import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
  Tech,
} from './components'
import Projects from './components/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Projects />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
