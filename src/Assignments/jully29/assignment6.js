import { useState } from 'react';

function Jully29() {
  const [squaretotale,setSquaretotale] = useState()
  
  let numbers = [1,3,5,12,2,4,6,12,19,7]
  // filter even no from numbers array
  let even = numbers.filter((val) => {
    return val >= 1 & val <=12 & val%2==0
  })

  // taking square of even no
  let seven = even.map((val) => {
    return val*val
  })
  // adding the square of even no
   function squareSumEven(){
    let sum = seven.reduce((sum, l) => {
        return sum + l
    })
    setSquaretotale(sum)
   }

  return (
    <div className="App">
    <div>
        <div >
        6) this is the array. numbers = [1,3,5,12,2,4,6,12,19,7]
	find the sum of squares of all even numbers that are between 1 and 12.

        </div>
        <div>
            <button variant="contained" color="primary" onClick={squareSumEven} >sum of square</button>
        </div>
        <div>
            {squaretotale}
        </div>
    </div>
    
    </div>
  );
}

export default Jully29;
