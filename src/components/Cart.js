import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export class Cart extends Component {
    render() {
        const { cart, handleAdd, handleDel, handleRemove } = this.props
        return (
            <div>
                <div>
                    <h1 style={{ color: '#000080', fontWeight: 'bold' }}>SHOPPING CART</h1>
                </div>
                {
                    cart.length > 0 ? cart.map(item => {
                        return <div key={item.id} style={{ padding: '10px' }}>
                            <h1>Item Name: {item.name}</h1>
                            <p>Description: {item.description}</p>
                            <p>Quantity: {item.quantity}</p>
                            <Button onClick={() => handleAdd(item.id)}
                                style={{ margin: '5px' }}
                            >+</Button>
                            <Button onClick={() => handleDel(item.id)}
                                style={{ margin: '5px' }}
                            >-</Button>
                            <Button onClick={() => handleRemove(item.id)}
                                style={{ margin: '5px' }}
                            >Remove from Cart</Button>
                        </div>
                    }) : <h1 style={{ opacity: '.7' }}>Cart is Empty</h1>
                }
            </div >
        )

    }
}
export default Cart
