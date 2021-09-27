import { useState } from 'react';

function Jully30() {

    const [sum, setSum] = useState()

let students = ["sumit","amit","Tom","joy","Thomas"]
  // filter students arr for skip Tom
  let studentsarr = students.filter(l =>{
      return l !== "Tom"
  })
  // add all elements
  function students2(){
    let sum = studentsarr.reduce((sum,l)=>{
        return sum + l
    })
    setSum(sum)
  }
  return (
    <div className="App"><div>
    <div>
    7) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names other than Tom. Means Tom should not be there.
    </div>
    <div>
        <button variant="contained" color="primary" onClick={students2}>add students</button>
    </div>
    <div>
        {sum}
    </div>
</div>
    </div>
  );
}

export default Jully30;
