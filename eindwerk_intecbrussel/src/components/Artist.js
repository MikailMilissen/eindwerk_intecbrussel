import React from 'react'
import FilterComponent from './FilterComponent'
import './style/Artist.css'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function Artist() {
    return (
        <div>
        <Card className="Card__Body">
        <CardImg className="Card__img" top width="100%" src="images/drawing2.jpg" alt="Card image cap" />
        <CardBody>
            <CardTitle tag="h5">Artists</CardTitle>
            <CardText className="Card__Text">Short Artists info lorem ipsum</CardText>
            <Button className="info__button">More info</Button>
        </CardBody>
        </Card>
        </div>
    )
}

export default Artist
