import React from 'react'
import FilterComponent from './FilterComponent'
import './style/Artist.css'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function Artist() {
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
        </div>
    )
}

export default Artist
