import { button, div, input } from '@material-ui/core';
import { useState } from 'react';

function Jully30() {

    const [sum1, setSum1] = useState()
    const [sum2, setSum2] = useState()
    const [sum3, setSum3] = useState()
    const [sum4, setSum4] = useState()
    const [sum5, setSum5] = useState()
    const [sum6, setSum6] = useState()
    const [sum7, setSum7] = useState()
    const [sum8, setSum8] = useState()
    const [sum9, setSum9] = useState()
    const [sum10, setSum10] = useState()
    const [sum11, setSum11] = useState()
  let numbers = [4,5,6,1,12,33,44,77]

  
  function Reducesum1(){
  let sum = numbers.reduce((sum,l)=>{
      return sum + l
  })
  setSum1(sum)
}

  let square = numbers.map((l)=>{
      return l*l
  })
    function Reducesumsquare1(){
  let sum = square.reduce((sum,l)=>{
      return sum + l
  })
  setSum2(sum)
}

let square1 = []


numbers.map((l)=>{
    if(l != 6){
    square1.push(l*l)
    }
})
console.log(square1)
function Reducesumsquare(){
    let sum = square1.reduce((sum,l)=>{
        return sum + l
    })
    setSum3(sum)
  }

let students = ["sumit","amit","Tom","joy","Thomas"]

function students1(){
    let sum = students.reduce((sum,l)=>{
        return sum + l
    })
    setSum4(sum)
  }

  function studentsspace(){
    let sum = students.reduce((sum,l)=>{
        return sum + " " + l
    })
    setSum5(sum)
  }

  function studentscomma(){
    let sum = students.reduce((sum,l)=>{
        return sum + "," + l
    })
    setSum6(sum)
  }

  let studentsarr = students.filter(l =>{
      return l !== "Tom"
  })

  function students2(){
    let sum = studentsarr.reduce((sum,l)=>{
        return sum + l
    })
    setSum7(sum)
  }

  students = ["sumit","amit","Tom","joy","Thomas"]
  students = students.map((l)=>{
      return l.toLowerCase()
  })
  students.sort()

  function studentsaccending(){
    setSum8(students.join(","))
    
  }

  function studentsdeccending(){
    setSum9(students.reverse().join(","))
    
  }

  numbers = [12,122,55,66,65,32,11,26]

  function numberaccending(){
      numbers.sort(function(a,b){return a-b})
      setSum10(numbers.join(","))
  }

  function numberdeccending(){
    numbers.sort(function(a,b){return b-a})
    setSum11(numbers.join(","))
}

  return (
    <div className="App">
      
    <div container>
    <div>
        <div>
        1) using reduce function find the sum of numbers of this array.
numbers = [4,5,6,1,12,33,44,77]
        </div>
        
        <div>
    <button variant="contained" color="primary" onClick={()=>{Reducesum1()}}>sum</button>
    </div>
    
    <div>
        {sum1}
        </div>
    </div>
        <div>
        <div>
        2) for this array numbers = [4,5,6,1,12,33,44,77] using reduce function find the sum of squares of its numbers. 

        </div>
        
        <div>
    <button variant="contained" color="primary" onClick={()=>{Reducesumsquare1()}}>sum of square</button>
    </div>
    <div>
        {sum2}
        </div>
    </div>
    <div>
        <div>
        3) for this array numbers = [4,5,6,1,12,33,44,77] using reduce function find the sum of squares of its numbers other than for number 6. means you have to exclude number 6 and get sum of squares. also note that you have use reduce function of arrays.

        </div>
        <div>
            <button variant="contained" color="primary" onClick={()=>{Reducesumsquare()}} >sum of square exclude number 6</button>
        </div>
        <div>
            {sum3}
        </div>
        </div>
        <div>
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
        <div>
        <div>
        5) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names but have a space between names

        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentsspace} >student space</button>
        </div>
        <div>
            {sum5}
        </div>
    </div>
    <div>
        <div>
        6) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names but a a comma between names
        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentscomma} >Stusent comma</button>
        </div>
        <div>
            {sum6}
        </div>
    </div>
    <div>
        <div>
        7) this is the array students = ["sumit","amit","Tom","joy","Thomas"]
using reduce function add all these student names other than Tom. Means Tom should not be there.
        </div>
        <div>
            <button variant="contained" color="primary" onClick={students2}>add students</button>
        </div>
        <div>
            {sum7}
        </div>
    </div>
    <div>
        <div>
        8) This is the array . students = ["sumit","amit","Tom","joy","Thomas"]. 
arrange them in ascending order.
        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentsaccending}>ascending</button>
        </div>
        <div>
            {sum8}
        </div>
    </div>
    <div>
        <div>
        9) This is the array . students = ["sumit","amit","Tom","joy","Thomas"]. 
arrange them in descending order.
        </div>
        <div>
            <button variant="contained" color="primary" onClick={studentsdeccending}>descending</button>
        </div>
        <div>
            {sum9}
        </div>
    </div>
    <div>
        <div>
        10) these are numbers. numbers = [12,122,55,66,65,32,11,26]
arrange these numbers first in ascending order, then in descending order.
        </div>
        <div>
            <button variant="contained" color="primary" onClick={numberaccending}>acsending</button>
        </div>
        <div>
            {sum10}
        </div>
        <div>
            <button variant="contained" color="primary" onClick={numberdeccending}>descending</button>
        </div>
        <div>
            {sum11}
        </div>
    </div>
    <div>
        <div>
        11) these are numbers. numbers = [12,122,55,66,65,32,11,26]. arrange the numbers in ascending order. 
then find the middle element or middle elements(if you find there is more than one middle element)
        </div>
        <div>
            <button variant="contained" color="primary" >sum of cube</button>
        </div>
        <div>
            
        </div>
    </div>
    <div>
        <div>
        12) For numbers = [12,122,55,66,65,32,11,26] find the average using reduce function.

        </div>
        <div>
            <button variant="contained" color="primary" >sum of cube</button>
        </div>
        <div>
            
        </div>
    </div>
    <div>
        <div>
        13) for these numbers = [12,122,55,66,65,32,11,26] find the biggest elements and the smallest element in the array
        </div>
        <div>
            <button variant="contained" color="primary" >sum of cube</button>
        </div>
        <div>
            
        </div>
    </div>
    <div>
        <div>
        14) for this array  students = ["sumit","amit","Tom","joy","Thomas"]. write a program that has a input box wtth a button. you can then enter the student name. if you click search button and if student is found, show a message in a paragraph that "student is present in array" else show message "student not present".you can use innerHTML value to show message in paragraph.
        </div>
        <div>
            <button variant="contained" color="primary" >sum of cube</button>
        </div>
        <div>
            
        </div>
    </div>
    <div>
        <div>
        15) write a program where you can enter a value in a input box. create 2 buttons, add and show. 
on clicking add  button store the value in a array names arrayVal. on clicking show, show all the values in a list element. (note: you may have you loop arrays and use innerHTML to show the values in a list.)
        </div>
        <div>
            <button variant="contained" color="primary" >sum of cube</button>
        </div>
        <div>
            
        </div>
    </div>
    </div>
    
    </div>
  );
}

export default Jully30;
