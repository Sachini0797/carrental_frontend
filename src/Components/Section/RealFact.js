import React, { Component } from 'react'

export default class RealFact extends Component {
    render() {
        return (
            <div>
                <section className="funfact-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-8">
                                <div className="single-funfact">
                                    <div className="sec-title">
                                        <h2>REAL FACTS</h2>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor</p> */}
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="funfact-box">
                                                <h4>VEHICLES STOCK</h4>
                                                <h1><i className="icofont icofont-car"></i> <span className="counter">57845</span></h1>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="funfact-box">
                                                <h4>DEALERS SERVED</h4>
                                                <h1><i className="icofont icofont-ui-calendar"></i> <span className="counter">57845</span></h1>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="funfact-box">
                                                <h4>HAPPY CUSTOMERS</h4>
                                                <h1><i className="icofont icofont-businessman"></i> <span className="counter">57845</span></h1>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="funfact-box">
                                                <h4>AWARDS</h4>
                                                <h1><i className="icofont icofont-trophy"></i> <span className="counter">57845</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
