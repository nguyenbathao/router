import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Email from './pages/Email'
import Phone from './pages/Phone'


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path= '/about' element ={<About/>} />
        <Route path='/contact' element={<Contact/>}>
          <Route path = 'email' element = {<Email/>} />
          <Route path = 'phone' element = {<Phone/>} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
