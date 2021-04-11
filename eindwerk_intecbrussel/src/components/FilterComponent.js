import React from 'react'
import './style/FilterComponent.css'

import { CustomInput, Form, FormGroup, Label, Input, Button, Col, Row, Switch } from 'reactstrap';

function FilterComponent() {
    return (
        <div className='filter__container'>
            <form>
            <h3>Filter</h3>
            <FormGroup className="switch__container">
                <FormGroup>
                <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="SEARCH"
                />
                </FormGroup>
                <div>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Opvultekst" />
                </div>
            </FormGroup>
            <div>
            <Button for="exampleSearch" className="search__button">Search</Button>
            </div>
            <div>
            <Button className="clear__button">Clear Filters</Button>
            </div>
         
            </form>
            
        </div>
    )
}

export default FilterComponent
