import React from 'react'
import './style/FilterComponent.css'

import { CustomInput, Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';

function FilterComponent() {
    return (
        <div className='filter__container'>
            <form>
            <h3>Filtercomponent</h3>
            <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="SEARCH"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleCheckbox">Switches</Label>
                <div>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Turn on this custom switch" />
                    <CustomInput type="switch" id="exampleCustomSwitch2" name="customSwitch" label="Turn on this custom switch" />
                </div>
            </FormGroup>
            <Button color="primary">Apply Filters</Button><br />
            <Button>Clear Filters</Button>
         
            </form>
            
        </div>
    )
}

export default FilterComponent
