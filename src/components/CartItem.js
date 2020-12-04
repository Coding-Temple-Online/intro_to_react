import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const p = this.props.product.product

        return (
            <tr>
                <td className="row">
                    <div className="col-md-3">
                        <img src={p.image} alt={p.name} className="img-fluid" />
                    </div>
                    <div className="col-md-9">
                        <p>{p.name}</p>
                        <small>{p.description}</small>
                    </div>
                </td>
                <td>{`$${p.price}`}</td>
                <td>{this.props.quantity}</td>
                <td>
                    <button onClick={() => this.props.removeFromCart(p)} className="btn btn-outline-danger btn-lg">
                        <i className="fa fa-shopping-cart"></i>
                    </button>
                </td>
            </tr>
        )
    }
}
