import { useState } from 'react';

function August4() {
    let string = "At Zenrays, you learn full handson coding with live project in mern stack"
    // split string then convert first letter capital
    string = string.split(" ").map(l=>{
        return l[0].toUpperCase()+ l.slice(1,l.length).toLowerCase()})

    return(
        <div>
            <div>
                3) This is the string. 
                "At Zenrays, you learn full handson coding with live project in mern stack"
                You need to create a button, on clicking button, the string should have every word first letter 
                capital. 
                Note: use split and string toUpperCase. 
            </div>
        
            <div>
                {string.join(" ")}
            </div>
    </div>
    )
}

export default August4