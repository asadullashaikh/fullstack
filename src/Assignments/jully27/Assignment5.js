import { useState } from 'react';

function Jully27() {
    
  const [one, setOne] = useState()
  const [second, setSecond] = useState()
  const [addition, setAddition] = useState()

  // calculator function
  function calculator(a,b){
    let a1 = parseInt(a)
    let b1 = parseInt(b)
      return{ 
        addition : function(){
          setAddition(a1+b1)
        },
        subtraction : function(){
          setAddition(a1-b1)
        },
        multiplication : function(){
          setAddition(a1*b1)
        }
      }
  }

  // call outerfunction
  let sum = calculator(one, second)

  return (
    <div>
      <div>
      Create a calculator function. The function will have 3 inner functions with name add, subtract and multiply. subtract takes 2 values and subtracts them, multiply and add also take 2 values and do multiplication and addition. all these three inner functions return the values. 
you can pass 2 values to the calculator function. Now inside the calculator function you should call add,subtract and multiply functions with the values that you passed to calculator function. 
finally print the result of addition, subtraction and multiplication inside the calculator.
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
        <button variant="contained" color="primary" onClick={()=>{sum.addition()}}>addition</button>
        </div>
        <div>
        <button variant="contained" color="primary" onClick={()=>{sum.subtraction()}}>addition</button>
        </div>
        <div>
        <button variant="contained" color="primary" onClick={()=>{sum.multiplication()}}>addition</button>
        </div>
    </div>
  );
}

export default Jully27;
