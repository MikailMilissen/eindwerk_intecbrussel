import React, {useState, useRef} from 'react'
import './style/DropdownMenu.css'

function DropdownMenu(props) {
   
    const [picture, setPicture] = useState("images/sla_icon_account.png")
    const [open, setOpen] = useState(false)

    return (
        <div className="menu-container">
            <a href="">
            <img src={picture} onClick={() => setOpen(!open)}/>
            </a>
            {open && props.children}
        </div>
    )
}

export default DropdownMenu
