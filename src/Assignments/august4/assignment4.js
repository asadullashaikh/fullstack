import { useState } from 'react';

function August4() {
    const [one, setOne] = useState()
    function reverse(){
        
        setOne(one.split("").reverse()) // split word and reverse
    }
    return(
        <div>
            <div>
                4) Write a program where you can enter a word. on clicking the button, you have to reverse the word.
            </div>
        
            <div>
                <input type="text" onChange={(e)=>{setOne(e.target.value)}} />
            </div>
    
            <div>
                <button variant="contained" color="primary" onClick={reverse}>reverse</button>
            </div>
            <div>
                {one}
            </div>
    </div>
    )
}

export default August4