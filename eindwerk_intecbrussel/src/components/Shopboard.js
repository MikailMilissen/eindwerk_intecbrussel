import React, {useState, useEffect} from 'react'
import ShopItem from './ShopItem'
import './style/Shopboard.css'
import useFetch from './useFetch'
import {Link} from 'react-router-dom'

function Shopboard() {

    const {data: shopitems, isPending, error} = useFetch('http://localhost:3000/shopitems') // Change Server Port if needed

    return (
        <div className="Shopboard">{/*grid-container*/}
        
            <h1 className="title">SHOP</h1>
            { isPending && <div>Loading...</div>}

            <Link to='/shop/addshopitem'>
            <img src="images/sla icon .png" className="createmessage__button"/> 
            </Link>

            <div class="all_shopitems__container">{/*shop__container*/}
            {shopitems && <ShopItem shopitems={shopitems} className='all_shopitems_div'/> }
            </div>

        </div>


    )
}

export default Shopboard
