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
            { isPending && <div>Loading...</div>}

            <h1 className="title">MESSAGEBOARD</h1>

            <div class="message__container">
            {messages && <Message messages={messages} title='This is our messageboard' /> }
            </div>

            <div class="filter__continer">
            <FilterComponent/>
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