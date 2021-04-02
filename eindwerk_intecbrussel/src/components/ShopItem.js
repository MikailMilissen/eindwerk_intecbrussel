import React, {useState} from 'react'
import './style/ShopItem.css'
import { Link } from 'react-router-dom'



import { Jumbotron, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function ShopItem({shopitems, title}) {
    return (
      <div>
        <h1>{title}</h1>

{shopitems.map((shopitem) => (
  <Card className="Card__Body">
      <CardImg top width="100%" src='../../public/images/cat.jpg' alt="Card image cap" />
      <CardBody>
    <Link to={`/shopitems/${shopitem.id}`}>
      <CardTitle tag="h4">{shopitem.title}</CardTitle>
    </Link>
      <CardTitle tag="h5">Price: {shopitem.price}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Description: {shopitem.body}</CardSubtitle>
      <Button className="buy__button">Buy!</Button>
      </CardBody>
  </Card>
      ))}

    
    
      </div>
    )
}

export default ShopItem


{/* <Card className="Card__Body">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">ItemName + ItemPrice € </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Short Item info lorem ipsum</CardSubtitle>
          <Button className="buy__button">Buy!</Button>
        </CardBody>
      </Card> */}