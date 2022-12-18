import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "../index.css";
import axios from 'axios';
import Data from '../Data.js'


const Home = () => {
  return (
    <div >

    <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>ID</th>
                <th style={{textAlign:"center"}}>URL</th>
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((item,index)=>{
                return (
                    <tr key={item.CRN}>
                        <th scope="row">{index+1}</th>
                        <td>{item.URL}</td>
                        <td>
                            <Link to={`/${item.CRN} `}  state = {{url: `${item.URL}`}}>
                               <button className = "btn btn-view">View</button>
                            </Link>
                        </td>
                    </tr> 
                )
            })}
        </tbody>
    </table>
    
</div>
  )
}

export default Home