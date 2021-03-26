import React from 'react'
import Artist from './Artist'
import FilterComponent from './FilterComponent'
import './style/Artistboard.css'
import {CardGroup} from 'reactstrap'

function Artistboard() {
    return (
        <div>
            <h1 className="titel">ARTISTS</h1>
            <FilterComponent />
            <CardGroup>
            <Artist />
            </CardGroup>
        </div>
    )
}

export default Artistboard
