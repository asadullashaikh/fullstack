import { useState } from 'react';

function August4() {
    let oddSquare = []
    // add no square
    for(let i=1; i<=20; i++){
        if(i%2!=0){
            oddSquare.push(i*i)
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
    let oddsum = odd(oddSquare)
    return(
        <div>
            <div>
        2) Using closures find sum of squares of odd numbers from 1 to 20. The closure function should give an option to to how many numbers you want to add.
            </div>
        
        <div>
            {oddsum.sum()}
        </div>
    </div>
    )
}

export default August4