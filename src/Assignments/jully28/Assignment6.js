import { useState } from 'react';

 function Jully28() {
      let sum2 = [1,2,3,4,5,9,7,6,3,2,11]
        // taking square of array
      sum2 = sum2.map(l => {return l*l})

      sum2 = sum2.reduce((s,l)=>{
        return s + l
        })
      return (
          <div className="App">
              <div>
              6) write a program to find sum of squares of the numbers of this array
[1,2,3,4,5,9,7,6,3,2,11]
              </div>
              <div xs={12}>
                {sum2}
              </div>
    </div>
  );
}

export default Jully28;
