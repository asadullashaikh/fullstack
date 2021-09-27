import { useState } from 'react';

function Jully27() {
  const [length, setLenght] = useState()
  const [breadth, setBreadth] = useState()
  const [area, setArea] = useState()
  function outerFunction(a,b){
    let a1 = parseInt(a)
    let b1 = parseInt(b)
    
    return { 
      area : function(){
        setArea(a1*b1)
      },
    perimter :(2*(a1+b1))
    }
  }

    // Calling Outer function by passing length and breadth
  const outer = outerFunction(length,breadth)

  var perimeter
  function outer1(){
    perimeter = outer.perimter
  }

  return (
    <div>
        <div>
        for the above program this time you should not alert perimer insde the function. only alert the area. perimtere you have to return from outerFunction. call the outerFunction from outisde and print the perimtere as returned value of outerFunction.
        </div>
        <div>
        <input placeholder="length" onChange={(e)=>{setLenght(e.target.value)}} />
        <input placeholder="length" onChange={(e)=>{setBreadth(e.target.value)}} />
        </div>
        <div>
            <button onClick={()=>{outer1.area()}}>area</button>
        </div>
        <div>
            {area}
        </div>
        <div>
            <button onClick={outer1}>perimter</button>
        </div>
        {perimeter}
    </div>
  );
}

export default Jully27;
