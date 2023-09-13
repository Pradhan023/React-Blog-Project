import React from 'react'
import './UI.css'

const UI = ({imgurl,heading,desc}) => {
  return (
    <>
        <div className="Page-content" >
            <img src={imgurl} alt='Loading' className='img'/>
            <div className="text">
              <h2 className='heading' >{`${heading.slice(0,95)} ....`}</h2>
              <p className='desc' >{`${desc.slice(0,120)} ....`}</p>
              <span><p><b>Travel</b> / August 21 2023</p></span>
            </div>
        </div>
    </>
  )
}

export default UI