import { useEffect, useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function September9() {
    const [name, setName] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/registration`)  // get data by using axios 
             .then(function(res){
                 console.log(res.data)
                 setName(res.data)
             })
    },[])
    return(
        <div container>
    <div>
    <div>
    <div>
    <table>
  <tr>
    <th>name</th>
    <th>email</th>
    <th>password</th> 
  </tr>
  {name.length > 0 ? <> {name.map((l)=>{
  return <tr>
    <td>{l.name}</td>
    <td>{l.email}</td>
    <td>{l.password}</td>
  </tr>})}</>:<></>}
</table>
        </div>
    </div>
    <div>
        
        </div>
    </div>
    </div>
    )
}

export default September9