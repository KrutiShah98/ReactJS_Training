import React from 'react'
import Home from './ZomatoProject/Home'
import Header from './ZomatoProject/Header'
import SideBar from './ZomatoProject/SideBar'
import Footer from './ZomatoProject/Footer'
import NavigationBar from './ZomatoProject/NavigationBar'

export default function App() {
  return (
    <div>
      <Home/>
      <NavigationBar/>
      <Header/>
      <SideBar/>
      <Footer/>
    </div>
  )
}
