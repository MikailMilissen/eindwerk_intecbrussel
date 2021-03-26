import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import CreateMessage from './CreateMessage';

import FilterComponent from './FilterComponent';
import Message from './Message';
import './style/Messageboard.css';
import useFetch from './useFetch';

const Messageboard = () => {
    const {data: messages, isPending, error} = useFetch('http://localhost:8000/messages')

    return ( 
        <div className='Messageboard'>
            <Link to='/messageboard/createmessage'>
            Create a new message
            </Link>
            { isPending && <div>Loading...</div>}
            {messages && <Message messages={messages} title='This is our messageboard' /> }
            <h1>Messageboard</h1>
            <FilterComponent/>
        </div>
     );
}
export default Messageboard;