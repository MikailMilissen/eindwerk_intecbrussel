import React, {useState} from 'react'
import './style/ShopItem.css'
import { Link } from 'react-router-dom'
import image from './images/cat.jpg'


import { Jumbotron, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function ShopItem({shopitems, title, price}) {
    return (
      <div className="shopitem">
        <h1>{title}</h1>

<div className="single_message_container">
{shopitems.map((shopitem) => (
  
  <Card className="single_message_div">
      <CardImg top src={image} alt="Card image cap" />
      <CardBody>

    <Link to={`/shopitems/${shopitem.id}`}>
      <CardTitle tag="h2">{shopitem.title}</CardTitle>
      <br />
    </Link>
      <CardSubtitle tag="h6" className="mb-2">Description: {shopitem.body}</CardSubtitle>
      <CardTitle tag="h5">Price: €{shopitem.price}</CardTitle>
      {console.log(shopitem.price)}
      <Button className="shopItem__button">buy!</Button>
      </CardBody>
  </Card>
  
      ))}
      </div>
      </div>
    )
}

export default ShopItem