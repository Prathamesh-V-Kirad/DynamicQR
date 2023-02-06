import React from 'react'
import {useParams } from 'react-router-dom'
import Data from '../Data.js'

const Dynamic = () => {
    let {CRN} = useParams();
    console.log(CRN)
    let rd = Data.find(o => o.CRN == CRN);
    console.log('This is the'+rd.URL);
    let url = rd.URL

   // setTimeout(() => window.location.replace(`${url}`), 10000);
    
    return (
    <div>
      {url}
      <div>
        {CRN}
      </div>
    </div>
  )
}

export default Dynamic