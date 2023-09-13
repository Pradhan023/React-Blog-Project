import React, { useContext, useState } from 'react'
import Store from '../DataStore'

const Food = () => {
  const Data = useContext(Store)
  const [count , setCount] = useState(7)
  const Filtered = Data && Data.filter((item)=> item.category === 'Bollywood')
  const [Newcount] = useState(4)
  return (
    <div>Food</div>
  )
}

export default Food