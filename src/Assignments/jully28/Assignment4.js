import { useState } from 'react';

 function Jully28() {
      let odd = []
      let k 

      // finding odd number
      for(k=0; k<=41; k++){
        if(k%2 != 0){
          odd.push(k)
          }
        }

        // addition of odd number
      let odd_sum = odd.reduce((s,l)=>{
        return s + l
        })

      
      return (
          <div className="App">
              <div>
                4) write a program to find the addition of 1+3+5+7+9+12... upto 41.
              </div>
              <div>
                {odd_sum}
              </div>
        </div>
  );
}

export default Jully28;
