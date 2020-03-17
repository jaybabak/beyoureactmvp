import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>Mariam has been phoneomnal in every instance!</p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Rabbia Rabanni</span> | Bridal Make-up
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Awesome look that Mariam created for my special day! Great
                      experience as always! Two thumbs up for keeping fresh
                      content on social media!
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Fatima Asrafy </span> | Prom Make-up
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Always friendly staff, clean, bright. And Mariam is
                      professional, fun, and dies an excellent job every time!
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Jannat Tumpa </span> | Corporate Event
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Mariam you're a real pro and we couldn’t have asked for
                      anyone better to give us our glam for my wedding day!!
                      Thank you again for taking such special care in your work.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Anna B</span> | Special Occasion
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      I simply wanted to take the time now that things have
                      calmed down a bit to express my gratitude and satisfaction
                      of the service you provided. I was extremely lucky to have
                      had you be our specialized glam team the day of my
                      wedding.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Karen A</span> | Bridal Makeup
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/ref-image-2.jpg"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/ref-image-11.png"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/ref-image-8.png"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/ref-image-9.png"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img
                        src="/assets/images/client/ref-image-10.png"
                        alt="Testimonial Images"
                      />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
