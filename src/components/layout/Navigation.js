import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav id="navbar">

            <h1 className="logo"><a href="/">Mirittika<span>.</span></a></h1>
            <div className="menu">
                <ul className="list-menu">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">FACILITIES</a></li>
                    <li><a href="/">ABOUT US</a></li>
                    <li><a href="/">CONTACT US</a></li>
                </ul>

            </div>
            <div className="cart">
                <i className="fa fa-shopping-bag"></i>
                <a href="/">CART</a>
            </div>
        </nav>
        )
    }
}
