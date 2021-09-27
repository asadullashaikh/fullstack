import { useState } from 'react';

function August13() {
    let data = [
        {
          "city": "Bangalore", 
          "id": 1, 
          "industry": "IT", 
          "name": "testclient", 
          "state": "Karnataka", 
          "street": "abc123", 
          "website": "www.zenrays.com", 
          "zip": "560045"
        }, 
        {
          "city": "bangalore", 
          "id": 2, 
          "industry": "Information technology", 
          "name": "zenrays", 
          "state": "karnataka", 
          "street": "somes street", 
          "website": "https://zenrays.com", 
          "zip": "560096"
        }, 
        {
          "city": "asdfa", 
          "id": 3, 
          "industry": "asdfas", 
          "name": "zenlabs", 
          "state": "asdf", 
          "street": "asdfas", 
          "website": "www.zenidealabs.comasdf", 
          "zip": "asdfas"
        }, 
        {
          "city": "testclient1", 
          "id": 4, 
          "industry": "testclient1", 
          "name": "testclient1", 
          "state": "testclient1", 
          "street": "testclient1", 
          "website": "testclient1", 
          "zip": "12312312"
        }, 
        {
          "city": "testclient2", 
          "id": 5, 
          "industry": "testclient2", 
          "name": "testclient2", 
          "state": "testclient2", 
          "street": "testclient2", 
          "website": "testclient2", 
          "zip": "123123"
        }, 
        {
          "city": "testclient3", 
          "id": 6, 
          "industry": "testclient3", 
          "name": "testclient3testclient3", 
          "state": "testclient3", 
          "street": "testclient3", 
          "website": "testclient3", 
          "zip": "456456"
        }, 
        {
          "city": "testclient5", 
          "id": 7, 
          "industry": "testclient5", 
          "name": "testclient5", 
          "state": "testclient5", 
          "street": "testclient5", 
          "website": "testclient5", 
          "zip": "12312"
        }
      ]

      let info = {"name":"Jatin",
      "location":"Bangalore",
      "hobbies":["reading","Writing"],
      "personalInfo":{
          "age":22,
          "bankacc":12312,
          "pan":"asfas12",	
      }}
    return(
        <div>
          <div>
            <div>
              3) print all clients in a list whose state is karnataka
            </div>
            <div>
              <table>
                <tr>
                  <th>name</th>
                  <th>state</th>
                  <th>city</th>
                  <th>industry</th>
                </tr>
                { data.map((l)=>{
                  if(l.state == "karnataka" | l.state == "Karnataka"){
                return <tr>
                  <td>{l.name}</td>
                  <td>{l.state}</td>
                  <td>{l.city}</td>
                  <td>{l.industry}</td>
                </tr>}})}
              </table>
    </div>
    </div>
    </div>
    )
}

export default August13