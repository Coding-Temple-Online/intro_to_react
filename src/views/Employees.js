import React, { Component } from 'react';
import firebase from '../firebase'

export default class Employees extends Component {
    constructor() {
        super();

        this.state = {
            employees: []
        }

        this.db = firebase.database()
    }

    componentDidMount() {
        this.db.ref().once('value').then(snapshot => this.setState({ employees: snapshot.val() }))
    }

    addToDatabase = () => {
        firebase.database().ref().push({
            "id": 1112356,
            "firstName": "Ozzie",
            "lastName": "Osbourne",
            "city": "London",
            "state": "UK",
            "loggedIn": false,
            "skills":
             {
                "JavaScript": 10,
                "Python": 10,
                "SQL": 10,
                "React": 10,
                "Flask": 10
            }
        });
        alert("It worked!");
    }

    render() {
        return (
            <div>
                Employees view.
                <div>
                    <button onClick={this.addToDatabase} className="btn btn-danger">Write some data</button>
                </div>
            </div>
        )
    }
}
