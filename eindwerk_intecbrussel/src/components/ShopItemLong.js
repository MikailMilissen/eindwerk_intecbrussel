import React from 'react'
import './style/ShopItemLong.css'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import {Card, CardBody, CardTitle, CardImg, CardSubtitle, Button} from 'reactstrap'

function ShopItemLong() {

    const {id} = useParams()
    const {data: shopitems, isPending, error} = useFetch('http://localhost:3000/shopitems/' + id) 

    return (
        <div className="shopitem_details">
            {isPending && <div>Loading..</div>}
            {error && <div>{error} </div>}
            {shopitems && (
        <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">{shopitems.title}</CardTitle>
            <CardTitle tag="h5">{shopitems.price}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{shopitems.body}</CardSubtitle>
            <Button>Buy!</Button>
        </CardBody>
      </Card>
      )}
        </div>
    )
}

export default ShopItemLong
