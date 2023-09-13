import React, { useContext, useState } from 'react'
import Store from '../DataStore'
import UI from '../User Interface/UI'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../User Interface/UI.css'

const Bollywood = () => {
    const Data = useContext(Store)
    const [count , setCount] = useState(7)
    const Filtered = Data && Data.filter((item)=> item.category === 'Bollywood')
    const [Newcount] = useState(4)

  return (
    <>
    <Navbar/>
    <div className="Parent-container-comp">
        
        <div className="child1">
        <h1 className='headcategory'>Bollywood</h1>
        {Filtered.map((Data,index) =>{
          if(index < count)
          {
            return(
                <Link key={index} to={`/news/${Data.id}/${Data.category}`} >
                <UI index={index} imgurl={Data.image} heading={Data.heading} desc={Data.description} />
                </Link>
          )
          }
        })}
          <button onClick={()=>setCount(count+4)} className='load'>Load more 🔃  </button>
        </div>


        <div className="child2">
        <h1 className='headtop-post'>Top Post</h1>
        {Filtered.map((Data,index) =>{
          if (index < Newcount) 
          {
          return (
                  <Link key={index} to={`/news/${Data.id}/${Data.category}`} >
                  <div className="toppost" >
                        <img src={Data.image} className='topimg'/>
                        <div className='top-text'>
                          <p className='top-head'>{`${Data.heading.slice(0,66)} ...`}</p>
                          <span><p><b>Travel</b> / August 21 2023</p></span>
                        </div>
                  </div>
                  </Link>
            )
         }
        })}
        </div>

        
          <img src='https://images.ctfassets.net/inb32lme5009/b80AUihxQ3RglfpEHApvy/6095d4e28b52a3bc6d979a3f0c4851ba/Doc_Martin.gif?q=40&h=600' className="child3" />
        

    </div>
        
    </>
  )
}

export default Bollywood