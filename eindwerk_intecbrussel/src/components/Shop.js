import React from 'react'
import FilterComponent from './FilterComponent'
import Shopboard from './Shopboard'

import './style/Shop.css'

function Shop() {
    return (
        <div>
            Shop
            <FilterComponent/>
            <Shopboard />
        </div>
    )
}

export default Shop
