import { useState } from 'react';

 function Jully28() {
     const [number, setNumber] = useState(1)
     const [prime, setPrime] = useState("")
    // prime no
     function prime_() {
              
      var n, i, flag = true;
      n = number;
      n = parseInt(n)   // converting to int
      for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
          }
        if (flag == true){
          setPrime(n + " is prime")
          alert(n + " is prime");
          }
        else{
          setPrime(n + " is not prime")
          alert(n + " is not prime");
          }
        }
      return (
          <div className="App">
              <div>
                2) write a program if a number is prime number or not
              </div>
              <div>
                <input type="number" placeholder="Enter no" onChange={(e)=>{setNumber(e.target.value)}} />
                <button onClick={prime_}>Click</button>
                  {prime}
              </div>
              
    </div>
  );
}

export default Jully28;
