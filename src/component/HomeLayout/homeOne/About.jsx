import React, { Component } from "react";

class About extends Component {
  render() {
    let title = "About MQ",
      description =
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,";
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/static/images/March3.png"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">Mariam Qureshi is a self-taught freelance Makeup Artist based out of Ottawa, Canada. Mariam has a passion for all things beauty...</p>
                    <p className="description">To learn more about Mariam visit the <a className="about-link" href="/about">About</a> page.</p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Accomplisments</h3>
                        <p>Accomplisment number one</p>
                        <p>Item number 2</p>
                        <p>Accomplisment number three</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">COVID-19 Update</h3>
                        <p>
                          Barbicade Certified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
