import { useState } from 'react';

function August10() {
      function longest_string(str_ara) {
        var max = str_ara[0].length;
        str_ara.map(v => max = Math.max(max, v.length));
        let result = str_ara.filter(v => v.length == max-1);
        return result;
      }
    const s = "TO get a job i need to code at least 6 hours a day".split(" ")
    const s2 = longest_string(s)
    return(
        <div>
            <div>
            4)  this is string "TO get a job i need to code at least 6 hours a day".in this string find the second largest word .
            </div>
            <div item xs={12} style={{padding:"1% 0px"}}>
                {s2.join(" ")}
            </div>
        </div>
    )
}

export default August10