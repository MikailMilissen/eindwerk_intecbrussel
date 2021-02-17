import React from 'react'
import Artist from './Artist'
import FilterComponent from './FilterComponent'
import './style/Artistboard.css'

function Artistboard() {
    return (
        <div>
            Artist Board
            <FilterComponent />
            <Artist />
        </div>
    )
}

export default Artistboard
