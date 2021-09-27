import { useState } from 'react';

function Jully29() {
  const [number, setNumber] = useState(1)
  const [prime, setPrime] = useState("")
  // calculating prime no
  function prime_() {
              
    var n, i, flag = true;
      
    // Getting the value form input
    n = number;
    n = parseInt(n)
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
          
        // Check and display alert message
    if (flag == true){
        setPrime(n + " is prime")
    }
    else{
        setPrime(n + " is not prime")
    }
}

  return (
    <div className="App">
    <div>
        <div >
        7) write a program to find if a number is prime or not.
        </div>
        <div>
        <input type="number" placeholder="Enter no" onChange={(e)=>{setNumber(e.target.value)}} />
            <button onClick={prime_}>Click</button>
        </div>
        <div>
            {prime}
        </div>
    </div>
    </div>
  );
}

export default Jully29;
