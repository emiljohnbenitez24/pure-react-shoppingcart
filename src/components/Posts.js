import React, { Component } from 'react'
import PostList from './PostList'


export class Posts extends Component {

    render() {
        const { items } = this.props
        const { handleView, handleAdd } = this.props
        return (
            <div>
                <h1 style={{ color: '#000080', fontWeight: 'bold' }}>ITEMS</h1>
                {items.map(item => {
                    return <PostList
                        key={item.id} item={item} handleView={handleView} handleAdd={handleAdd}
                    />
                })}
            </div>
        )
    }
}


export default Posts
