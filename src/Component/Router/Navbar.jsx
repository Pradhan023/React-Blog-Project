import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css'
import menu from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'

const Navbar = () => {
  const[on,setOn] = useState(true)
  const Nav = useNavigate()
  const ScrollTo = () =>{
    window.scrollTo(0,0)
  }

  return (
    <div className='nav-parent'>
      <button className='nav-btn' onClick={() => Nav('/')} >
      <div className="siren">
          <p>The</p>
          <h2>Siren</h2>
        </div>
      </button>
        <button  onClick={()=> setOn(!on)} className='menu-icon' >
        <img src={menu} className='menu'/>
        </button>

      <div className={on ? "Navbar stayopen " : "Navbar"}>
      <NavLink onClick={ScrollTo} to='/' className='textlink'>Home</NavLink>
      <NavLink onClick={ScrollTo} to='/bollywood' className='textlink'>Bollywood</NavLink>
      <NavLink onClick={ScrollTo} to='/hollywood' className='textlink'>Hollywood</NavLink>
      <NavLink onClick={ScrollTo} to='/technology' className='textlink'>Technology</NavLink>
      <NavLink onClick={ScrollTo} to='/fitness' className='textlink'>Fitness</NavLink>
      <NavLink onClick={ScrollTo} to='/education' className='textlink'>Education</NavLink>
      </div>
      
    </div>
  )
}

export default Navbar