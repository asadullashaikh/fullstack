import { useState } from 'react';

function Jully30() {


    const [sum, setSum] = useState()
  
  let  students = ["sumit","amit","Tom","joy","Thomas"]
  
  students = students.map((l)=>{
      return l.toLowerCase()
  })
  students.sort()

  function studentsaccending(){
    setSum(students.join(","))
    
  }
  return (
    <div className="App"><div>
    <div>
    8) This is the array . students = ["sumit","amit","Tom","joy","Thomas"]. 
arrange them in ascending order.
    </div>
    <div>
        <button variant="contained" color="primary" onClick={studentsaccending}>ascending</button>
    </div>
    <div>
        {sum}
    </div>
</div>
    </div>
  );
}

export default Jully30;
