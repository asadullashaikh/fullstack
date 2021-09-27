
import { useState } from 'react';

function August10() {
    const [phone, setPhone] = useState()
    
    function mask(){
        let num = phone.split("") // taking input 
        num.splice(6,4,"XXXX")
        setPhone(num)
    }
    return(
        <div>
            <div>
        2) write a program where user can enter his phone number. store the number in a variable.
create a butotn that will show the number in a div but with masking last 4 digits. (masking means replacing last 4 digitts with a X.
        </div>
        <div>
            <input onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
        <div item xs={4}>
    <button variant="contained" color="primary" onClick={mask} >masking 4 digit</button>
    </div>
    
    <div>
        {phone}
        </div>
    </div>
    )
}

export default August10