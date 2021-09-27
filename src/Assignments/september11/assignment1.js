import { useState } from 'react';
import axios from 'axios'

function September11() {
    const [status, setStatus] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    function date(){
        let creation_date = new Date()
        setEmail(creation_date)
        console.log(creation_date);
    }
    function g1(){
        axios.post(`http://localhost:3000/todo`,{
            name: name,
            date:email,
            status:status
          }) // get data by using axios
    }
    return(
        <div container>
          <div>
            <div>
            1)Create a Todo App API. 
        the todo has 2 properties, name, creation_date, status. status is boolean, creation_date is when todo is created and name is string.
        Refer to this documentation for boolean data type. https://mongoosejs.com/docs/ schematypes.html

        You have to first create a model class. 
        then you have to create controller. 

        your first api is to create a todo. url is /todo. 
        you will create a form in express from where you can enter the name, status and date.(note: you will not enter creation_date. this you will add in backend controller code using javascript let creation_date = new Date(). it will give you the date at that moment)
            </div>
            <div>
                <div>
                <input type="text" name="name" placeholder="name" onChange={(e)=>{setName(e.target.value)}} />
                </div>
                <button onClick={date}>creation_date</button>
                <label>Status</label>
                <div>
                    <input type="radio" id="male" name="gender" onChange={()=>{setStatus(true)}}/>
                    <label for="gender">available</label>
                </div>
                <div>
                    <input type="radio" id="male1" name="gender" onChange={()=>{setStatus(false)}}/>
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

export default September11