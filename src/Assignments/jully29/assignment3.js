import { useState } from 'react';

function Jully29() {
  const [total,setTotal] = useState()
  let numbers = [1,3,5,12,2,4,6,12,19,7]

  // filter numbers 
  let num = numbers.filter((val) => {
      return val >= 3 & val <=10
  })

  function sum1(){
    let sum = num.reduce((sum, l) => {  // addition of array elements using reduce function
      return sum + l
  })
  setTotal(sum)
}
  return (
    <div className="App">
      
    
    <div container style={{border:"1px solid black",padding:"2% 2%"}} >
        <div >3) this is the array. numbers = [1,3,5,12,2,4,6,12,19,7]
 using filter function create an array that has numbers between 3 and 10.
 next find the sum of all values that are between 3 and 10. note(include 3 and 10 also)
        </div>
        <div item xs={12}>
            <button variant="contained" color="primary" onClick={sum1} >sum</button>
        </div>
        <div item xs={12}>
            {total}
        </div>
        </div>
    
    </div>
  );
}

export default Jully29;
