import React, { useContext, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Store from '../DataStore';
import logo from '../../assets/Mask Group 16@2x.png'
import clap from '../../assets/rythm.svg'
import share from '../../assets/share.svg'
import '../User Interface/new-page.css'

const Newpage = () => {
  const params = useParams();
  const paramId = params.id;
  const paramcat = params.category
  const Data = useContext(Store)
  const[num] = useState(3)
  const filtered = Data.filter((item)=> (item.id == paramId) && (item.category === paramcat) );
  const nav = useNavigate()

  return (
    <>
    <div className="newpage-navbar">
      <div className="logo" onClick={()=>{ nav('/')}}>
        <p>The</p>
        <h1>Siren</h1>
      </div>
      <div className="btn">
        <p>Get Started</p>
      </div>
    </div>

    <div className="page-sl">
        <img src={clap} alt='Loading..' />
        <img src={share} alt='Loading..' />
      </div>

    {/* page content */}
    <div className="newpage-parent">

      <div className="newpage-child">

      <div className="newpage-header">
      <h1>{filtered[0].heading}</h1>
      </div>
      
      <div className="userinfo">
      <img src= {logo} className='user-logo'/>
      <div className="user-name">
      <span>
      <h3>Anish Pradhan</h3>
      <small>aug 13 2023. 10 min read</small>
      </span>
      </div>
      </div>


      <img src={filtered[0].image} className="page-img" />
      
      
      <p className="page-desc">{filtered[0].contentDesc}</p>

      </div>

    </div>
    
    <div className='more-cont'>
    <h2>More from The Siren</h2>
    <p className='high' >Related Highlights</p>
    <div className='more-parnet'>
      {
        Data.filter((item) => item.category == paramcat).map((dd,index)=>{
          if (index < num ) {
            return(
              <div>
              
              <Link to={`/morenews/${dd.id}/${dd.category}`}>
              <div key={index} className='more-child'>
              <img src={dd.image} className='more-img' alt='Loading....' />
              <h1>{dd.heading}</h1>

              <div className="userinfo">
              <img src= {logo} className='Moreuser-logo'/>
              <div className="Moreuser-name">
              <span>
              <h3>Anish Pradhan</h3>
              <small>aug 13 2023. 10 min read</small>
              </span>
              </div>
              </div>
              </div>
              </Link>
              
              </div>
            )
          }
        })
      }
    </div>
    </div>

    </>
  )
}

export default Newpage