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
    const ScrollTo = () =>{
      window.scrollTo(0,0)
    }

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
                <Link onClick={ScrollTo} key={index} to={`/news/${Data.id}/${Data.category}`} >
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

        <img src='https://static1.squarespace.com/static/600dbd4a387b98582a60c7fa/61cbb676425b9f00e13d8360/62b7ddc03495104834b872bd/1656385605829/Soda+Can+Commercial+GIF.gif?format=1500w' className="child3" />

        </div>
      </>
    )
}

export default Technology