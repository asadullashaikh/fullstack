import { useState } from 'react';

function Jully30() {
    const [sum2, setSum2] = useState()
  let numbers = [4,5,6,1,12,33,44,77]
  // taking square of numbers
  let square = numbers.map((l)=>{
      return l*l
  })
  // taking addion using reduce fun
    function Reducesumsquare1(){
  let sum = square.reduce((sum,l)=>{
      return sum + l
  })
  setSum2(sum)
}
  return (
      <div className="App"><div>
          <div>
          2) for this array numbers = [4,5,6,1,12,33,44,77] using reduce function find the sum of squares of its numbers. 

          </div>
          
          <div>
      <button variant="contained" color="primary" onClick={()=>{Reducesumsquare1()}}>sum of square</button>
      </div>
      <div>
          {sum2}
          </div>
      </div>
    </div>
  );
}

export default Jully30;
