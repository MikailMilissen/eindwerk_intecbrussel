import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

function CreateMessage() {
    return (
        <div>
                <Button>
                <img src="images/sla icon .png" className="about__logo"/> 
                Create a new message
                </Button>
        </div>
    )
}

export default CreateMessage
