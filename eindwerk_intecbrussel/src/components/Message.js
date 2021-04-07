import React, { useState } from 'react'
import './style/Message.css'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const Message = ({ messages, title }) => {
    
    return (

        <div className="Message">
            <h1>{title}</h1>
            <div className="single_message_container">
            {messages.map((message)=>(
                    <div className="single_message_div" key={message.id}>
                    <Link to={`/messages/${message.id}`}>
                        <h2>{ message.title }</h2></Link>
                        <p>{ message.body }</p>
                        <p>Written by { message.author }</p>
                        <Link to={`/messages/${message.id}`}><Button className="button">see whole message</Button></Link>
                    {/* <Button>respond to message</Button> */}
                    </div>
            ))}
            </div>
        </div>

    )
}

export default Message

