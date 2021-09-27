import { useState } from 'react';
import axios from 'axios'

function September23(props) {
    function date(){
        let creation_date = new Date()
        props.setEmail(creation_date)
        console.log(creation_date);
    }
    function g1(){
        axios.post(`http://localhost:3000/todo`,{
            name: props.name,
            date:props.email,
            status:props.status
          }) // get data by using axios
    }
    return(
        <div container>
          <div>
            <div>
            </div>
            <div>
                <div>
                <input type="text" name="name" placeholder="name" onChange={(e)=>{props.setName(e.target.value)}} />
                </div>
                <button onClick={date}>creation_date</button>
                <label>Status</label>
                <div>
                    <input type="radio" id="male" name="gender" onChange={()=>{props.setStatus(true)}}/>
                    <label for="gender">available</label>
                </div>
                <div>
                    <input type="radio" id="male1" name="gender" onChange={()=>{props.setStatus(false)}}/>
                    <label for="gender">unavailable</label>
                </div>
            <div>
            <button variant="contained" color="primary" onClick={g1}>Submit</button>
        </div>
    
        <div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default September23