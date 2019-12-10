import React, { Component } from 'react'

export default class SlideButton extends Component {
    render() {
        return (
            <div>
                <div className="slide__btn">
                    <button>
                        <i className="fa fa-chevron-left" />
                    </button>
                    <button>
                        <i className="fa fa-chevron-right" />
                    </button>
                </div>
            </div>
        )
    }
}
