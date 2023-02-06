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
    // <div>
    //   {url}
    //   <div>
    //     {CRN}
    //   </div>
    // </div>
    <div class="main dynamic">
        <div class="main__image">
            <img src="https://cdn.dribbble.com/users/1996780/screenshots/12520030/media/34dcdea5c87844fb20cb4b5afed96b2e.jpg" alt="Under construction 3d render"/>
        </div>
        <div class="main__content">
            <p class="main__content-sub">Site Under</p>
            <p class="main__content-main">Construction</p>
        </div>
    </div>
  )
}

export default Dynamic