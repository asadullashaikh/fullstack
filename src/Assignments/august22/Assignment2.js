import { useState } from 'react';

function August22() {
    function factorial(n) {
        //base case for 0!
        if (n == 0 || n == 1) {
            return 1;
            //recursion case
        } else {
            return n * factorial(n - 1);
        }
    }
    let facts = []
    for(let i = 1; i<=5; i++){
        let n = factorial(i);
        facts.push(n)
    }
    let sum  = facts.reduce((sum, l)=>{
        return sum + l
    })
    return(
        <div>
          <div>
          2) write the sum of factorial of numbers from 1 to 5 . make use of recursive function used above.
          </div>
          <div>
        {sum}
          </div>
    </div>
    )
}

export default August22