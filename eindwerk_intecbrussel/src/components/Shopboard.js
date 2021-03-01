import React from 'react'
import FilterComponent from './FilterComponent'
import ShopItem from './ShopItem'
import './style/Shopboard.css'

function Shopboard() {
    return (
        <div>
            This is the Shop Board
            <FilterComponent />
            <ShopItem />
        </div>
    )
}

export default Shopboard
