import React from 'react'
import FilterComponent from './FilterComponent'
import ShopItem from './ShopItem'
import './style/Shopboard.css'
import { CardGroup} from 'reactstrap'

function Shopboard() {
    return (
        <div>
            <h1 className="titel">SHOP</h1>

        <div className ="grid-container">

        <div className ="item1"> <FilterComponent/> </div>
        <div className ="shopitemgallery"><ShopItem /></div>
        <div className ="shopitemgallery"><ShopItem /></div>  
        <div className ="shopitemgallery"><ShopItem /></div>
        <div className ="shopitemgallery"><ShopItem /></div>
        <div className ="shopitemgallery"><ShopItem /></div> 
        <div className ="shopitemgallery"><ShopItem /></div>

        </div>

        </div>


    )
}

export default Shopboard
