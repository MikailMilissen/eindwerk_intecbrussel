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
                        <br />
                        <p>{ message.body }</p>
                        <p>Written by { message.author }</p>
                        <br />
                        <Link to={`/messages/${message.id}`}><Button className="button">see more</Button></Link>
                    {/* <Button>respond to message</Button> */}
                    </div>
            ))}
            </div>
        </div>

    )
}

export default Message

