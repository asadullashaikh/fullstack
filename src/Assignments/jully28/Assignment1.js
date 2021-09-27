import { useState } from 'react';

 function Jully28() {
     let n = 5;
     let star = [];
    // 1) Using a loop print the pattern
    
     for (let i = 1; i <= n; i++) {
      let string = "";
      for (let j = 0; j < i; j++) {
        string += "*";
        }
      star.push(string)
      }
    return (
            <div className="App">
              <div>
              1) Using a loop print the pattern
              </div>
              <div>
                {star.map((val) => {
                    return <div>{val}</div>
                })}
              </div>
            </div>
  );
}

export default Jully28;
