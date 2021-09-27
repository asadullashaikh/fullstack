import { useState } from 'react';

function Jully29() {
     var n1 = 0,  n2 = 1, next_num, i;
     var arr = []
  for ( i = 1; i <= 8; i++)  
{   // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
    arr.push(n1)
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
    
}
  return (
    <div className="App">
    <div>
        <div >
            8) write a program to print the first 8 fibanocci numbers. see tutorials on finaboncci numbers and how to print them using javascript.
        </div>
        <div>
            {arr.map((f)=>{
                return <>{f} </>
            })}
        </div>
    </div>
    
    </div>
  );
}

export default Jully29;
