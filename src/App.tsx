import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
