
import {Link} from "react-router-dom";
import "../index.css";
import Data from '../Data.js'


const Home = () => {
  return (
    <div className="home-main">

    <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign:"center"}}>ID</th>
                <th style={{textAlign:"center"}}>CRN</th>
                {/* <th style={{textAlign:"center"}}>URL</th> */}
                <th style={{textAlign:"center"}}>Action</th>
            </tr>
        </thead>
        <tbody>
            {Data.map((item,index)=>{
                return (
                    <tr key={item.CRN}>
                        <th scope="row">{index+1}</th>
                        <td>{item.CRN}</td>
                        {/* <td>{item.URL}</td> */}
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