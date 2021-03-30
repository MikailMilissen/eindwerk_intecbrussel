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

<div className ="grid-container">

<div className ="item1"> <FilterComponent/> </div>
<div className ="item2"><ShopItem /></div>
<div className ="item3"><ShopItem /></div>  
<div className ="item4"><ShopItem /></div>
<div className ="item5"><ShopItem /></div>
<div className ="item6"><ShopItem /></div>
<div className ="item7"><ShopItem /></div>

</div>

    )
}

export default Shopboard
