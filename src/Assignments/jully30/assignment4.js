import { useState } from 'react';

function Jully30() {
    const [sum4, setSum4] = useState()
let students = ["sumit","amit","Tom","joy","Thomas"]
// add students
function students1(){
    let sum = students.reduce((sum,l)=>{
        return sum + l
    })
    setSum4(sum)
  }
  return (
    <div className="App"><div>
    <div>
    4) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names.
    </div>
    <div>
        <button variant="contained" color="primary" onClick={students1} >add names</button>
    </div>
    <div>
        {sum4}
    </div>
    </div>
    </div>
  );
}

export default Jully30;
