import React from 'react'
import Header from './components/header/header' 
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/Experience/experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>

    <Contact/>
    <Footer/>
    </div>
  )
}

export default App