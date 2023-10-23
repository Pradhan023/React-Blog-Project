import React, { useContext, useState } from 'react'
import Store from '../DataStore'
import UI from '../User Interface/UI'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../User Interface/UI.css'

const Education = () => {
    const Data = useContext(Store)
    console.log(Data);
    const [count , setCount] = useState(7)
    const Filtered = Data && Data.filter((item)=> item.category === 'Education')
    const [Newcount] = useState(4)
    const ScrollTo = () =>{
      window.scrollTo(0,0)
    }

  return (
    <>
    <Navbar/>
    <div className="Parent-container-comp">
        
        <div className="child1">
        <h1 className='headcategory'>Education</h1>
        {Filtered && Filtered.map((Data,index) =>{
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
        {Filtered && Filtered.map((Data,index) =>{
          if (index < Newcount) 
          {
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
         }
        })}
        </div>

        
          <img src='https://i0.wp.com/wave-event.co/wp-content/uploads/2023/02/WAVE-Virtual-1200-%C3%97-300-px.gif?ssl=1' className="child3" />
        

    </div>
        
    </>
  )
}

export default Education