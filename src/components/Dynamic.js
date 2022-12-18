import React from 'react'
import {useParams , useEffect , useLocation } from 'react-router-dom'
import Data from '../Data.js'

const Dynamic = () => {
    let {CRN} = useParams();
    console.log(CRN)
    let rd = Data.find(o => o.CRN == CRN);
    console.log('This is the'+rd.URL);
    let url = rd.URL

    setTimeout(() => window.location.replace(`${url}`), 1000);
    
    return (
    <div>
      Redirecting
    </div>
  )
}

export default Dynamic