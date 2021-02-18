import React, { useState, useEffect } from 'react'
import FilterComponent from './FilterComponent';
import Message from './Message';
import './style/Messageboard.css';


const Messageboard = () => {

    const [messages,setMessage] = useState(null)
    const [isPending, setIsPending] = useState(true)

  

    useEffect(() => {
        setTimeout(() => 
        fetch('http://localhost:8000/messages')
        .then(res => {
            return res.json();

        })
        .then((data) => {
            console.log(data);
            setMessage(data);
            setIsPending(false);
        })
        .catch(err => {
            console.log('failed to fetch')
        })
        ,500)
    }, [])


    return ( 
        <div className='Messageboard'>
            { isPending && <div>Loading...</div>}
            {messages && <Message messages={messages} title='This is our messageboard' /> }
        </div>
        
     );
}
 
export default Messageboard;