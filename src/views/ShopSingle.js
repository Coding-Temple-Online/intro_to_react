import React, { Component } from 'react'

export default class ShopSingle extends Component {
    constructor() {
        super();

        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:5000/shop/product/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({ product: data }))
            .catch(err => console.log(err))
    }

    render() {
        const p = this.state.product;

        return (
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            {p.name}
                            <span className="float-right">{`$${p.price}`}</span>
                        </h3>
                        <img className="card-img-top" className="img-fluid" style={{ width: '100%' }} src={p.image} alt={p.name} />
                        <p className="card-text">{p.description}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => this.props.addToCart(p)} className="btn btn-outline-success btn-block btn-lg">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
