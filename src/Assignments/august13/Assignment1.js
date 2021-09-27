import { useState } from 'react';

function August13() {
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
                1)This is the json  which has info about user. 
            "name":"Jatin",
            "location":"Bangalore",
            "hobbies":["reading","Writing"],
            "personalInfo":
                "age":22,
                "bankacc":12312,
                "pan":"asfas12",	

        using this json create a page where you will show peronal info in a div.
        show hobbies in a list. 
        show name in a h1 tag and location in a h3 tag. 
                </div>
                <div>
                    <h1>name: {info.name}</h1>
                    <h3>location:{info.location}</h3>
                    Hobbes:
                    <ul>{info.hobbies.map((l)=>{
                        return <li>{l}</li>
                    })}
                    </ul>
                </div>
    </div>
    </div>
    )
}

export default August13