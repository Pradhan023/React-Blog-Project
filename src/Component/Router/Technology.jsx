import React, { useContext } from 'react'
import Store from '../DataStore'
import UI from '../User Interface/UI'
import Navbar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Technology = () => {
    const Data = useContext(Store)
    const [count , setCount] = useState(7)
    const Filtered = Data && Data.filter((item)=> item.category === 'Technology')
    const [Newcount] = useState(4)

    return (
      <>
      <Navbar/>
      <div className="Parent-container-comp">
        
        <div className="child1">
        <h1 className='headcategory'>Technology</h1>
        {Filtered.map((Data,index) =>{
          if(index < count)
          {
            return(
                <Link ey={index} to={`/news/${Data.id}/${Data.category}`} >
                <UI index={index} imgurl={Data.image} heading={Data.heading} desc={Data.description} />
                </Link>
          )
          }
        })}
        <button onClick={()=>setCount(count+4)} className='load'>Load more 🔃</button>
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

        <img src='https://i.pinimg.com/originals/d7/99/ca/d799ca5c7f0985266103e1e0c255485a.gif' className="child3" />

        </div>
      </>
    )
}

export default Technology