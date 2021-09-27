import { useState } from 'react';

function August24() {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [location, setLocation] = useState()
    const [brandname, setBrandname] = useState()
    const [description, setDescription] = useState()
    const [products, setProducts] = useState([{name:"xyz",age:"18",location:"bengaluru",interest:"c",description:"good performance"}])

  const handleChange = (event) => {
    setBrandname(event.target.value);
  };

  function pro(e){
    e.preventDefault()
    setProducts([...products,{ name:name, age:age, location:location, interest:brandname, description:description}])
    
}
    return(
        <div>
          <div>
          2) create a Registration component.The user can enter name,age,location,interest(select type), webpage(input type = "url"), description(textarea input type). on clicking submit button, show the values entered by the user in a table.
          </div>
          <div>
          <form onSubmit={pro}>
            <div>
            <input type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div>
            <input type="number" placeholder="Enter age" onChange={(e)=>{setAge(e.target.value)}}/>
        </div>
        <div>
            <input type="text" placeholder="location" onChange={(e)=>{setLocation(e.target.value)}}/>
        </div>
        <div>
            <label for="interest">interest </label>

                <select name="interest" id="interest" onChange={handleChange}>
                <option value="c++">c++</option>
                <option value="python">python</option>
                <option value="javascript">javascript</option>
                </select>
        </div>
        <button variant="contained" color="primary" type="submit">Submit</button>
            </form>
    
    <div>
    <table>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>location</th>
              <th>interest</th>
            </tr>
            { products.map((l)=>{
            return <tr>
              <td>{l.name}</td>
              <td>{l.age}</td>
              <td>{l.location}</td>
              <td>{l.interest}</td>
            </tr>})}
          </table>
        {products.map((l)=>{
            return (<div>
                <div container>
                    <div>name: {l.name}</div>
                    <div>age: {l.age}</div>
                    <div>location: {l.location}</div>
                </div>
            </div>
            )
        })}
        </div>
    </div>
    </div>
    )
}

export default August24