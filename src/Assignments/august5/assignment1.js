import { useState } from 'react';

function August5() {
    const [productname, setProductname] = useState()
    const [productprice, setProductprice] = useState()
    const [brandname, setBrandname] = useState()
    const [description, setDescription] = useState()
    const [c, setC] = useState("not-Available")
    const [show, setShow] = useState([])
    const [s1, setS1] = useState([])
    const [products, setProducts] = useState([{productname:"m1",productprice:"20000",brandname:"samsung",description:"good performance",available:"Available"},
                                              {productname:"m2",productprice:"15000",brandname:"samsung",description:"good performance",available:"not-Available"},
                                              {productname:"11",productprice:"20000",brandname:"Apple",description:"good performance",available:"Available"},
                                              {productname:"9",productprice:"15000",brandname:"Apple",description:"good performance",available:"not-Available"},
                                              {productname:"10",productprice:"20000",brandname:"redmi",description:"good performance",available:"Available"},
                                              {productname:"7",productprice:"15000",brandname:"redmi",description:"good performance",available:"not-Available"}])

  const handleChange = (event) => {
    setBrandname(event.target.value);
  };

    function s(){
        setShow(products) // show all products
    }

    function j(){
        setS1(products) // show all available products
    }

    function pro(e){
        e.preventDefault()
        setProducts([...products,
            { 
            productname:productname, 
            productprice:productprice, 
            brandname:brandname, 
            description:description, 
            available:c
        }])
        
    }
    console.log(products)
    return(
        <div>
            <div>
        1) create a ecommerce store app. 
The ecommerce app have a form input.from form input you can enter 
 product name, product price, brand name( should be a select), description( a text area)
 on submit, add the product to the array.
 create a button in top with name products. on clicking show all the products. 
 2)in the same product app, add a radio button this time to enter if product is available at store. 
 if user selects yes, then that product should be available at the store. 

 3) create a button "show Available products" on top. on clicking show only avaiable products.
            </div>
        
            <div>
                <form onSubmit={pro}>
                    <div>
                        <input type="text" placeholder="product name" onChange={(e)=>{setProductname(e.target.value)}}/>
                    </div>
                    <div>
                        <input type="number" placeholder="Enter price" onChange={(e)=>{setProductprice(e.target.value)}}/>
                    </div>
                    <div>
                    <label for="cars">Brand</label>
                        <select onChange={handleChange} name="cars" id="cars">
                            <option value="samsung">samsung</option>
                            <option value="Apple">Apple</option>
                            <option value="redmi">redmi</option>
                        </select>
                    </div>
            
                <div>
                    <input type="radio" id="age3" name="age" onChange={()=>{setC("Available")}}/>
                    <label for="age3">Available</label>
                </div>
            <button variant="contained" color="primary" type="submit">Submit</button>
                </form>
    
            </div>
    
    <div>
        <button onClick={s} >products</button>
            <table>
            <tr>
              <th>Brand</th>
              <th>products</th>
              <th>city</th>
              <th>Available</th>
            </tr>
            { show.map((l)=>{
            return <tr>
              <td>{l.brandname}</td>
              <td>{l.productname}</td>
              <td>{l.productprice}</td>
              <td>{l.available}</td>
            </tr>})}
          </table>
        </div>
        <div>
        <button onClick={j} >available products</button>
            <table>
            <tr>
              <th>Brand</th>
              <th>products</th>
              <th>city</th>
              <th>Available</th>
            </tr>
            { s1.map((l)=>{
                if(l.available == "Available"){
            return <tr>
              <td>{l.brandname}</td>
              <td>{l.productname}</td>
              <td>{l.productprice}</td>
              <td>{l.available}</td>
            </tr>}})}
          </table>
            )
        </div>
    </div>
    )
}

export default August5