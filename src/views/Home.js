import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        const racers = this.props.racers;

        return (
            <React.Fragment>
                <h3>{this.props.name}</h3>
                <hr />

                {/* <button onClick={() => this.props.handleClick()} id="api-btn" className="btn btn-outline-success">Get Data</button> */}
                <form className="form-inline" onSubmit={(e) => this.props.handleSubmit(e)}>
                    <input type="text" className="form-control mb-2 mr-sm-2" name="year" placeholder="Year" />
                    <input type="text" className="form-control mb-2 mr-sm-2" name="season" placeholder="Season" />
                    <button type="submit" className="btn btn-outline-info mb-2">Submit</button>
                </form>

                <div className="table-responsive">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Position</th>
                                <th>Points</th>
                                <th>Wins</th>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Nationality</th>
                                <th>Constructor</th>
                            </tr>
                            </thead>
                            <tbody>
                                {racers.map(racer => (
                                    <tr key={racer.position}>
                                        <td>{racer.position}</td>
                                        <td>{racer.points}</td>
                                        <td>{racer.wins}</td>
                                        <td>
                                            <a target="_blank" rel="noreferrer" href={racer.Driver.url}>{racer.Driver.givenName} {racer.Driver.familyName}</a>
                                        </td>
                                        <td>{racer.Driver.dateOfBirth}</td>
                                        <td>{racer.Driver.nationality}</td>
                                        <td>
                                            <a target="_blank" rel="noreferrer" href={racer.Constructors[0].url}>{racer.Constructors[0].name}</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
