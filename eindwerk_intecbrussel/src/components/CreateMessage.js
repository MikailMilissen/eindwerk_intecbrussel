import React, {useState} from 'react'
import './style/CreateMessage.css'
import {useHistory} from 'react-router-dom'

function CreateMessage() {
    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();


    // the author will be linked  to the account

    const [author, setAuthor] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {title,body}
        console.log(message)
        fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(message)
        }).then(() => {
            setIsPending(true)
            setTimeout(() =>{
                history.push('/messageboard')
            },2000)
        })
        
    }

    return (
        <div className="create">
            <h1>ADD A NEW MESSAGE</h1>
            <form onSubmit={handleSubmit}>
                <label><h5>Add title:</h5></label>
                    <input className="textarea"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label><h5>Add text:</h5></label>
                <textarea className="textarea"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                {!isPending && <button className="button">Add Message</button>}
                {isPending && <button disabled>Thank you for posting!</button>}
                
            
            </form>

        </div>
    )
}

export default CreateMessage
