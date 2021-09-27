import { useState } from 'react';
import axios from 'axios'

function September13() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [dob, setBob] = useState()
    const [dod, setDod] = useState()
    function date(){
        let creation_date = new Date()
        setEmail(creation_date)
        console.log(creation_date);
    }
    function g1(){
        axios.post(`http://localhost:3000/author`,{
            first_name: name,
            last_name:email,
            dob:dob,
            dod:dod
          }) // get data by using axios
    }
    return(
        <div container>
          <div>
            <div>
            1)we have finished the API to create author. 
now you have to create Author component where you have to create a form. you have to enter 
fields like author first_name,last_name,dob and dod. note; dob and dod should be type =date field. on clicking submit button you have to send post request to create author. 
if author is created successfully you have to display "author successfully added" in a heading. 
you also have to use loader when you are making request to the server.
            </div>
            <div>
                <div>
                <input type="text" name="name" placeholder="first_name" onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <div>
                <input type="text" name="name" placeholder="last_name" onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                dob:<input type="date"  onChange={(e)=>{setBob(e.target.value)}} />
                </div>
                <div>
                dod:<input type="date"  onChange={(e)=>{setDod(e.target.value)}} />
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

export default September13