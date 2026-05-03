import './App.css'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: 
      <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/dashboard',
      element:
      <div>
        <Navbar />
        <Dashboard />
      </div>
    },
    {
      path: '/about',
      element:
      <div>
        <Navbar />
        <About />
      </div>
    }
  ])

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
