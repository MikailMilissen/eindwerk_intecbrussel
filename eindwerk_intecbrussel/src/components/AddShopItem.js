
import React, {useState} from 'react'
import './style/AddShopItem.css'
import {useHistory} from 'react-router-dom'

function AddShopItem() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();
    const [author, setAuthor] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {title,body}
        console.log(message)
        fetch('http://localhost:3000/shopitems', {
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
            <h2>Add a New Message</h2>
            <form onSubmit={handleSubmit}>
                <label>Message Title: </label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Message Body: </label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                {!isPending && <button>Add Message</button>}
                {isPending && <button disabled>Thank you for posting!</button>}
                
            
            </form>

        </div>
    )
}

export default AddShopItem
