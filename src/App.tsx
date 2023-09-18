import { BrowserRouter } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Home />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
