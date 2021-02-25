import React from 'react'
import './style/ShopItemLong.css'

function ShopItemLong() {
    return (
        <div>
        <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">ItemName + ItemPrice € </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Long Item info lorem ipsum</CardSubtitle>
            <Button>Buy!</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default ShopItemLong
