import React, { Component } from 'react'
import CartItem from '../components/CartItem';

export default class Cart extends Component {
    // getCount = (cartItem, cartList) => {
    //     let count = 0;
    //     for (const obj of cartList) {
    //         if (cartItem.name === obj.name) {
    //             count ++;
    //         }
    //     }
    //     return count
    // }

    // {
    //     1: {
    //         "product": Product Object Stuff,
    //         "quantity": 3
    //     }
    // }

    render() {
        const cart = this.props.cart;
        console.log(Object.values(cart))
        // for (const key in cart) {
        //     if (this.props.cart.hasOwnProperty(key)) {
        //         const element = this.props.cart[key];
                
        //     }
        // }

        return (
            <React.Fragment>
                {
                    !Object.keys(cart).length < 1 ?
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
                                    { 

                                    }
                                    {Object.values(cart).map(p => <CartItem removeFromCart={this.props.removeFromCart} key={p.product.id} product={p} quantity={p.quantity} />)}
                                    {/* {cart.map(p => <CartItem removeFromCart={this.props.removeFromCart} key={p.id} product={p} cart={this.props.cart} /> )} */}
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
