import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe">
            <div className="subscribe__text">
              <h1>Subscribe<br /> to Our Newsletter</h1>
            </div>
            <div className="subscribe__form">
              <input placeholder="jhondoe@gmail.com" type="text" />
              <button>Subscribe</button>
            </div>
          </div>
        )
    }
}
