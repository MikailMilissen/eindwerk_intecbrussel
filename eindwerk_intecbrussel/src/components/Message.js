import React, { useState } from 'react'
import './style/Message.css'

const Message = ({ messages, title }) => {
    
    

    return (
        <div>
            <h1>{title}</h1>
            {messages.map((message)=>(
                <div className="messageboard_preview" key={message.id}>
                    <h2>{ message.title }</h2>
                    <p>{ message.body }</p>
                    <p>Written by { message.author }</p>
                   
                </div>
            ))}
        </div>
    )
}

export default Message

