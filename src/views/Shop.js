import React, { Component } from 'react'

export default class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="card-deck">
                    <div className="col-md-6">
                        <div class="card">
                            <img class="card-img-top" src="holder.js/100x180/" alt="" />
                            <div class="card-body">
                                <h4 class="card-title">
                                    Product Title
                                    <span className="float-right">$0.00</span>    
                                </h4>
                                <img src="http://placehold.it/500x500" className="img-fluid" />
                                <hr />
                                <p class="card-text">Text</p>
                                <hr />
                                <button className="btn btn-outline-success btn-block">Add to Cart</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </React.Fragment>
        )
    }
}
