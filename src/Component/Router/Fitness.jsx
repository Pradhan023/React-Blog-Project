import React from 'react'
import Store from '../DataStore'
import { useContext } from 'react'
import UI from '../User Interface/UI'
import Navbar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Fitness = () => {
    const Data = useContext(Store)
    const [count , setCount] = useState(7)
    const Filtered = Data && Data.filter((item)=> item.category === 'Fitness')
    const [Newcount] = useState(4)
    const ScrollTo = () =>{
      window.scrollTo(0,0)
    }

  return (
    <>
    <Navbar/>
    <div className="Parent-container-comp">
        
        <div className="child1">
        <h1 className='headcategory'>Fitness</h1>
        {Filtered.map((Data,index) =>{
          if(index < count)
          {
            return(
                <Link onClick={ScrollTo} key={index} to={`/news/${Data.id}/${Data.category}`} >
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
          
          if(index === 0)
          {
              return (
                <Link onClick={ScrollTo} key={index} to={`/news/${Data.id}/${Data.category}`} >
                <div className="toppost-1" >
                      <img src={Data.image} className='topimg-1'/>
                      <div className='top-text-1'>
                        <p className='top-head-1'>{`${Data.heading.slice(0,66)} ...`}</p>
                        <span><p><b>Travel</b> / Sept 20 2023</p></span>
                      </div>
                </div>
                </Link>
              )
          }

          if(index > 0 && index < Newcount) {
              return (
                <Link onClick={ScrollTo} key={index} to={`/news/${Data.id}/${Data.category}`} >
                <div className="toppost" >
                      <img src={Data.image} className='topimg'/>
                      <div className='top-text'>
                        <p className='top-head'>{`${Data.heading.slice(0,66)} ...`}</p>
                        <span><p><b>Travel</b> / Sept 20 2023</p></span>
                      </div>
                </div>
                </Link>
              )
          }
        })}
        </div>
        
        <img src='https://storage.googleapis.com/website-production/uploads/2019/01/snapchat-promotions-collections.gif' className="child3" />
      
      </div>

    </>
  )
}

export default Fitness