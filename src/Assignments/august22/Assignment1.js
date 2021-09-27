import { useState } from 'react';

function August22() {
    const [f, setF] = useState()
    const [num, setNum] = useState()
    console.log(f)

    // recursive function
    function factorial(n) {
        //base case for 0!
        if (n == 0 || n == 1) {
            return 1;
            //recursion case
        } else {
            return n * factorial(n - 1);  
        }
    }
    function fact(){
    let n = factorial(f);
    setNum(n)
    console.log(n)}
    return(
        <div>
            <div>
        1) write factorial of a program using recursive function
            </div>
            <div>
            <input type="number" onChange={(e)=>{setF(e.target.value)}} />
        </div>
        <div>
    <button variant="contained" color="primary" onClick={()=>{fact()}} >factorial</button>
    </div>
    
    <div item xs={12} style={{padding:"1% 0px"}}>
        {num}
        </div>
    </div>
    )
}

export default August22