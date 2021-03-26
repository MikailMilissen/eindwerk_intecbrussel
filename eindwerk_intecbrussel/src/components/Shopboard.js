import React from 'react'
import FilterComponent from './FilterComponent'
import ShopItem from './ShopItem'
import './style/Shopboard.css'
import { CardGroup} from 'reactstrap'

function Shopboard() {
    return (
        <div>
            <h1 className="titel">SHOP</h1>
            
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
