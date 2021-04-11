import React from 'react'
import Artist from './Artist'
import './style/Artistboard.css'
import useFetch from './useFetch'

function Artistboard() {

    const {data: artists, isPending, error} = useFetch('http://localhost:3000/artists')

    return (
        <div className="Artistboard">

            <h1 className="titel">ARTISTS</h1>
            { isPending && <div>Loading...</div>}

            <div class="all_artists__container">
            {artists && <Artist artists={artists} title='This is our artists page'className='all_artists_div' /> }
            </div>

        </div>
    )
}

export default Artistboard
