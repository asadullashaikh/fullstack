import { useState } from 'react';

function Jully30() {
    const [sum3, setSum3] = useState()
  let numbers = [4,5,6,1,12,33,44,77]

  
let square1 = []


numbers.map((l)=>{  // taking square of array exclude 6
    if(l != 6){
    square1.push(l*l)
    }
})
function Reducesumsquare(){
    let sum = square1.reduce((sum,l)=>{
        return sum + l
    })
    setSum3(sum)
  }
  return (
    <div className="App"> 
      <div>
      3) for this array numbers = [4,5,6,1,12,33,44,77] using reduce function find the sum of squares of its numbers other than for number 6. means you have to exclude number 6 and get sum of squares. also note that you have use reduce function of arrays.

      </div>
      <div>
          <button variant="contained" color="primary" onClick={()=>{Reducesumsquare()}} >sum of square exclude number 6</button>
      </div>
      <div>
          {sum3}
      </div>
    </div>
  );
}

export default Jully30;
