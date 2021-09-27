import { useState , useEffect } from 'react';
import axios from 'axios'

function September11() {
    const [name, setName] = useState([])
    const [data, setData] = useState([])

    function g(){
        axios.get(`http://localhost:3000/todo/:${name}`)  // get data by using axios 
             .then(function(res){
                 console.log(res.data)
                 setData(res.data)
             })
    }
    return(
        <div>
            <div>
            3) Next create a /todo/:id where you can get a single todo by id.
            </div>
            <div>
                <input type="text" name="name" placeholder="id" onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div>
            <button onClick={g}>Submit</button>
            </div>
    </div>
    )
}

export default September11