import { useState } from 'react';

function Jully30() {


    const [sum, setSum] = useState()

  let students = ["sumit","amit","Tom","joy","Thomas"]
  students = students.map((l)=>{
      return l.toLowerCase()
  })
  students.sort()
  function studentsdeccending(){
    setSum(students.reverse().join(","))
    
  }
  return (
    <div className="App">
        <div>
        <div>
        9) This is the array . students = ["sumit","amit","Tom","joy","Thomas"]. 
arrange them in descending order.
        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentsdeccending}>descending</button>
        </div>
        <div>
            {sum}
        </div>
    </div>
    </div>
  );
}

export default Jully30;
