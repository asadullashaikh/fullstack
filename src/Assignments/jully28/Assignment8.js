import { useState } from 'react';

 function Jully28() {
      let sum = [-1,-23,-100, -121, -2]

      sum = sum.sort((a,b)=>{return a-b})
        // last index ie, sum.length - 1
      sum = sum[sum.length - 1]
      return (
          <div className="App">
              <div>
              8) write a program to find the greatest of numbers from this array
[-1,-23,-100, -121, -2]
              </div>
              <div xs={12}>
                {sum}
              </div>
    </div>
  );
}

export default Jully28;
