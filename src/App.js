import {BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Services from './Components/Services';
import About from './About';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@mui/icons-material/Clear';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useEffect } from 'react';
import 'animate.css/animate.min.css'
import { contact } from './Components/store';
function App() {

  const Dispatch = useDispatch()
  const status = useSelector((val)=>{
    return(val.contact.displayx)
  })
const array = useSelector((val)=>{
  return val.contact.links
})
const about = useSelector((val)=>{
  return( val.contact.open )
})
const windowx = window.location.href
useEffect(()=>{
  array.map((val)=>{
    if(windowx.includes(val)){
      const value =document.getElementsByClassName(`${val}`)
      value[0].setAttribute('id','header')
      let next = value[0].nextElementSibling
      let previous = value[0].previousElementSibling
      while( next !== null ){
        next.removeAttribute('id' )
        next= next.nextElementSibling
      }
      while (previous !== null){
        previous.removeAttribute('id')
        previous= previous.previousElementSibling
      }
    }
    return(
      <span></span>
    )
  })
  
  if (about){
   const value = document.getElementsByClassName('about')
    value[0].setAttribute('id','header')
      let next = value[0].nextElementSibling
      let previous = value[0].previousElementSibling
      while( next !== null ){
        next.removeAttribute('id' )
        next= next.nextElementSibling
      }
      while (previous !== null){
        previous.removeAttribute('id')
      console.log(previous)
      previous= previous.previousElementSibling
      }
  }
},[about])
 
  const screen_size = window.innerWidth
  function click(e){
    const data = e.target
    data.setAttribute('id','header')
    let next = data.nextElementSibling
    while( next !== null ){
      next.removeAttribute('id' )
      next= next.nextElementSibling
    }
    let previous = data.previousElementSibling
    console.log(previous)
    
    while(previous !== null){
      previous.removeAttribute('id')
      console.log(previous)
      previous= previous.previousElementSibling
    }
    if(screen_size < '501')
    {
      Dispatch(contact.unchange())
    }
  }
  return (
    <BrowserRouter>
      <header className="App">
        <span>Gabriel</span>
        <div style={{display:status}} className="domant">
          <div className='link'>
            <ClearIcon className='clear' onClick={
              ()=>{
                Dispatch(contact.unchange())
              }
            }/>
            <NavLink  onClick={click} id='header' className='to-link' to='/'>Home</NavLink >
            <NavLink onClick={click} className='to-link about' to='/about'>About</NavLink >
            <NavLink onClick={click} className='to-link resume' to='/resume'>Resume</NavLink >
            {/* <NavLink onClick={click} className='to-link services' to='/services'>Services</NavLink> */}
            <NavLink onClick={click} className='to-link portfolio' to='/portfolio'>Portfolio</NavLink >
            <NavLink onClick={click} className='to-link contact' to='/contact'>Contact</NavLink >
          </div>
        </div>
        <section className='icon'>
          <a  style={{color:'black'}} href='https://twitter.com/alphamhale/'><TwitterIcon/></a>
          <a style={{color:'black'}} href='https://www.instagram.com/alpha_mhalee'><InstagramIcon/></a>
          <a style={{color:'black'}} href='https://www.linkedin.com/in/gabriel-akinyemi-2362b0232/'><LinkedInIcon/></a>
        </section>
        <DensityMediumIcon className='none'onClick={
              ()=>{
                Dispatch(contact.change())
              }
            } />
      </header>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route  path='/portfolio' element={<Portfolio/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/resume' element={<Resume/>}></Route>
        <Route  path='/services' element={<Services/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
