import { useState } from 'react';

function August3() {
    let array = ["Monday","Wednesday","Thursday","Friday"]
    array.splice(1,0,"Tuesday")
    return(
        <div>
            <div>
                5) this is the array ["Monday","Wednesday","Thursday","Friday"]
        using splice add tuesday after monday.
            </div>
            <div>
            using splice add tuesday after monday: {array}
            </div>
        </div>
    )
}

export default August3