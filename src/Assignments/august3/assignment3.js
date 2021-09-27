import { useState } from 'react';

function August3() {

    const [fnum,setFnum] = useState([])
    const [area, setArea] = useState()
    
    function fibanocc(){
        let prime = [2, 3, 5, 7]
        let sum = prime.reduce((total, l) => {
        return total + l
    })

    setFnum(sum)
    }

    function outerFunction(a,b){
        return { fullname : function(){
            setArea(a+b)
        }
      }
    
      }
    
    return(
        <div>
            <div>
                3) write a program to find the sum of first 10 prime numbers of fibanocci series
            </div>
            <div>
                <button variant="contained" color="primary" onClick={fibanocc}>sum</button>
            </div>
            <div>
            sum of first 10 prime numbers of fibanocci series: {fnum}
            </div>
        </div>
    )
}

export default August3