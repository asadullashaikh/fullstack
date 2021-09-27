import { useState } from 'react';

function August13() {
    const [city, setCity] = useState("")
    const [m, setM] = useState()
    class Student {
        constructor(name, age, birthday, city) {
          this.name = name;
          this.age = age;
          this.birthday = birthday;
          this.city = city;
      
        }
        changeCity(new_city) {
          this.city = new_city
        }
        phoneNo(no){
          this.phoneno = no
        }
      }
    
    let mystudent = new Student("xyz",10, 1/11/1111, "bengaluru")
    
    function new_city(){

      mystudent.changeCity(city)
      setM(mystudent.city)
      alert(mystudent.city)
      console.log(mystudent)
      }
      console.log(mystudent)
      mystudent.phoneNo(9999999999)
    return(
        <div>
            <div>
                <div>
                2) create a Customer class. it will have name,age,birthday and city property. 
create a function changeCity which will take input as new city so that you can change the customer city. 
create a property called _phoneNo. create a getter get phoneNo() which will return the _phoneNo property.
create a settter function which will mask the phone no last 4 digitst(not first 6 digits like we did in class).
create a function age() which will return the customer age in year and days.
                </div>
                <div>
                    city:{mystudent.city}
                </div>
                <div>
                  <input onChange={(e)=>{setCity(e.target.value)}}/>
                </div>
                <div>
                    <button onClick={new_city}>changeCity</button>
                </div>
                <div>
                    city:{m}
                </div>
                <div>
                _phoneNo : 
                </div>
                <div>
                    {mystudent.phoneno}
                </div>
                <div>
                    <button onClick={new_city}>changeCity</button>
                </div>
    </div>
    </div>
    )
}

export default August13