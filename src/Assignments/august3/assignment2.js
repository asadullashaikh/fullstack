import { useState } from 'react';

function August3() {
    const [fnum,setFnum] = useState()
    var m1 = 0,  n2 = 1, next_num, i;
    let arr = []
    function fibanocc(){
        m1= 0
        n2= 1
        next_num= 0
        for ( i = 1; i <= 20; i++)  
        {   // print the n1  
            next_num = m1 + n2; // sum of n1 and n2 into the next_num  
            if(m1%2==0)
            {
            arr.push(m1)
            }
            m1 = n2; // assign the n2 value into n2  
            n2 = next_num; // assign the next_num into n2  
            
        }
        alert(arr)
        let sum = arr.reduce((total, l) => {
            return total + l
        })

        setFnum(sum)
    }
    return(
        <div>
            <div>
            2) write a program to find the sum of first 20 even numbers of fibanocci series.
            </div>
        
            <div>
                <button variant="contained" color="primary" onClick={fibanocc}>sum</button>
            </div>
    
            <div>
            sum of first 20 even numbers of fibanocci series: {fnum}
            </div>
        </div>
    )
}

export default August3