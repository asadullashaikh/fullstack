import { useState , useEffect } from 'react';
import axios from 'axios'

function September11() {
    const [name, setName] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/author`)  // get data by using axios 
             .then(function(res){
                 console.log(res.data)
                 setName(res.data)
             })
    },[])
    return(
        <div>
            <div>
            2) in the same author component, you also have to show all authors below the author form. 
you again have to make get request, get all author details and show all the authors in a table. 
            </div>
            <div container>
    <div>
    <div>
    <div>
    <table>
  <tr>
    <th>first_name</th>
    <th>last_name</th>
    <th>dob</th>
    <th>dod</th>
  </tr>
  {name.length > 0 ? <> {name.map((l)=>{
  return <tr>
    <td>{l.first_name}</td>
    <td>{l.last_name}</td>
    <td>{l.dob}</td>
    <td>{l.dod}</td>
  </tr>})}</>:<></>}
</table>
        </div>
    </div>
    <div>
        
        </div>
    </div>
    </div>
    </div>
    )
}

export default September11