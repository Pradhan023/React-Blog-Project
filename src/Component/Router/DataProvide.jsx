import React, { useEffect, useState } from 'react'
import Data from '../DataStore'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Technology from './Technology'
import Fitness from './Fitness'
import Newpage from './Newpage'
import axios from 'axios'
import Education from './Educataion'

const DataProvide = () => {
    const [api,setApi] = useState('')

    useEffect(()=>{
        axios.get('https://blog-api-hqh6.onrender.com/api/blogsite/main/data').then((res)=> setApi(res.data));
    },[])

   
  return (
    <div>
        <Data.Provider value={api}>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bollywood' element={<Bollywood/>} />
        <Route path='/technology' element={<Technology/>} />
        <Route path='/hollywood' element={<Hollywood/>} />
        <Route path='/fitness' element={<Fitness/>} />
        <Route path='/education' element={<Education/>} />
        <Route path='/news/:id/:category' element={<Newpage/>} />
        <Route path='/morenews/:id/:category' element={<Newpage/>} />
      </Routes>
        </Data.Provider>
    </div>
  )
}

export default DataProvide