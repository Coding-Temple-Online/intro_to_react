import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class BlogPost extends Component {
    render() {
        const post = this.props.post;

        return (
            <li className="list-group-item">
                <div>
                    <strong>
                        <Link to={`/blog/${post.id}`}>{post.body}</Link>
                    </strong>
                </div>
                <div>
                    <small>{moment(post.created_on).fromNow()}</small>
                </div>
                <cite>&mdash; {post.user_id}</cite>
            </li>
        )
    }
}
