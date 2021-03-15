import React from 'react'
import './style/Homepage.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


import { Jumbotron, Container } from 'reactstrap';

function Homepage() {
    return (
    <div className="home__container">

      <div id="Homepage">
          <img src="images/sla_logo_home.png" className="home__logo"/>
          <a href="#Aboutpage" className="arrow__down__ref">
          <ArrowDownwardIcon style={{ fontSize: 60 }} className="arrow__down" />
          </a>
      </div>

      <div id="Aboutpage">
        <img src="images/sla_logo_green.png" className="about__logo"/> 

      <div className="about__text">
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas vitae dolore similique porro culpa corporis consequatur exercitationem voluptatum amet fugiat obcaecati distinctio soluta illo architecto, dignissimos nesciunt nemo deserunt?
        Iure obcaecati beatae porro architecto itaque nihil suscipit id deleniti voluptate! Porro, tempore veniam! Tenetur accusantium aperiam atque nisi eos aut, fugit, officiis dolorum unde mollitia quas aliquid laborum odit.
        Voluptate labore iste corrupti temporibus autem ullam, est debitis aspernatur adipisci aut quam id at quis. Animi ea, dolore aliquam quam harum ullam corporis minus repellat culpa facere fugiat nihil!</p>
      </div>
      <div className="contact__text">
        <h1>CONTACT</h1>
        <p>You can follow and contact us on:
          Email: somethingsomething@gmail.com
          Tel.: 04 74 57 68 51
          instagram: @somethingsomething
          Linkedin: @somethingsomething</p>
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