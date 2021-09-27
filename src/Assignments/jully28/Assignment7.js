import { useState } from 'react';

 function Jully28() {
      let sum3 = [12,33,44,34,66,99,121]
        // sorting array ascending
      sum3 = sum3.sort((a,b)=>{return a-b})
       // index 0
      sum3 = sum3[0]
      return (
          <div className="App">
              <div>
              7) write a program to find the smallest of the numbers in this array 
[12,33,44,34,66,99,121]
              </div>
              <div xs={12}>
                {sum3}
              </div>
    </div>
  );
}

export default Jully28;
