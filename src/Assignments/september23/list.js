import { useState , useEffect } from 'react';
import axios from 'axios'

function September23(props) {
    useEffect(()=>{
        axios.get(`http://localhost:3000/todo`)  // get data by using axios 
             .then(function(res){
                 console.log(res.data)
                 props.setData(res.data)
             })
    },[])
    return(
        <div>
          <div>
            <div>
              <table>
                <tr>
                  <th>name</th>
                  <th>date</th>
                  <th>status</th>
                </tr>
                {props.data.length > 0 ? <> 
                {props.data.map((l)=>{
                return (<tr>
                          <td>{l.name}</td>
                          <td>{l.date}</td>
                          <td>{l.status == true ? <>available</>:<>unavailable</>}</td>
                      </tr>)})}
                        </>:<></>}
                </table>
            </div>
          </div>
        </div>
    )
}

export default September23