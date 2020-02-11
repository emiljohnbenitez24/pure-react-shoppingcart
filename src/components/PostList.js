import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export class PostList extends Component {


    render() {
        const { id, name, description } = this.props.item
        const { handleView, handleAdd } = this.props
        return (
            <div style={{ padding: '10px' }}>
                <h1>{name}</h1>
                <p>{description}</p>
                <Button onClick={() => handleAdd(id)}
                    style={{ maring: '10px' }}
                >Add to Cart</Button>
            </div>
        )
    }
}

export default PostList
