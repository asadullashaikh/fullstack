import { useState } from 'react';

function August21() {
    let obj = {empId:123,name:"suraj",hobbies:"coding,reading",age:24,location:"bangalore"}
    // destructure this object
    const {empId ,name, hobbies, age, location} = obj
    return(
        <div>
            <div>
                <div>
                    1)destructure this object. with default values. empId should be a variable with name employeeId.
    empId:123,name:"suraj",hobbies:"coding,reading",age:24,location:"bangalore"
        </div>
        
        <div item xs={4} style={{padding:"1% 0px"}}>
            {empId}, {name}, {hobbies}, {age}, {location}
    </div>
    
    
    </div>
    </div>
    )
}

export default August21