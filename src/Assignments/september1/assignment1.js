import { useState } from 'react';

function September1() {
    const [name, setName] = useState()
    const [name1, setName1] = useState([])
    function f(){
            setName1([...name1,name]) // taing input from user
    }
    // cleare hobbies
    function f1(){
        setName1([])
}
    return(
        <div>
    <div>
        <div>
        1) Create a Hobbies component. In this compnent, you can etner your hobbies and you need to show all hobbies. you need to have inputbox where you can add a hobby and the newly added hobby should be shown in the browser
2) create a Hobbies component with same code as above. Create a button where you can clear all the hobbies.
        </div>
        <div>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div item xs={4}>
    <button variant="contained" color="primary" onClick={f}>add</button>
    </div>
    
    <div>
            {name1.join(", ")}
        </div>

    <div item xs={4}>
    <button variant="contained" color="primary" onClick={f1}>clear</button>
    </div>
    </div>
    </div>
    )
}

export default September1