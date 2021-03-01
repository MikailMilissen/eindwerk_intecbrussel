import React from 'react'
import './style/Account.css'
import ShopItem from './ShopItem'

import { Card, CardBody, Button, CardGroup, CardTitle, CardText, CardImg } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Account() {
    return (
        <div>
        <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">Account Name</CardTitle>

            <CardText>Bio</CardText>
            <FormGroup className="BioArea" >
                <Label for="exampleText">Bio/text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>add Bio</Button>

            <CardText>Contact</CardText>
            <FormGroup className="contactArea" >
                <Label for="exampleText">contact/text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>add Contact info</Button>

            <FormGroup className="shopitemArea">
                <ShopItem />
            </FormGroup>
            <Button>add shop item</Button>
            
            </CardBody>
        </Card>
        </div>
    )
}

export default Account
