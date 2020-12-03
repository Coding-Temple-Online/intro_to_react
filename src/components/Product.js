import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const p = this.props.product;
        
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link className="text-dark" to={`/shop/product/${p.id}`}>{p.name}</Link>
                            <span className="float-right">{`$${p.price}`}</span>    
                        </h4>
                        <Link to={`/shop/product/${p.id}`}><img src={p.image} alt={p.name} className="img-fluid" /></Link>
                        <hr />
                        <p className="card-text">{p.description}</p>
                        <hr />
                        <button onClick={() => this.props.addToCart(p)} className="btn btn-outline-success btn-block">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
