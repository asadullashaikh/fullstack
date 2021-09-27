import { useState } from 'react';

function Jully29() {
  const [one, setOne] = useState()
  const [second, setSecond] = useState()
  const [ans, setAns] = useState()

  // calculator function
  function calculator(a,b,operation){

    let a1 = parseInt(a)
    let b1 = parseInt(b)
    if(operation=="addition"){
        setAns(a1+b1)
    }
    else if(operation=="subtraction"){
        setAns(a1-b1)
    }
    else if(operation=="multiplication"){
        setAns(a1*b1 )
    }
  }
  return (
    <div className="App">
        <div>
        2) create a calculator function. it takes 3 values a and b are numbers, the third value is called operation. 
        so calculator function will look like
        </div>
        <div>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setOne(e.target.value)}}/>
        </div>
        <div>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setSecond(e.target.value)}}/>
        </div>
        <div>
        <input type="number" placeholder="Ans" value={ans}/>
        </div>
        <div item xs={4} style={{padding:"1% 0px"}}>
    <button variant="contained" color="primary" onClick={()=>{calculator(one,second,"addition")}}>addition</button>
    </div>
    <div item xs={4} style={{padding:"1% 0px"}}>
    <button variant="contained" color="primary" onClick={()=>{calculator(one,second,"subtraction")}}>subtraction</button>
    </div>
    <div item xs={4} style={{padding:"1% 0px"}}>
    <button variant="contained" color="primary" onClick={()=>{calculator(one,second,"multiplication")}}>multiplication</button>
    </div>
    
    </div>
  );
}

export default Jully29;
