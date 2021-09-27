import { useState } from 'react';

function August10() {
    function longest_string(str_ara) {
        var max = str_ara[0].length;
        str_ara.map(v => max = Math.max(max, v.length));
        let result = str_ara.filter(v => v.length == max);
        return result;
      }
    const s = "TO get a job i need to code at least 6 hours a day".split(" ")
    const largestno = longest_string(s)
    return(
        <div>
            <div>
                3) this is string "TO get a job i need to code at least 6 hours a day".in this string find the largest word . 
            </div>
        
            <div>
                largest word : {largestno.join(" ")}
            </div>
    
    </div>
    )
}

export default August10