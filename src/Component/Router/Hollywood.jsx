import React from 'react'
import Store from '../DataStore'
import { useContext } from 'react'
import UI from '../User Interface/UI'
import Navbar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Hollywood = () => {
    const Data = useContext(Store)
    const [count , setCount] = useState(7)
    const Filtered = Data && Data.filter((item)=> item.category === 'Hollywood')
    const [Newcount] = useState(4)
    
  return (
    <>
    <Navbar/>
    <div className="Parent-container-comp">
        
        <div className="child1">
        <h1 className='headcategory'>Hollywood</h1>
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
                  <Link to={`/news/${Data.id}/${Data.category}`} >
                  <div className="toppost" >
                        <img src={Data.image} className='topimg'/>
                      <div className='top-text'>
                        <p className='top-head' >{`${Data.heading.slice(0,66)} ...`}</p>
                        <span><p><b>Travel</b> / August 21 2023</p></span>
                      </div>
                  </div>
                  </Link>
            )
         }
        })}
        </div>

        <img src='https://www.campaignmonitor.com/wp-content/uploads/2019/04/uniqlo-email-gif-example.gif' className="child3" />
      
      </div>
    </>
  )
}

export default Hollywood