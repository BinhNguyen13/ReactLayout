import React, { Component } from 'react'
import person from '../../assets/imgs/people.png'
import SlideButton from './SlideButton'
export default class Experience extends Component {
    render() {
        return (
            <div className="experience-wrap">
                <div className="experience">
                    <div>
                        <div className="experience__left__line">
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
                        <div className="experience__right__line">
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
                    <div className="experience--margin">
                        <h1>Traveller's Experiences</h1>
                        <p>Here's some awesome feedback from out traveller's</p>
                        <div className="experience__wrap">
                            <div className="experience__item">
                                <img className="experience__item__img--circle" src={person} alt="" />
                                <div className="experience__item__content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        tempore cumque atque culpa facilis, consequuntur
                                        Eaque magnam consequatur quaerat recusandae vero
                      </p>
                                    <h4>Jonathon Doe</h4>
                                    <p>CEO, Jigsawlab</p>
                                </div>
                            </div>
                            <div className="experience__item">
                                <img className="experience__item__img--circle" src={person} alt="" />
                                <div className="experience__item__content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        tempore cumque atque culpa facilis, consequuntur
                                        Eaque magnam consequatur quaerat recusandae vero
                      </p>
                                    <h4>Kazi Erfan</h4>
                                    <p>Lead Designer, Kickstart</p>
                                </div>
                            </div>
                            <div className="experience__item">
                                <img className="experience__item__img--circle" src={person} alt="" />
                                <div className="experience__item__content experience__item__content--last">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        tempore cumque atque culpa facilis, consequuntur
                                        Eaque magnam consequatur quaerat recusandae vero
                      </p>
                                    <h4>Jonathon Doe</h4>
                                    <p>CEO, Jigsawlab</p>
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
