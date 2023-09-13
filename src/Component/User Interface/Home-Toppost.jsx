import React, { useState } from 'react'
import './home-top.css'

const HomeToppost = ({index,imgurl,head}) => {
    const [count] = useState(4)
        
        {
            if (index < count) 
            {
            return (
                <div className="Home-toppost">
                        <img src={imgurl} className='Home-topimg'/>
                    <div className='Home-top-text'>
                    <p className='Home-tophead' >{`${head.slice(0,70)}...`}</p>
                    <span><p><b>Travel</b> / August 21 2023</p></span>
                  </div>
                </div>
          )
    }
}
  
}

export default HomeToppost