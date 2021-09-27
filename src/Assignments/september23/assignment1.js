import { useState } from 'react';
import axios from 'axios'
import Form from './form'
import List from './list'

function September11() {
    const [status, setStatus] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [data,setData] = useState([])
    return (
        <>
            1) create a Todo App with separate components namely TodoContainer, TodoForm, TodoList and Todo. 
but u will use class based components only.
            <Form 
            status={status}
            setStatus={setStatus}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            />

            <List
            data={data}
            setData={setData}
            />

            
        </>
    )
}

export default September11