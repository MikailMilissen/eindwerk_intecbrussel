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
        <div className='artists_details'>
            {isPending && <div>Loading..</div>}
            {error && <div>{error} </div>}
            {artists && (
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
            <CardTitle tag="h5">{artists.name}</CardTitle>
            <CardText>{artists.bio}</CardText>
            
            {/* Maybe we can add social media icons here? */}
            <Button>Get in Touch</Button>
        </CardBody>
        </Card>

        )}
        
        </div>
    )
}

export default ArtistLong
