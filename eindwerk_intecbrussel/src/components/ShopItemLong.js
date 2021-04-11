import React from 'react'
import './style/ShopItemLong.css'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import {Card, CardBody, CardTitle, CardImg, CardSubtitle, Button} from 'reactstrap'

function ShopItemLong() {

    const {id} = useParams()
    const {data: shopitems, isPending, error} = useFetch('http://localhost:3000/shopitems/' + id) 

    return (

        <div className="shopitemlong_container">

        <h1 className="title">SHOP ITEM</h1>
        <br />
        <div className="shopitem_details">
            {isPending && <div>Loading..</div>}
            {error && <div>{error} </div>}

            {shopitems && (
        <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" className="cardimg"/>
            <CardBody>
            <CardTitle tag="h2">{shopitems.title}</CardTitle>
            <br />
            <CardSubtitle tag="h5" className="mb-2">{shopitems.body}</CardSubtitle>
            <br />
            <CardTitle tag="h5">{shopitems.price}</CardTitle>
            <Button className="button">buy!</Button>
        </CardBody>
      </Card>
      )}
        </div>

        </div>

    )
}

export default ShopItemLong
