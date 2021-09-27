import { button, div, InputLabel, MenuItem, Select, input } from '@material-ui/core';
import Radio from '@material-ui/core/Radio'
import { useState } from 'react';

function August24() {
    const [no1 , setNo1] = useState()
    const [no2, setNo2] = useState()
    const [sum, setSum] = useState()

    // calculatio function
    function calculator(a,b,operation){

        let a1 = parseInt(a)
        let b1 = parseInt(b)
        if(operation=="addition"){
            setSum(a1+b1)
        }
        else if(operation=="subtraction"){
            setSum(a1-b1)
        }
        else if(operation=="multiplication"){
            setSum(a1*b1 )
        }
      }
    return(
        <div>
    1)Create a Calculator that can add,multiply,divide, and subtract value. 
The values can be entered in a form. on clicking submit button show the result. 
use state variables.
    <div>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setNo1(e.target.value)}}/>
        </div>
        <div item style={{padding:"1% 0px",marginLeft:"10px"}}>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setNo2(e.target.value)}}/>
        </div>
        <div item xs={12} style={{padding:"1% 0px"}}>
        <input type="number" placeholder="Ans" value={sum}/>
        </div>
        <div item xs={4} style={{padding:"1% 0px"}}>
    <button variant="contained" color="primary" onClick={()=>{calculator(no1,no2,"addition")}}>addition</button>
    </div>
    <div item xs={4} style={{padding:"1% 0px"}}>
    <button variant="contained" color="primary" onClick={()=>{calculator(no1,no2,"subtraction")}}>subtraction</button>
    </div>
    <div item xs={4} style={{padding:"1% 0px"}}>
    <button variant="contained" color="primary" onClick={()=>{calculator(no1,no2,"multiplication")}}>multiplication</button>
    </div>
    </div>
    )
}

export default August24