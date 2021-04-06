import React, {useState, useEffect} from 'react'
import ShopItem from './ShopItem'
import './style/Shopboard.css'
import useFetch from './useFetch'
import {Link} from 'react-router-dom'

function Shopboard() {

    const {data: shopitems, isPending, error} = useFetch('http://localhost:3000/shopitems') // Change Server Port if needed

    return (
        <div className="grid-container">
            <div className="shopitemgallery">
            
            <h1 className="titel">SHOP</h1>
            { isPending && <div>Loading...</div>}
            <div class="shop__container">
            {shopitems && <ShopItem shopitems={shopitems} title='This is our shop' /> }
            </div>
            </div>
            <Link to='/shop/addshopitem'>
            <img src="images/sla icon .png" className="createmessage__button"/> 
            <br />
            Add Product
            </Link>
            


        {/* <div className ="grid-container">
        <div className ="shopitemgallery"><ShopItem /></div>
        </div>  */}

        </div>


    )
}

export default Shopboard
