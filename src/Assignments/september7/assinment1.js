import { useState } from 'react';
import axios from 'axios'

function September9() {
    const [name, setName] = useState([])
    const [age, setAge] = useState()
    function g(){
        axios.get(`https://api.agify.io?name=${name}`)  // get data by using axios 
             .then(function(res){
                 setAge(res.data.age)
             })
    }
    function g1(){
        axios.get(`https://api.coinbase.com/v2/currencies`) // get data by using axios
             .then(function(res){
                 console.log(res.data.data)
                setName(res.data.data)
             })
    }
    return(
        <div container>
    <div>
    <div>
    1) Create a component. you can enter a name. on entering name, you have to use 
axios to call this api. 
Predict age based on a name	https://api.agify.io?name=bella
in this api you can predict age based on name. 
so your app will send a request using axios and then you have to show the age in a div. 
you also have to show a loader which will appear when you are making request to the api. 
        </div>
    <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div>
    <button variant="contained" color="primary" onClick={g}>Find Age</button>
    </div>
    
    <div>
        {age}
        </div>
    </div>
    <div>
        
        <div>
    <button variant="contained" color="primary" onClick={g1}>sum</button>
    </div>
    
    <div>
    <table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>min_size</th>
  </tr>
  {name.length > 0 ? <> {name.map((l)=>{
  return <tr>
    <td style={{padding:"10px"}}>{l.id}</td>
    <td style={{padding:"10px"}}>{l.name}</td>
    <td style={{padding:"10px"}}>{l.min_size}</td>
  </tr>})}</>:<></>}
</table>
        </div>
    </div>
    <div>
        <div>
        
        </div>
        
        <div>
    <button variant="contained" color="primary">sum</button>
    </div>
    
    <div>
        
        </div>
    </div>
    <div>
        <div>
        
        </div>
        
        <div>
    <button variant="contained" color="primary">sum</button>
    </div>
    
    <div>
        
        </div>
    </div>
    </div>
    )
}

export default September9