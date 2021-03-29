import React from 'react'
import './style/Homepage.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


import { Jumbotron, Container } from 'reactstrap';

function Homepage() {
    return (
    <div className="home__container">

      <div id="Homepage">
        <div>
        <img src="images/sla_logo_home.png" className="home__logo"/>
        </div>
        <div>
          <br />
        </div>
      </div>
      
    </div>
    )
}

export default Homepage


{/* <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">About</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
        <Container fluid>
          <h1 className="display-3">Contact</h1>
          <p className="lead">You can follow and contact us on:
          Email: somethingsomething@gmail.com
          Tel.: 04 74 57 68 51
          instagram: @somethingsomething
          Linkedin: @somethingsomething</p>
        </Container>
      </Jumbotron> */}