import { useState } from 'react';

function Jully30() {
    const [sum, setSum] = useState()
let students = ["sumit","amit","Tom","joy","Thomas"]
 
  function studentscomma(){
    let sum1 = students.reduce((sum1,l)=>{
        return sum1 + "," + l
    })
    setSum(sum1)
  }
  return (
    <div className="App">
    <div>
        <div>
        6) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names but a a comma between names
        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentscomma} >Stusent comma</button>
        </div>
        <div>
            {sum}
        </div>
    </div>
    </div>
  );
}

export default Jully30;
