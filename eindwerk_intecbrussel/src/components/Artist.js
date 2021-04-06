import React, {useState} from 'react'
import './style/Artist.css'
import { Link } from 'react-router-dom'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function Artist({artists,title}) {
    return (
        <div>
    {artists.map((artists) => (
        <Card className="Card__Body">
        <CardImg className="Card__img" top width="100%" src="images/drawing2.jpg" alt="Card image cap" />
        <CardBody>
        <Link to={`/artists/${artists.id}`}>
         <CardTitle tag="h4">{artists.name}</CardTitle>
        </Link>
            <CardText className="Card__Text">{artists.bio}</CardText>
            <Button className="info__button">More info</Button>
        </CardBody>
        </Card>
        ))}
        </div>
    )
}

export default Artist
