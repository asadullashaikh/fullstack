import { useState } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Register from './register'
import Showusers from './showusers';

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
        <Router>
            <Link to="/register"><button>register</button></Link>
            <Link to="/showusers"><button>showuser</button></Link>
            <Switch>
                <Route exact path = "/register" component={Register}></Route>
                <Route exact path =  "/showusers" component={Showusers}></Route>
            </Switch>
        </Router>
    </div>
    )
}

export default September9