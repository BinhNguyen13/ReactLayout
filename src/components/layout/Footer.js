import React, { Component } from 'react'
import fb from '../../assets/imgs/facebook-solid.png'
import ins from '../../assets/imgs/ins.png'
import twitter from '../../assets/imgs/twitter.png'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3>Mirittika<span>.</span></h3>
                <div>
                    <ul className="footer__nav">
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>FACILITIES</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <div className="footer__icon">
                    <img src={fb} alt="" />
                    <img src={twitter} alt="" />
                    <img src={ins} alt="" />
                </div>
            </div>
        )
    }
}
