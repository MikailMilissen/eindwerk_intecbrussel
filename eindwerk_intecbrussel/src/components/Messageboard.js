import React from 'react'
import FilterComponent from './FilterComponent';
import Message from './Message';
import './style/Messageboard.css';


function Messageboard() {
    return (
        <div>
            Messageboard
            <FilterComponent />
            <Message />
        </div>
    )
}

export default Messageboard
