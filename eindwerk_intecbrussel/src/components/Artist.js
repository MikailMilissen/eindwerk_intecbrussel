import React, {useState} from 'react'
import './style/Artist.css'
import { Link } from 'react-router-dom'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function Artist({artists,title}) {
    return (
        
    <div className="single_artist_container">
    {artists.map((artists) => (
        <Card className="single_artist_div">
        <CardImg className="Card__img" top width="100%" src="images/drawing2.jpg" alt="Card image cap" />
        <CardBody>
            
        <Link to={`/artists/${artists.id}`}>
         <CardTitle tag="h2">{artists.name}</CardTitle>
        </Link>

        <CardText className="Card__Text">{artists.bio}</CardText>

        <Link to={`/artists/${artists.id}`}>
            <Button className="info__button">More info</Button>
        </Link>
        </CardBody>
        </Card>
        ))}
        </div>
    )
}

export default Artist
