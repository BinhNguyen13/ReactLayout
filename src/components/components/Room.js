import React, { Component } from 'react'

export default class Room extends Component {
    render() {
        return (
            <div className="room">
        <div className="room__start__line">
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
        <div className="room--margin">
          <div className="room__text">
            <div>
              <h1>ROOM &amp; SUITES</h1>
              <p>Pick a room that suits your taste and budget</p>
            </div>
          </div>
          <div className="room__wrap">
            <div className="room__deluxe">
              <div className="room__text__bg">
                <p>$249/night</p>
                <h3>Deluxe Room</h3>
              </div>
            </div>
            <div className="room__premium">
              <div className="room__text__bg">
                <p>$149/night</p>
                <h3>Premium Room</h3>
              </div>
            </div>
            <div className="room__twin">
              <div className="room__text__bg">
                <p>$59/night</p>
                <h3>Twin Room</h3>
              </div>
            </div>
            <div className="room__special">
              <div className="room__text__bg">
                <p>$99/night</p>
                <h3>Special Room</h3>
              </div>
            </div>
            <div className="room__single">
              <div className="room__text__bg">
                <p>$29/night</p>
                <h3>Single Room</h3>
              </div>
            </div>
            <div className="room__line">
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
          </div>
        </div>
      </div>
        )
    }
}
