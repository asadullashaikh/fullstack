import { useState } from 'react';

function August21() {
    let e = [12,2,3,4,6,4,3]
    const [a,b,...rest] = e
    function sum(x, y, z) {
        return x +" " + y + " " + z;
      }
      
      const numbers = ["sumit","kumar","kohli"];
      
      let so = sum(...numbers)
    return(
        <div>
    <div>
        <div>
        2)destructure this array:
[12,2,3,4,6,4,3]
        </div>
        
        <div item xs={4} style={{padding:"1% 0px"}}>
            {a}, {b}, {rest}
    </div>
    </div>
    </div>
    )
}

export default August21