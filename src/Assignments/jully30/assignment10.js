import { useState } from 'react';

function Jully30() {


    const [sum10, setSum10] = useState()
    const [sum11, setSum11] = useState()
  let numbers = [12,122,55,66,65,32,11,26]

  function numberaccending(){
      numbers.sort(function(a,b){return a-b})
      setSum10(numbers.join(","))
  }

  function numberdeccending(){
    numbers.sort(function(a,b){return b-a})
    setSum11(numbers.join(","))
}

  return (
    <div className="App">
        <div>
        <div>
        10) these are numbers. numbers = [12,122,55,66,65,32,11,26]
arrange these numbers first in ascending order, then in descending order.
        </div>
        <div>
            <button variant="contained" color="primary" onClick={numberaccending}>acsending</button>
        </div>
        <div>
            {sum10}
        </div>
        <div>
            <button variant="contained" color="primary" onClick={numberdeccending}>descending</button>
        </div>
        <div>
            {sum11}
        </div>
    </div>
    </div>
  );
}

export default Jully30;
