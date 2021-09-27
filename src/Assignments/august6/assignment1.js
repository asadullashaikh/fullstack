import { useState } from 'react';

function L() {
    const [products, setProducts] = useState([{id:1,productname:"m1",productprice:"20000",brandname:"samsung",description:"good performance",available:"Available"},
                                              {id:2,productname:"m2",productprice:"15000",brandname:"samsung",description:"good performance",available:"not-Available"},
                                              {id:3,productname:"11",productprice:"20000",brandname:"Apple",description:"good performance",available:"Available"},
                                              {id:4,productname:"9",productprice:"15000",brandname:"Apple",description:"good performance",available:"not-Available"},
                                              {id:5,productname:"10",productprice:"20000",brandname:"redmi",description:"good performance",available:"Available"},
                                              {id:6,productname:"7",productprice:"15000",brandname:"redmi",description:"good performance",available:"not-Available"}])
    function cle(l){
        let r = products.filter(j=>{
            return j.id != l
        })
        setProducts(r)
    }
    return(
        <div>
        <div>
        1) last assignment you created a ecommerce app.
today you have to add a search box and a button to do product search. you should search product by name. if product is found, you have to alert product found. else alert sorry product not found. 
2) create a delete button next to every product. on clicking delete button you have to remove the product. 
3) when you delete a product, make sure the product you deleted is not shown in page. 
        </div>
        <table>
            <tr>
              <th>Brand</th>
              <th>products</th>
              <th>city</th>
              <th>Available</th>
            </tr>
            { products.map((l)=>{
            return <tr>
              <td>{l.brandname}</td>
              <td>{l.productname}</td>
              <td>{l.productprice}</td>
              <td>{l.available}</td>
              <td><button variant="contained" color="primary" onClick={()=>{cle(l.id)}} >Delete</button></td>
            </tr>})}
          </table>
    </div>
    )
}

export default L