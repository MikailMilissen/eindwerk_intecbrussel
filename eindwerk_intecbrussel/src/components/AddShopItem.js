
import React, {useState} from 'react'
import './style/AddShopItem.css'
import {useHistory} from 'react-router-dom'

function AddShopItem() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();
    const [author, setAuthor] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {title,body, price}
        console.log(message)
        fetch('http://localhost:3000/shopitems', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(message)
        }).then(() => {
            setIsPending(true)
            setTimeout(() =>{
                history.push('/shop')
            },2000)
        })
    }
    return (
        <div className="create">
            <h1>CREATE A NEW ITEM</h1>
            <form onSubmit={handleSubmit}>
                <label><h5>Item Name:</h5></label>
                    <input className="textarea"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label><h5>Price:</h5></label>
                    <input className="textarea"
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                {console.log(price)}
                <label><h5>Short Description:</h5></label>
                <textarea className="textarea"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                {!isPending && <button className="button">Add item</button>}
                {isPending && <button disabled className="response_button">Thank you for posting!</button>}
            </form>
        </div>
    )
}

export default AddShopItem
