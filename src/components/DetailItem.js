import React, { Component } from 'react'

export class DetailItem extends Component {
    render() {
        const { detailItem } = this.props
        return (
            <div>
                <h1>{detailItem.name}</h1>
                <p>{detailItem.description}</p>
            </div>
        )
    }
}

export default DetailItem
