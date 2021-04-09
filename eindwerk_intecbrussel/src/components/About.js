import React from 'react'
import './style/about.css'


import { Jumbotron, Container } from 'reactstrap';

function Homepage() {
    return (
    <div className="about__container">

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

      </div>
      
    </div>
    )
}

export default Homepage
