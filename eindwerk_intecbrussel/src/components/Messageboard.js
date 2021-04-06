import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import FilterComponent from './FilterComponent';
import Message from './Message';
import './style/Messageboard.css';
import useFetch from './useFetch';

const Messageboard = () => {
    const {data: messages, isPending, error} = useFetch('http://localhost:3000/messages') // Change Server Port if needed

    return ( 
        <div className='Messageboard'>
            { isPending && <div>Loading...</div>}

            <h1 className="title">MESSAGEBOARD</h1>

            <div class="message__container">
            {messages && <Message messages={messages} title='This is our messageboard' /> }
            </div>

            
            <Link to='/messageboard/createmessage'>
            <img src="images/sla icon .png" className="createmessage__button"/> 
            <br />
            Create message
            </Link>
        </div>
     );
}
export default Messageboard;