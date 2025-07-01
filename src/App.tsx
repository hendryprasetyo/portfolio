import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import { Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-white">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/portfolio" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
