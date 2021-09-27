import { useState } from 'react';

function Jully29() {
  const [one, setOne] = useState()
  const [second, setSecond] = useState()
  const [addition, setAddition] = useState()

  // calculator function
  function calculator(a,b){
    let a1 = parseInt(a)
    let b1 = parseInt(b)
      return{ add : function(){
          setAddition(a1+b1)
      }}
  }

  // call outerfunction
  let sum = calculator(one, second)

  return (
    <div className="App">
        <div>
        1) create a calculator function. it takes 2 values a and b. 
this function has 1 function called add and adds a and b and returns the addition.
now you have to return the add function completely.
        </div>
        <div>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setOne(e.target.value)}}/>
        </div>
        <div>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setSecond(e.target.value)}}/>
        </div>
        <div>
        <input type="number" placeholder="Ans" value={addition}/>
        </div>
        <div>
    <button variant="contained" color="primary" onClick={()=>{sum.add()}}>addition</button>
    </div>
    </div>
  );
}

export default Jully29;
