import { useState } from 'react';

 function Jully28() {
      let odd = []
      let k 

      let sum = [1,2,3,4,5,9,7,6,3,2,11]
      // additon of array
      sum = sum.reduce((s,l)=>{
        return s + l
        })
      return (
          <div className="App">
              <div>
                5) write a program to find the addition of numbers for this array 
        [1,2,3,4,5,9,7,6,3,2,11]
              </div>
              <div>
                {sum}
              </div>
    </div>
  );
}

export default Jully28;
