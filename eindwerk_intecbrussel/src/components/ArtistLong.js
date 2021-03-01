import React from 'react'
import './style/ArtistLong.css'
import ShopItem from './ShopItem'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function ArtistLong() {
    return (
        <div>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
            <CardTitle tag="h5">Artists Name</CardTitle>
            <CardText>Short Artists info lorem ipsum</CardText>
            <Button>More info</Button>
        </CardBody>
        </Card>

        <CardGroup className ="artistsgallery">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        </CardGroup>
        
        </div>
    )
}

export default ArtistLong
