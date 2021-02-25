import React from 'react'
import './style/MessageLong.css'

function MessageLong() {
    return (
        <div>
            <h1>Message / request </h1>
        <div>
            <h1>{title}</h1>
            {messages.map((message)=>(
                <div className="messageboard_preview" key={message.id}>
                    <h2>{ message.title }</h2>
                    <p>{ message.body }</p>
                    <p>Written by { message.author }</p>
                    <Button>respond to message</Button>
                </div>
            ))}
        </div>

        <h1>Reponse </h1>
        <div>
            <h1>{title}</h1>
            {messages.map((message)=>(
                <div className="messageboard_preview" key={message.id}>
                    <h2>{ message.title }</h2>
                    <p>{ message.body }</p>
                    <p>Written by { message.author }</p>
                    <Button>respond to response</Button>
                </div>
            ))}
        </div>
        </div>
    )
}

export default MessageLong
