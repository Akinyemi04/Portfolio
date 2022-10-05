import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { contact } from './store'
const Home = () => {
  const Dispatch = useDispatch()
  function open(){
    Dispatch(contact.about())
  }
  return (
    <div className='home' >
      <main>
        <h1>Akinyemi Gabriel</h1>
        <p>i'm a professional Front-end Developer </p>
        <NavLink to='/about' onClick={open} className='about-me'> About me</NavLink>
      </main>
    </div>
  )
}

export default Home