import { useState } from 'react';

function Jully29() {
  const [squaretotalO,setSquaretotalO] = useState()
  let numbers = [1,3,5,12,2,4,6,12,19,7]

  // filter odd numbers
  let onum = numbers.filter((val) => {
    return val%2!=0
  })
  // taking square
  let odd = onum.map((val) => {
    return val*val
  })
  // addition of elements
   function squareSumO(){
    let sum = odd.reduce((sum, l) => {
        return sum + l
    })
    setSquaretotalO(sum)
   }


  return (
    <div className="App">
        <div>
        <div >
        5) this is the array. numbers = [1,3,5,12,2,4,6,12,19,7]
find the sum of squares of the odd numbers

        </div>
        <div item xs={12}>
            <button variant="contained" color="primary" onClick={squareSumO} >sum of square</button>
        </div>
        <div item xs={12}>
            {squaretotalO}
        </div>
    </div>
    
    
    </div>
  );
}

export default Jully29;
