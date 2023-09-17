import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import menu from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'

const Navbar = () => {
  const[on,setOn] = useState(false)

  return (
    <div className='nav-parent'>
      <div className="siren">
          <p>The</p>
          <h2>Siren</h2>
        </div>
        <button  onClick={()=> setOn(!on)} className='menu-icon' >
        <img src={menu} className='menu'/>
        </button>

      <div className={on ? "Navbar stayopen " : "Navbar"}>
      <NavLink to='/' className='textlink'>Home</NavLink>
      <NavLink to='/bollywood' className='textlink'>Bollywood</NavLink>
      <NavLink to='/hollywood' className='textlink'>Hollywood</NavLink>
      <NavLink to='/technology' className='textlink'>Technology</NavLink>
      <NavLink to='/fitness' className='textlink'>Fitness</NavLink>
      </div>
      
    </div>
  )
}

export default Navbar