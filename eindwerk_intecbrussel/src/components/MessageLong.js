import React from 'react'
import './style/MessageLong.css'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch'


function MessageLong() {
    
    const {id} = useParams()
    const {data: messages, isPending, error} = useFetch('http://localhost:3000/messages/' + id) 

    return (
        <div className="messagelong_container">

        <h1 className="title">FULL MESSAGE</h1>
        <br />
        <div className="message_details">
            
            {isPending && <div>Loading..</div>}
            {error && <div>{error} </div>}
            {messages && (
                <article>
                    <h2> {messages.title} </h2>
                    <br />
                    <p>Written by {messages.author}</p>
                    <div> {messages.body} </div>
                </article>
            )}
        </div>

        </div>
    )
}

export default MessageLong


{/* <h1>Message / request </h1>
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
</div> */}