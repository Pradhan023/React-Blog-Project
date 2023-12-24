import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'
import './Component/Loader style/Loader.css'
import axios from 'axios'
import DataProvide from './Component/Router/DataProvide'
import Store from './Component/DataStore'


const App = () => {
  const [api,setApi] = useState([])

    useEffect(()=>{
        axios.get('https://blog-api-hqh6.onrender.com/api/blogsite/main/data').then((res)=> setApi(res.data));
    },[])

    const [Data] = useState(Store)

    if(api.length === 0){
      return(
        <div class="lds-dual-ring"></div>
      )
    }
    else{
      return (
        <div>
          <Data.Provider value={api}>
          <DataProvide/>
          <Footer/>
          </Data.Provider>
        </div>
      )
    }
}

export default App