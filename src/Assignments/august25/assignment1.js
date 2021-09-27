import { useState } from 'react';

function August25() {
    const [products, setProducts] = useState([{id:1,productname:"samsung m1",productprice:"20000",status:"available"},
                                              {id:2,productname:"samsung m2",productprice:"15000",status:"not available"},
                                              {id:3,productname:"Apple 11",productprice:"20000",status:"available"},
                                              {id:4,productname:"Apple 9",productprice:"15000",status:"not available"},
                                              {id:5,productname:"redmi 10",productprice:"20000",status:"available"},
                                              {id:6,productname:"redmi 7",productprice:"15000",status:"not available"}])
    function c(l){
        let r = products.filter(j=>{
            return j.id != l
        })
        setProducts(r)
    }
    function c1(){
        setProducts([])
    }
    return(
        <div>
            <div>
                <div>
        Create a Ecommerce Component.
in this component you will be able to add a product.
each product has 3 properties. name,price, status(available/not available)
show all products.
delete a product.
clear all product.
        </div>
        
        <div>
    <button variant="contained" color="primary">sum</button>
    </div>
    
    <div>
        {products.map((val)=>{
            return <div container >
            <div>{val.productname}</div>
            <div>{val.productprice}</div>
            <div>{val.status}</div>
            <div><button variant="contained" color="primary" onClick={()=>{c(val.id)}} >Delete</button></div>
            <div><button variant="contained" color="primary" onClick={c1} >Clear</button></div>
            </div>
        })}
        </div>
    </div>
    </div>
    )
}

export default August25