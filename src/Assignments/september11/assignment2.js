import { useState , useEffect } from 'react';
import axios from 'axios'

function September11() {
    const [name, setName] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/todo`)  // get data by using axios 
             .then(function(res){
                 console.log(res.data)
                 setName(res.data)
             })
    },[])
    return(
        <div>
            <div>
            2) Next create a get api /todo where u can get a list of all todos.
            </div>
            <div container>
    <div>
    <div>
    <div>
    <table>
  <tr>
    <th>name</th>
  </tr>
  {name.length > 0 ? <> {name.map((l)=>{
  return <tr>
    <td>{l.name}</td>
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