import React, { Component } from 'react'

export default class After_slider extends Component {
    render() {
        return (
            <div className="after-slider">
            <div className="infor">
                <div className="infor__destination">
                    <label htmlFor="destination">DESTINATIONS</label>
                    <select name="destination">
                        <option value="Melbourne">Melbourne</option>
                    </select>
                </div>
                <div className="infor__adults">
                    <label htmlFor="adults">ADULTS</label>
                    <select name="adults" >
                        <option value={2}>2</option>
                    </select>
                </div>
                <div className="infor__checkin">
                    <label htmlFor="checkin">CHECK IN</label>
                    <select name="checkin" >
                        <option value>Sat,17 Sep 2018</option>
                    </select>
                </div>
                <div className="infor__checkout">
                    <label htmlFor="destination">CHECK OUT</label>
                    <select name="destination" >
                        <option value="Melbourne">Tue,20 Sep 2018</option>
                    </select>
                </div>
            </div>
            <div className="action">
                <button>
                    <p>
                        BOOK NOW
                    </p>
                    <i className="fa fa-arrow-right" />
                </button>
                <iframe src="https://www.youtube.com/embed/Od5y1Z9xlnI" />
            </div>
        </div>
        
        )
    }
}
