import './App.css'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'

function App() {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
    }
  ])

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
