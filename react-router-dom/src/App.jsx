import './App.css'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Layout />} >
          <Route path = "/home" element={<Home />} />
          <Route path = "/profile/:username" element={<Profile />} />
          <Route path = "/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
