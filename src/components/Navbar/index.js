import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    sumCartProducts = aList => {
        let initialSum = 0;
        for (const obj of aList) {
            initialSum += obj.price
        }
        return Number(initialSum).toFixed(2)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/">Reactbook</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">
                                Shop&nbsp;
                                <span className="badge badge-secondary"> {this.props.cart.length} | ${this.sumCartProducts(this.props.cart)} </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
