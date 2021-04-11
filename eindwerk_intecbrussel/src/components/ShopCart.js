import React from 'react'
import ShopItem from './ShopItem'
import './style/Shopboard.css'
import useFetch from './useFetch'
import {Link} from 'react-router-dom'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

function ShopCart({shopitems, title}) {
    
    return (
        <div>
    
        <Card className="Account__Body">

            <CardBody className="card__Body">
            <CardTitle className="account__title" tag="h1">SHOPPING BAG</CardTitle><br />
            <CardText className="card__title">Items:</CardText><br />
            <br />
            
            
            <div class="all_shopitems__container">
            {shopitems && <ShopItem shopitems={shopitems} className='all_shopitems_div'/> }
            </div>

            <br />
            <Button className="additem__button">Continue Shopping</Button><br />
            <Button className="additem__button">Checkout Securely</Button><br />
            <br />
            </CardBody>
    
        </Card>

        </div>
    )
}

export default ShopCart
