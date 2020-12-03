import React, { Component } from 'react'
import BlogPost from '../components/BlogPost';

export default class Blog extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.posts.reverse().map(post => <BlogPost post={post} key={post.id} />)}
            </ul>
        )
    }
}
