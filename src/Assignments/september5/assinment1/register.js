import { useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function September9() {
    const [brandname, setBrandname] = useState()
    const [c, setC] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    function g(){
        axios.get(`http://localhost:3000/registration`)  // get data by using axios 
             .then(function(res){
                 console.log(res.data)
             })
    }
    function g1(){
        axios.post(`http://localhost:3000/registration`,{
            name: name,
            email:email,
            password:password,
            gender:c,
            city:brandname,
          }) // get data by using axios
    }
    const handleChange = (event) => {
        setBrandname(event.target.value);
      };
    return(
        <div container>
    <div>
    <div>
    1)Create a registration app. it will have 2 url. 
 url1: /register. you will show a form with name, email, password, gender(in a radio button),cities(in a select option , u need to show only 4 cities bangalore, chennai, Delhi and Mumbai). 
 on clicking submit button you will add a user in the users array in the nodejs program. 
 url2: /showusers . this url you will show all users in a table with their name, email, password, geneder and cities info. 
        </div>
    <div>
            <div>
            <input type="text" name="name" placeholder="name" onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div>
            <input type="text" name="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
            <input type="text" name="password" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div>
                    <label for="cars">Brand</label>
                        <select onChange={handleChange} name="city" id="city">
                            <option value="bangalore">bangalore</option>
                            <option value="chennai">chennai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </div>
                    <label>Gender</label>
                    <div>
                    <input type="radio" id="male" name="gender" onChange={()=>{setC("male")}}/>
                    <label for="gender">male</label>
                </div>
                <div>
                    <input type="radio" id="male1" name="gender" onChange={()=>{setC("female")}}/>
                    <label for="gender">female</label>
                </div>
        </div>
        <div>
    <button variant="contained" color="primary" onClick={g1}>Find Age</button>
    </div>
    
    <div>
        </div>
    </div>
    <div>
    </div>
    </div>
    )
}

export default September9