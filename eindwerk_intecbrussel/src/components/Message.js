import React, { useState } from 'react'
import './style/Message.css'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const Message = ({ messages, title }) => {
    
    return (
        <div>
            <h1>{title}</h1>
            {messages.map((message)=>(
                
                    <div className="message_div" key={message.id}>
                    <Link to={`/messages/${message.id}`}>
                        <h2>{ message.title }</h2>
                        <p>{ message.body }</p>
                        <p>Written by { message.author }</p>
                    <Button>see whole message</Button>
                    </Link>
                    {/* <Button>respond to message</Button> */}
                    </div>
              
            ))}
        </div>
    )
}

export default Message

