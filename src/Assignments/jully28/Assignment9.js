import { useState } from 'react';

 function Jully28() {
      let data = [
        {name:"Amit",marks:40},
        {name:"Jayanth", marks: 60},
        {name:"Razzu",marks:70},
        {name:"Asad",marks:50},
        {name:"Dinesh", marks: 75},
        {name:"Avinash", marks:80}
        ]

      // filtering data by marks above 75 using filter fun
      let data1 = data.filter(l=>{
        return l.marks >= 75
        })
      return (
          <div className="App">
              <div>
                9) This is the array of objects. 
        Write a program to create array where people got distinction 75% and above.
              </div>
              <div>
                {data1.map(l => {
                  return <> {l.name} </>
                })}
              </div>
    </div>
  );
}

export default Jully28;
