import React, { useContext, useState } from 'react'
import Store from '../DataStore';
import Navbar from './Navbar';
import HomeToppost from '../User Interface/Home-Toppost';
import '../User Interface/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const Data  = useContext(Store)
    const [count,setcount] = useState(4)
    const [scount,ssetcount] = useState(3)
  return (
    <>
    <Navbar/>

    <div className="Home-gridcont">

      <div className="imgcont-grid">
      <div className="image-collage">
        <img className="image-collage1" src='https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/disha-patanis-glittery-nde-dress-revealing-her-navel-bbs-in-a-cleavage-hugging-string-tied-top-shamed-by-netizens-001.jpg' />
        <img className="image-collage2"  src='https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/08/zack-snyders-justice-league-sequel-had-plans-of-making-this-villain-a-big-baddy-of-the-dc-universe.jpg' />
        <img className="image-collage3"  src='https://i.gadgets360cdn.com/large/Bermix_Studio_cryptoscam_unsplash_bigpic_1640680220999.jpg?downsize=950:*' />
      </div>
      </div>

      {/* the latest  */}

      <div className='thelatest'>
      <h1>The Latest</h1>
          <div className="latestcontainer">
          {Data && Data.filter((item)=> { 
            if (item.id  === 1) {
              return(
                item.Anish === 'Pradhan'
                )
              }
            }  ).map((Data,index) =>{
              return(
                    <div key={index} className="Latestcontant">
                      <Link to={`/news/${Data.id}/${Data.category}`} >
                      <img src={Data.image} alt='Loading....' className='imgthelat'/>
                      <div style={{padding:'13px'}}>
                      <h2>{Data.heading}</h2>
                      <p>{`${Data.description.slice(0,90)}....`}</p>
                      <span><b>Travel </b>/<small>August 09 2023</small></span>
                    </div>
                      </Link>
                    </div>
              )
          })}
          </div>
          </div>

          {/* Latest article */}

          <div className="latest-article">
          <h1 className='latest-artgtop'>Latest Articles</h1>
          {Data && Data.filter((item)=> { 
            if (item.id % 2 === 0 ) {
              return(
                item.Anish === 'Pradhan'
              )
            }
          }  ).map((Data,index) =>{
              if (index < count) {
                return(
                  <Link key={index} to={`/news/${Data.id}/${Data.category}`} >
                      <div className="latest-article-con">
                      <img src={Data.image} alt='Loading..'/>
                      <div className="latest-article-text">
                        <h1>{`${Data.heading.slice(0,91)}....`}</h1>
                        <p>{`${Data.description.slice(0,110)}....`}</p>
                        <span><b>Travel </b>/<small>August 09 2023</small></span>
                      </div>
                    </div>
                    </Link>
              )
              }
          })}
          <button onClick={()=>setcount(count+2)} className='home-load'>Load more 🔃 </button>
          </div>

          <img src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa254ZjUzcHk5ZWwwZzFja21ld3NjaDFzcGIxZ3I3bzk0ZmtiMjBjdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zaknj3KnPY5TIzNuS9/giphy.gif' className="advert" />

          
            <img src='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' className='single' />

          {/* toppost */}
          <div className="toppost-home">
            <h1 className='Home-head'>Top Post</h1>
          {Data && Data.filter((item)=> item.id % 2 === 0 ).map((Data,index) =>{
              return(
                  <Link key={index} to={`/news/${Data.id}/${Data.category}`} >
                    <HomeToppost index={index} imgurl={Data.image} head={Data.heading} />
                  </Link>
              )
          })}
          </div>

          {/* latest stories */}

          <div className="latest-stories">
          <h1 className='latest-hd'>Latest Stories</h1>
          <div className="story-container">
          {Data && Data.filter((item)=> { 
            if ((Math.trunc(item.id % 2) === 0)) {
              return(
                item.Anish === 'Pradhan'
              )
            }
          }  ).map((Data,index) =>{
              if (index < scount) {
                return(
                  <div className='st-cont' key={index}>
                    <Link to={`/news/${Data.id}/${Data.category}`} >
                      <h1>{Data.heading}</h1>
                      <p>{Data.description}</p>
                      <span><b>Travel </b>/<small>August 09 2023</small></span>
                    </Link>
                  </div>
              )
              }
          })}
          </div>
          <button onClick={()=>ssetcount(scount+3)} className='home-load'>Load more 🔃  </button>
          </div>

    </div>
    
    </>
  )
}

export default Home