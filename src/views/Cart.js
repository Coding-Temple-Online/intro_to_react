import React, { Component } from 'react'
import CartItem from '../components/CartItem';

export default class Cart extends Component {
    getCount = (cartItem, cartList) => {
        let count = 0;
        for (const obj of cartList) {
            if (cartItem.name === obj.name) {
                count ++;
            }
        }
        return count
    }

    render() {
        const cart = [...new Set(this.props.cart)]

        return (
            <React.Fragment>
                {
                    !cart.length < 1 ?
                    (
                        <div className=" table-responsive">
                            <table className="table table-striped table-inverse">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {cart.map(p => <CartItem removeFromCart={this.props.removeFromCart} key={p.id} product={p} cart={this.props.cart} getCount={this.getCount} /> )}
                                </tbody>
                            </table>
                        </div>
                    ) :
                    (
                        <h3>You have no items in your cart. Please add some.</h3>
                    )
                }
            </React.Fragment>
        )
    }
}
