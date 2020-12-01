import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                {this.props.stuff}
                <h3>{this.props.name}</h3>
                <hr />
                This is the Contact page.
            </div>
        )
    }
}
