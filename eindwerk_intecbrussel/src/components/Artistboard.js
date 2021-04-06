import React from 'react'
import Artist from './Artist'
import './style/Artistboard.css'
import {CardGroup} from 'reactstrap'
import useFetch from './useFetch'

function Artistboard() {

    const {data: artists, isPending, error} = useFetch('http://localhost:3000/artists')

    return (
        <div>
            <h1 className="titel">ARTISTS</h1>
            { isPending && <div>Loading...</div>}
            <div class="artists__container">
            {artists && <Artist artists={artists} title='This is our artists page' /> }
            </div>

            <CardGroup>
            </CardGroup>
        </div>
    )
}

export default Artistboard
