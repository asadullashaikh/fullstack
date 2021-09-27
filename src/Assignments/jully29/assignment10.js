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
     var arr1 = []
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
  return (
    <div className="App">
    <div container style={{border:"1px solid black",padding:"2% 2%"}} >
        <div >
            10) write a program to find te sum of cube of first 6 fibanocci numbers.
        </div>
        <div item xs={12}>
            <button variant="contained" color="primary" onClick={Cube} >sum of cube</button>
        </div>
        <div item xs={12}>
            {fnum1}
        </div>
    </div>
    
    </div>
  );
}

export default Jully29;
