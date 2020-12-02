import React, { Component } from 'react'
import Product from '../components/Product';

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
                    {this.state.products.map(p => <Product key={p.id} product={p} addToCart={this.props.addToCart} />)}
                </div>
            </React.Fragment>
        )
    }
}
