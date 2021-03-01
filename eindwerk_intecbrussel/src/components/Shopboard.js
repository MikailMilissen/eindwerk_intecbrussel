import React from 'react'
import FilterComponent from './FilterComponent'
import ShopItem from './ShopItem'
import './style/Shopboard.css'

function Shopboard() {
    return (
        <div>
            <h1>Shop</h1>
            This is the Shop Board
            <FilterComponent/>
            <CardGroup className ="shopitemgallery">
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </CardGroup>
        </div>
    )
}

export default Shopboard
