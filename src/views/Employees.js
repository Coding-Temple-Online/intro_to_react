import React, { Component } from 'react';
import firebase from '../firebase';

export default class Employees extends Component {
    constructor() {
        super();

        this.state = {
            employees: [],
            employee: {}
        }

    }

    componentDidMount() {
        const db = firebase.database().ref()
        db.on('value', snapshot => {
            const data = [];

            snapshot.forEach(e => {
                data.push(e.val())
            })
            this.setState({ employees: data })
        })
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
    }

    viewEmployeeData = (employee) => {
        this.setState({ employee })
    }

    render() {
        const employees = this.state.employees;
        const employee = this.state.employee;

        return (
            <div className="row">

                <div className="col-6">
                    <ul className="list-group">
                        <li className="list-group-item active">Employees</li>
                        {employees ? employees.map(e => <li onClick={() => this.viewEmployeeData(e)} key={e.id} className="list-group-item">{`${e.firstName} ${e.lastName}`}</li>) : <h4>Loading...</h4>}
                    </ul>
                </div>

                {
                    employee ? (
                        <div className="col-6">
                            <ul className="list-group">
                                <li className="list-group-item active">{employee.firstName} {employee.lastName}</li>
                                <li className="list-group-item">City <span className="float-right">{employee.city}</span></li>
                                <li className="list-group-item">State <span className="float-right">{employee.state}</span></li>
                                <li className="list-group-item">
                                    Skills
                                    <hr />
                                    {Object.keys(employee).length ? Object.entries(employee.skills).map(s => (
                                        <div key={s.id}>{s[0]}  <span className="float-right">{s[1]}</span></div>
                                    )) : null}
                                </li>
                            </ul>
                        </div>
                    ) : null
                }
                
            </div>
        )
    }
}
