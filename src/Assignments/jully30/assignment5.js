import { useState } from 'react';

function Jully30() {

    const [sum, setSum] = useState()
    let students = ["sumit","amit","Tom","joy","Thomas"]

function studentsspace(){
  let sum = students.reduce((sum,l)=>{
      return sum + " " + l     // space between names
  })
  setSum(sum)
}
  return (
    <div className="App">
      <div>
        <div>
        5) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names but have a space between names

        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentsspace} >student space</button>
        </div>
        <div>
            {sum}
        </div>
    </div>
    </div>
  );
}

export default Jully30;
