import { useState } from 'react';

function Jully27() {
  const [length1, setLenght1] = useState()
  const [breadth1, setBreadth1] = useState()
  const [area1, setArea1] = useState()
  const [perimter, setPerimter] = useState()
  function outerFunction1(a,b){
    let a1 = parseInt(a)
    let b1 = parseInt(b)

    let sum = []

    area();         // call function
    perimeter();
 
    function area(){  // inner function
      sum.push(a1*b1)
    }

    function perimeter(){ // inner function
      let s = 2*(a1+b1)
      sum.push(s)
    }
    
    
    return sum
  }
 // call outerfunction and it will return array ie, array = [area, perimeter]
  const [area, perimeter] = outerFunction1(length1,breadth1)

  function outer2(){
    setArea1(area)
    setPerimter(perimeter)
  }

  return (
    <div>
    <div>
    4) For the above program now you have to return both perimeter and area. Now you know that you can not return both values as functions can only return one value. So you will create a array named result and in the array you will put both area and perimter. NOw you will return the array from outerFunction. 
This way you can return both area and perimter from outerFunction. Now print both area and perimeter outside the outerFunction.
      </div>
      <div>
      <input placeholder="length" onChange={(e)=>{setLenght1(e.target.value)}} />
    <input placeholder="length" onChange={(e)=>{setBreadth1(e.target.value)}} />
    </div>
    <div>
    <button onClick={outer2}>outerfunction</button>
    
    <div>
    area:{area1}
    </div>
    </div>
    perimter:{perimter}
    </div>
  );
}

export default Jully27;
