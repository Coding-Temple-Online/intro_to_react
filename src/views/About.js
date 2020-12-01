import React, { Component } from 'react'

export default class About extends Component {
    render() {


        return (
            <div>
                <h3>{this.props.name}</h3>
                <hr />
                This is the About page.
                <button onClick={this.props.getStuff} className="btn btn-outline-warning">Do Something</button>
            </div>
        )
    }
}
