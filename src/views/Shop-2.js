import React, { Component } from 'react'

export default class Shop extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/shop/products')
            .then(res => res.json())
            .then(data => this.setState({ products: data }))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="card-deck">
                    {this.state.products.map(p => (
                        <div className="col-md-6" key={p.id}>
                            <div className="card">
                                <img className="card-img-top" src="holder.js/100x180/" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Product Title
                                        <span className="float-right">$0.00</span>    
                                    </h4>
                                    <img src="http://placehold.it/500x500" alt="" className="img-fluid" />
                                    <hr />
                                    <p className="card-text">Text</p>
                                    <hr />
                                    <button className="btn btn-outline-success btn-block">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
