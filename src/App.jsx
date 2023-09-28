import React, { Suspense, lazy } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer'
import './Component/Loader style/Loader.css'

const Compdisplay = lazy(()=> import('./Component/Router/DataProvide'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div class="lds-dual-ring"></div>}>
      <Compdisplay/>
      <Footer/>
      </Suspense>
    </div>
  )
}

export default App