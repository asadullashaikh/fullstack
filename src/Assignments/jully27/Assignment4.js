import { useState } from 'react';

function Jully27() {
    
  const [length, setLenght] = useState()
  const [breadth, setBreadth] = useState()
  const [area, setArea] = useState()
  const [perimter, setPerimter] = useState()

  // creating outerfunction
  function outerFunction(a,b){
    return {
      area: function(){         // inner function
        setArea(a*b)
    },
      perimter: function(){     // inner function
      setPerimter(2*(a+b))
    }
  }

  }
  // Calling Outer function by passing length and breadth
  const outer = outerFunction(length,breadth)
  return (
    <div>
      <div>
        write a function called outerFunction. inside outerFunction create 2 inner function with name area and perimter. call these functions and print the area and permiter of a rectangle with length 10 and breadth as 5 in a alert box.
      </div>
      <div>
        <input placeholder="length" type="number" onChange={(e)=>{setLenght(e.target.value)}} />
        <input placeholder="breadth" type="number" onChange={(e)=>{setBreadth(e.target.value)}} />
      </div>
      <div>
        <button variant="contained" color="primary"  onClick={()=>{outer.area()}}>area</button>
      </div>
      <div>
        {area}
      </div>
      <div>
        <button variant="contained" color="primary" onClick={()=>{outer.perimter()}}>perimter</button>
      </div>
      <div>
        {perimter}
      </div>
    </div>
  );
}

export default Jully27;
