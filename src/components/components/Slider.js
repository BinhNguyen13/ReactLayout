import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className="slider">
                <div className="slider__text">
                    <h3>MRITTIKA'S BEACH HOUSE</h3>
                    <h1>Dare to Live the Life You've Always Wanted</h1>

                    <p>
                        Twenty years from now you will be more disappointed by the things that
                        you didn't do than by the ones you did do. So
                        throw off
                        the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails
                    </p>
                </div>
                <div className="slider__scroll">
                    <p>01</p>
                    <hr/> 
                    <button><i className="fa fa-chevron-up"></i></button>
                    <button><i className="fa fa-chevron-down"></i></button>  
                </div>
            </div>
        
        )
    }
}
