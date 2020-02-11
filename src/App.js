import React, { Component } from 'react'
import Posts from './components/Posts'
import Cart from './components/Cart'
import { Container, Row, Col } from 'react-bootstrap'

export class App extends Component {
  state = {
    items: [
      {
        id: 1,
        name: 'Samsung Galaxy',
        description: 'This is an android',
        price: 35,
        total: 0,
        quantity: 1
      },
      {
        id: 2,
        name: 'I Phone',
        description: 'This is an apple',
        price: 25,
        total: 0,
        quantity: 1
      },
    ],
    detailItem: {},
    cart: []
  }

  handleView = id => {
    const detailItem = this.state.items.find(item => item.id === id)
    this.setState({
      detailItem
    })
  }

  handleAdd = id => {
    const existedItem = this.state.cart.find(item => item.id === id)
    const newItems = this.state.cart.map(item => item.id === id ?
      Object.assign({}, item, {
        quantity: item.quantity + 1,
        total: item.total + item.price
      }) : item
    )
    if (existedItem) {
      this.setState({
        cart: newItems
      })
    } else {
      const addItem = this.state.items.find(item => item.id === id)
      const item = Object.assign({}, addItem, { total: addItem.total + addItem.price })
      this.setState({
        cart: [...this.state.cart, item]
      })
    }
  }

  handleDel = id => {
    const existedItem = this.state.cart.find(item => item.id === id)
    const newItem = this.state.cart.filter(item => item.id !== id)
    const newItems = this.state.cart.map(item => item.id === id ?
      Object.assign({}, item, {
        quantity: item.quantity - 1,
        total: item.total - item.price
      }) : item
    )
    if (existedItem.quantity === 1) {
      this.setState({
        cart: newItem
      })
    }
    else {
      this.setState({
        cart: newItems
      })
    }
  }

  handleRemove = id => {
    const newItems = this.state.cart.filter(item => item.id !== id)
    this.setState({
      cart: newItems
    })
  }
  render() {
    const { items, detailItem, cart } = this.state
    const { handleView, handleAdd, handleDel, handleRemove } = this
    return (
      <div>
        <Row className="justify-content-md-center" style={{ padding: '20px' }}>
          <Col sm="5" style={{ backgroundColor: '#F8F8FF', margin: '10px' }}>
            <Posts
              items={items} handleView={handleView} handleAdd={handleAdd}
            />
          </Col>
          <Col sm="5" style={{ backgroundColor: '#F8F8FF', margin: '10px' }}>
            <Cart cart={cart}
              handleAdd={handleAdd} handleDel={handleDel} handleRemove={handleRemove}
            />
          </Col>
        </Row>
      </div >
    )
  }
}


export default App;
