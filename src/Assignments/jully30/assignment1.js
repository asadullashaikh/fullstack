import { useState } from 'react';

function Jully30() {

    const [sum1, setSum1] = useState()
    
    let numbers = [4,5,6,1,12,33,44,77]

  
    function Reducesum1(){
    let sum = numbers.reduce((sum,l)=>{  // using reduce fun , calculatin addition of array element
        return sum + l
    })
    setSum1(sum)
  }
  return (
    <div className="App"><div>
    <div>
    1) using reduce function find the sum of numbers of this array.
numbers = [4,5,6,1,12,33,44,77]
    </div>
    
    <div>
<button variant="contained" color="primary" onClick={()=>{Reducesum1()}}>sum</button>
</div>

<div>
    {sum1}
    </div>
</div>
    </div>
  );
}

export default Jully30;
