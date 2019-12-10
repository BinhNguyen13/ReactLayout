import React, { Component, Fragment } from 'react'
import Navigation from '../components/layout/Navigation'
import Slider from '../components/components/Slider'
import AfterSlider from '../components/components/After_slider'
import Trip from '../components/components/Trip'
import Room from '../components/components/Room'
import Experience from '../components/components/Experience'
import Subscribe from '../components/components/Subscribe'
import Footer from '../components/layout/Footer'
import '../css/style.css'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Navigation />
                    <Slider />
                </header>
                <div className="content">
                   <AfterSlider/>
                   <Trip/>
                    <Room/>
                    <Experience/>
                    <Subscribe/>
                </div>
                <Footer/>
            </Fragment>

        )
    }
}
