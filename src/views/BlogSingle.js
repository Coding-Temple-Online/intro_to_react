import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class BlogSingle extends Component {
    constructor() {
        super();

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/blog/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ post: data }))
            .catch(error => console.error(error))
    }   

    render() {
        const post = this.state.post;

        return (
            <React.Fragment>
                <Link className="btn btn-link" to="/blog">Go back</Link>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div>
                            <strong>{post.body}</strong>
                        </div>
                        <div>
                            <small>{moment(post.created_on).fromNow()}</small>
                        </div>
                        <cite>&mdash; {post.user_id}</cite>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
