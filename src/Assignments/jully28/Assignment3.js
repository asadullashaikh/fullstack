import { useState } from 'react';

 function Jully28() {
     const [showhobby, setShowhobby] = useState([])
     const [show, setShow] = useState()

     // create student object
      let student = {
          name:"xyz", age:20, 
          location:"bengaluru", 
          hobbies: ["coding", "cricket"], 
          showhobbies : function(){  // create a function
            return this.hobbies}, 
          showage: function(){
            return this.age
          }
        }

      function showhobbies(){
        let showhobbies = student.showhobbies()
        setShowhobby(showhobbies)
      }

      function show1(){
        let showage = student.showage()
        setShow(showage)
        }
      return (
            <div className="App">
              <div>
                3) write a student object. The student object should contain these properties: name, age, location, hobby, showHobby, showAge. 
        Create showname button. on clicking button you should show the name of person in a div. create a showage button. on clicking on the button show the age. 
        create a showage button. on clicking on showage button, you should call the function to alert the age. 
              </div>
              <div>
                <button variant="contained" color="primary" onClick={showhobbies}>showhobby</button>
                {showhobby.join(" ")}
              </div>
              <div>
                <button variant="contained" color="primary" onClick={show1}>showage</button>
                {show}
              </div>
            </div>
        );
}

export default Jully28;
