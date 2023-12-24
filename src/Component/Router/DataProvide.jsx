import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Technology from './Technology'
import Fitness from './Fitness'
import Newpage from './Newpage'
import Education from './Educataion'

const DataProvide = () => {
  return (
    <div>
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
    </div>
  )
}

export default DataProvide