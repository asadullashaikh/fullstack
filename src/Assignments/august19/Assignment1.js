import { useState } from 'react';

function August13() {
    class Student {
        constructor(name, age) {
          this.name = name;
          this.age = age;
      
        }
        getter() {
          let date = new Date();
          return date;
        }
      }
    
    let mystudent = new Student("xyz",10)
    let data = mystudent.getter().getHours()
    let data1 = mystudent.getter().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' , hour12: true })
    return(
        <div>
            <div>
                <div>
                1) write a Student class.
Student class will have 2 properties, name and age. 
 Student class will have a getter method currentTime which is a getter function. this will return the current time like like 8:45 AM.(note using date function get the exact format).
                </div>
                <div>
                    {data1}
                </div>
    </div>
    </div>
    )
}

export default August13