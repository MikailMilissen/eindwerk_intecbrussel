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
        <a href="#Aboutpage" className="arrow__down__ref">
          <ArrowDownwardIcon style={{ fontSize: 60 }} className="arrow__down" />
          </a>
          <br />
        </div>
      </div>

      <div id="Aboutpage">
      <br />
      <div className="about__text">
        <h1>ABOUT</h1>
        <br />
        <p>SLA Platform is a social platform and online store<br />
        that helps to support local artists in Belgium.</p>
        <br />
        <br />
        <h1>CONTACT</h1>
        <br />
        <p>You can follow and contact us on:<br />
        Email: <a className="link" href="mailto: slaplatform@gmail.com">slaplatform@gmail.com</a><br />
        Tel.: 04 74 57 68 51<br />
        instagram: @slaplatform<br />
        Linkedin: @slaplatform</p>
      </div>
      
      <img src="images/drawing1 ZW.jpg" className="about__img"/>

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