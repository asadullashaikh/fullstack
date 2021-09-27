import { Button, div, TextField } from '@material-ui/core';
import { useState } from 'react';

function August21() {
    function sum(x, y, z) {
        return x +" " + y + " " + z;
      }
      
      const numbers = ["sumit","kumar","kohli"];
      
      let so = sum(...numbers)
    return(
        <div>
    <div>
        <div>
        3) write a program that takes input of first name and surnames, ex: getFullName("sumit","kumar","kohli").
you should return full name like sumit kumar kohli. 
you have to do this using spread operator and using arguments array.
        </div>
        
        <div>
            {so}
    </div>
    </div>
    </div>
    )
}

export default August21