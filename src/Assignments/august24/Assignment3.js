
import { useState } from 'react';

function August24() {
    const [one, setOne] = useState()
    const [n, setN] = useState()
      function reverse(){
        
        setN(one.split("").reverse())
    }
    return(
        <div>
            <div>
                3) create a component called Reverse. in this component, you can enter a word say "hello". on clicking submit button,
you have to show the reverse of hello which is olleh.
            </div>
            <div>
                <input type="text" onChange={(e)=>{setOne(e.target.value)}} />
            </div>
            <div>
                <button variant="contained" color="primary" onClick={reverse}>reverse</button>
            </div>
            {n}
    </div>
    )
}

export default August24