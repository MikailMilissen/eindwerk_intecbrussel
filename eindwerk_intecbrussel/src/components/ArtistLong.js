import React from 'react'
import './style/ArtistLong.css'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch'
import ShopItem from './ShopItem'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function ArtistLong() {

    const {id} = useParams()
    const {data: artists, isPending, error} = useFetch('http://localhost:3000/artists/' + id) 

    return (
    <div className='artistlong_container'>
        <div className='artist_details'>
            {isPending && <div>Loading..</div>}
            {error && <div>{error} </div>}
            {artists && (
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" className="cardimg" />
        <CardBody>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            <CardTitle tag="h2">{artists.name}</CardTitle>
            <CardText>{artists.bio}</CardText>
            
            {/* Maybe we can add social media icons here? */}
            <Button className="button">Get in Touch</Button>
        </CardBody>
        </Card>
        )}
        </div>
    </div>
    )
}

export default ArtistLong
