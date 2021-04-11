import React from 'react'
import './style/Profile.css'
import { Link } from "react-router-dom";
import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';

function Profile() {
    return (
        <div>
            <Card className="Account__Body">

            <CardBody className="card__Body">

            <CardTitle className="account__title" tag="h1">PROFILE PAGE</CardTitle><br />
            <div className="account__links">
                <Link to="/register" >
                <img src="images/Register.png" className="register_button"/>
                </Link>
                <Link to="/login" >
                <img src="images/Login.png" className="login_button"/>
                </Link>
                <Link to="/account" >
                <img src="images/account.png" className="account_button"/>
                </Link>
            </div>
            </CardBody>

            </Card>
        
        </div>
    )
}

export default Profile
