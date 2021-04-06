import React from 'react'
import './style/Account.css'


import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Account() {
    return (
        <div>
        <Card className="Account__Body">

            <CardBody className="card__Body">

            <CardImg className="card__img" top width="100%" src="/images/drawing3 account foto.jpg" alt="Card image cap" /><br />
            <CardTitle className="account__title" tag="h1">ACCOUNT NAME</CardTitle><br />

            <CardText className="card__title">Bio</CardText>
            <FormGroup className="BioArea" >
                <Label className="text" for="exampleText">Bio/text Area</Label><br />
                <Input className="textarea" type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button className="additem__button">add Bio</Button><br />
            <br />
            <CardText className="card__title">Contact</CardText>
            <FormGroup className="contactArea" >
                <Label className="text" for="exampleText">contact/text Area</Label><br />
                <Input className="textarea" type="textarea" name="text" id="exampleText" /><br />
            </FormGroup>
            <Button className="additem__button">add Info</Button>
            
            </CardBody>

            <FormGroup className="shopitemArea">
                
            </FormGroup>

            <Button className="additem__button" >add shop item</Button>
            
        </Card>
        </div>
    )
}

export default Account
