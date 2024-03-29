import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Message from './Message';
import './style/Messageboard.css';
import useFetch from './useFetch';

const Messageboard = () => {
    const {data: messages, isPending, error} = useFetch('http://localhost:3000/messages') // Change Server Port if needed

    return ( 
        <div className='Messageboard'>
            { isPending && <div>Loading...</div>}
            
            <h1 className="title">MESSAGEBOARD</h1>
            
            <Link to='/messageboard/createmessage'>
            <img src="images/sla message icon .png" className="createmessage__button"/>
            </Link>

            <div className="all_messages_container">
            {messages && <Message messages={messages} className='all_messages_div'/> }
            </div>
            
        </div>
);
}
export default Messageboard;