import { useState } from 'react';

function Jully27() {
  const [one, setOne] = useState()
  const [second, setSecond] = useState()
  const [addition, setAddition] = useState()
  const [subtraction, setSubtraction] = useState()
  const [multiplication, setMultiplication] = useState()
  function outerFunction1(a,b){
    let a1 = parseInt(a)
    let b1 = parseInt(b)

    let sum = []

    add();         // call function
    sub();
    mul();
 
    function add(){  // inner function
      sum.push(a1+b1)
    }

    function sub(){ // inner function
      let s = (a1-b1)
      sum.push(s)
    }

    function mul(){
      sum.push(a1*b1)
    }
    
    
    return sum
  }
 // call outerfunction and it will return array ie, array = [area, perimeter]
  const [add, sub, mul] = outerFunction1(one, second)

  function outer2(){
    setAddition(add)
    setSubtraction(sub)
    setMultiplication(mul)
  }

  return (
    <div>
    <div>
    for above calculator function, this time you dont print result inside the function. instead you create an array called results. put all 3 results of addition,subtraction and multiplication inside the array and return the array.
print the values outside the function.
      </div>
      <div>
      <input onChange={(e)=>{setOne(e.target.value)}} />
    <input onChange={(e)=>{setSecond(e.target.value)}} />
    </div>
    <div>
    <button onClick={outer2}>Ans</button>
    
    <div>
    addition:{addition}
    </div>
    <div>
    subtraction:{subtraction}
    </div>
    <div>
    multiplicattion:{multiplication}
    </div>
    </div>
    </div>
  );
}

export default Jully27;
