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

      let data1 = data.filter(l=>{
        return l.marks >= 75
        })

        // filtering data by marks above 70 using filter fun
      let data2 = data.filter(l=>{
        return l.marks < 70
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
        <div>
        10) This is the array of objects. 
        Write a program to create array where got below 70.
        </div>
        <div>
          {data2.map(l => {
            return <> {l.name} </>
          })}
        </div>
    </div>
  );
}

export default Jully28;
