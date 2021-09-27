import { useState } from 'react';

function Jully29() {
  const [squaretotal,setSquaretotal] = useState()
  let numbers = [1,3,5,12,2,4,6,12,19,7]

  // taking square of numbers 
  let square = numbers.map((val) => {
    return val*val
  })

    function squareSum(){
    let sum = square.reduce((sum, l) => {  // addition of array elements using reduce function
        return sum + l
    })
    setSquaretotal(sum)
   }
   
  return (
    <div className="App">
        <div>
        <div >
        4) this is the array. numbers = [1,3,5,12,2,4,6,12,19,7]
find the sum of squares of the values.
        </div>
        <div item xs={12}>
            <button variant="contained" color="primary" onClick={squareSum} >sum of square</button>
        </div>
        <div item xs={12}>
            {squaretotal}
        </div>
        </div>
    </div>
  );
}

export default Jully29;
