import React from 'react'
import './style/FilterComponent.css'

import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

function FilterComponent() {
    return (
        <div>
            <form>
            <h3>Filtercomponent</h3>
            <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="search placeholder"
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
            <Button>Apply Filters</Button>
            <Button>Clear Filters</Button>
            </form>
        </div>
    )
}

export default FilterComponent
