import React, { Component } from 'react'
import des1 from '../../assets/imgs/des1.jpg'
import des2 from '../../assets/imgs/des2.jpg'
import des3 from '../../assets/imgs/des3.jpg'
import des4 from '../../assets/imgs/des4.jpg'
import SlideButton from './SlideButton'
export default class Trip extends Component {
  render() {
    return (
      <div className="trip-wrap">
        <div className="trip">
          <div className="trip__line">
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </div>
          <div className="trip__text">
            <h1>Trip Planner</h1>
            <p>Twenty years from now you will be more disappointed by the things that
              you didn't do than by the ones you did do. so throw off the bowlines. Sail
              away from the safe harbor. Cacth the trade winds in your sails.
            </p>
            <div className="trip__text__wrap">
              <button>View All Trip Plans</button>
              <div className="trip__text__btn--black" />
              <div className="trip__text__btn--secondary" />
            </div>
          </div>
          <div className="trip__destination">
            <div className="trip__destination__content">
              <img src={des1} alt="" />
              <div className="trip__destination__content--hover">
                <div className="trip__destination__content__guided">
                  <p>GUIDED TOURS</p>
                  <p>$99/day</p>
                </div>
                <h2>New York City Tour</h2>
                <div className="trip__destination__content__rate">
                  <div>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div>
                    <p>7 days tour</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="trip__destination__content">
              <img src={des2} alt="" />
              <div className="trip__destination__content--hover">
                <div className="trip__destination__content__guided">
                  <p>GUIDED TOURS</p>
                  <p>$99/day</p>
                </div>
                <h2>New York City Tour</h2>
                <div className="trip__destination__content__rate">
                  <div>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div>
                    <p>7 days tour</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="trip__destination__content">
              <img src={des3} alt="" />
              <div className="trip__destination__content--hover">
                <div className="trip__destination__content__guided">
                  <p>GUIDED TOURS</p>
                  <p>$99/day</p>
                </div>
                <h2>New York City Tour</h2>
                <div className="trip__destination__content__rate">
                  <div>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div>
                    <p>7 days tour</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="trip__destination__content">
              <img src={des4} alt="" />
              <div className="trip__destination__content--hover">
                <div className="trip__destination__content__guided">
                  <p>GUIDED TOURS</p>
                  <p>$99/day</p>
                </div>
                <h2>New York City Tour</h2>
                <div className="trip__destination__content__rate">
                  <div>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div>
                    <p>7 days tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SlideButton/>
      </div>
    )
  }
}
