import React from 'react'
import Artist from './Artist'
import FilterComponent from './FilterComponent'
import './style/Artistboard.css'
import {CardGroup} from 'reactstrap'

function Artistboard() {
    return (
        <div>
            Artist Board
            <FilterComponent />
            <CardGroup>
            <Artist />
            </CardGroup>
        </div>
    )
}

export default Artistboard
