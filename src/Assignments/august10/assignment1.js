
import { useState } from 'react';

function August10() {
    let pan = "PANABC123".split("")
    pan.splice(6,3,"XXX")
    return(
        <div>
        <div>
        1) This is a string for pancard PANABC123.
you have to mask the last 3 characters. means the string should become PANABCXXX
        </div>
        
    <div>
        {pan}
        </div>
    </div>
    )
}

export default August10