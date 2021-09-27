import { useState } from 'react';

function August3() {

    const [one, setOne] = useState()
    const [second, setSecond] = useState()
    const [area, setArea] = useState()
    function outerFunction(a,b){
        return { fullname : function(){
            setArea(a+b)
        }
      }
    
      }
    let outer = outerFunction(one, second)
    return(
        <div>
            <div>
                4) Create a outerFunction that takes input as first_name and last_name. 
        create inner function called fullName that adds the first name and last name to give full name. 
        now return the fullName function from outerFunction. call the returned function from outside and show the full name.
            </div>
            <div>
                <input type="text" placeholder="Enter no" onChange={(e)=>{setOne(e.target.value)}}/>
            </div>
            <div>
                <input type="text" placeholder="Enter no" onChange={(e)=>{setSecond(e.target.value)}}/>
            </div>
            <div>
                <button variant="contained" color="primary" onClick={()=>{outer.fullname()}}>sum</button>
            </div>
            <div>
                {area}
            </div>
    </div>
    )
}

export default August3