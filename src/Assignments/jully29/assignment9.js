import { useState } from 'react';

function Jully29() {
  const [one, setOne] = useState()
  const [second, setSecond] = useState()
  const [area, setArea] = useState()
  const [ans, setAns] = useState()
  const [addition, setAddition] = useState()
  const [total,setTotal] = useState()
  const [squaretotal,setSquaretotal] = useState()
  const [squaretotale,setSquaretotale] = useState()
  const [squaretotalO,setSquaretotalO] = useState()
  const [number, setNumber] = useState(1)
  const [fnum,setFnum] = useState()
  const [fnum1,setFnum1] = useState()
     const [prime, setPrime] = useState("")
  
     var n1 = 0,  n2 = 1, next_num, i;
     var arr = []
     var arr1 = []
  let numbers = [1,3,5,12,2,4,6,12,19,7]
  let num = numbers.filter((val) => {
      return val >= 3 & val <=10
  })

  let even = numbers.filter((val) => {
    return val >= 1 & val <=12 & val%2==0
  })

  let onum = numbers.filter((val) => {
    return val%2!=0
  })

  let square = numbers.map((val) => {
    return val*val
  })
  let o = onum.map((val) => {
    return val*val
  })
  let s = even.map((val) => {
    return val*val
  })
  function sum1(){
  let sum = num.reduce((sum, l) => {
      return sum + l
  })
  setTotal(sum)
}

    function squareSum(){
    let sum = square.reduce((sum, l) => {
        return sum + l
    })
    setSquaretotal(sum)
   }

   function squareSumEven(){
    let sum = s.reduce((sum, l) => {
        return sum + l
    })
    setSquaretotale(sum)
   }

   function squareSumO(){
    let sum = o.reduce((sum, l) => {
        return sum + l
    })
    setSquaretotalO(sum)
   }

  function calculator1(a,b){
    let a1 = parseInt(a)
    let b1 = parseInt(b)
      return{ add : function(){
          setAddition(a1+b1)
      }}
  }

  function calculator(a,b,operation){

    let a1 = parseInt(a)
    let b1 = parseInt(b)
    if(operation=="addition"){
        setAns(a1+b1)
    }
    else if(operation=="subtraction"){
        setAns(a1-b1)
    }
    else if(operation=="multiplication"){
        setAns(a1*b1 )
    }
  }

  for ( i = 1; i <= 8; i++)  
{   // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
    arr.push(n1)
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
    
}

    n1= 0
    n2= 1
    next_num= 0
for ( i = 1; i <= 6; i++)  
{   // print the n1  
    next_num = n1 + n2; // sum of n1 and n2 into the next_num  
    arr1.push(n1)
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
    
}
  
    let cube = arr1.map((c)=>{
        return c*c*c
    })

    function Cube(){
        let sum = cube.reduce((sum, l) => {
            return sum + l
        })
        setFnum1(sum)
      }

function fibanocc(){
    n1= 0
    n2= 1
    next_num= 0
    for ( i = 1; i <= 6; i++)  
    {   // print the n1  
        next_num = n1 + n2; // sum of n1 and n2 into the next_num  

        n1 = n2; // assign the n2 value into n2  
        n2 = next_num; // assign the next_num into n2  
        
    }
    setFnum(next_num)
}

  let sum = calculator1(one, second)

  function p() {
              
    var n, i, flag = true;
      
    // Getting the value form text
    // field using DOM
    n = number;
    n = parseInt(n)
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
          
        // Check and display alert message
    if (flag == true){
        setPrime(n + " is prime")
    }
    else{
        setPrime(n + " is not prime")
    }
}

  return (
    <div className="App">
    <div>
        <div >
        9)	write a program to find te sum of first 6 fibanocci numbers.
        </div>
        <div item xs={12}>
            <button variant="contained" color="primary" onClick={fibanocc} >sum of 6 fibanocci </button>
        </div>
        <div item xs={12}>
            {fnum}
        </div>
    </div>
    
    </div>
  );
}

export default Jully29;
