import { useState } from 'react';

function August4() {
    let oddNum = []
    // odd no
    for(let i=1; i<=20; i++){
        if(i%2!=0){
            oddNum.push(i)
        }
    }
    function odd(g){
        return{sum: function(){
                    let f = g.reduce((total, l)=>{
                        return total+l
                    })
                    return f
        }}
    }
    // call outerfunction
    let sum = odd(oddNum);
    return(
        <div>
            <div>
                1) Using closure find the sum of odd numbers from 1 to 20. The closure function should give an option to to how many numbers you want to add.
            </div>
        
            <div>
                {sum.sum()}
            </div>
        </div>
    )
}

export default August4