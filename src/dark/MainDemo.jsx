import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

import SliderOne from "../component/slider/SliderOne";
import ServiceTwo from "../elements/service/ServiceTwo";
import CounterOne from "../elements/counters/CounterOne";
import ContactThree from "../elements/contact/ContactThree";
import Testimonial from "../elements/Testimonial";
import About from "../component/HomeLayout/homeOne/About";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import BlogContent from "../elements/blog/BlogContent";
import BrandOne from "../elements/Brand";
import BrandTwo from "../elements/BrandTwo";
import Helmet from "../component/common/Helmet";

class MainDemo extends Component {
  render() {
    const PostList = BlogContent.slice(0, 3);
    return (
      <div className="active-dark">
        <Helmet pageTitle="Mariam Qureshi | BE YOU by MQ" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.svg"
        />

        <div class="container header-logo-big">
          <div class="row row--35 align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="thumbnail">
                <img src="/assets/images/logo/logo.svg" alt="Digital Agency" />
              </div>
            </div>
          </div>
        </div>

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        {/* End Slider Area   */}

        {/* Start About Area */}
        <div className="about-area about-position-top pb--120 bg_color--1">
          <About />
        </div>
        {/* End About Area */}

        {/* Start Service Area  */}
        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start CounterUp Area */}
        {/* <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Certifications</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
        {/* End CounterUp Area */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 pb--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h2>Bridal Makeup</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                  <a className="btn-transparent rn-btn-dark" href="/blog">
                    <span className="text">View All News</span>
                  </a>
                </div>
              </div> */}
            </div>
            <div className="row mt--60 mt_sm--40">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href="/blog-details">
                        <img
                          className="w-100"
                          src={`/assets/images/blog/blog-${value.images}.png`}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      {/* <h4 className="title">
                        <a href="/blog-details">{value.title}</a>
                      </h4> */}
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href="/portfolio">
                          View Portfolio
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start Brand Area  */}
        <div className="rn-brand-area ptb--120 bg_color--5">
          <div className="container">
          
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h2>Brands In My Kit</h2>
                </div>
              </div>                   
            </div>          
          
            <div className="row">
              <div className="col-lg-12">
                <BrandOne branstyle="branstyle--2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area  */}
        {/* Start COntact Area */}
        <div id="contact" className="fix">
          <div className="rn-contact-area ptb--120 bg_color--1">
            <ContactThree
              contactImages="/static/images/contact_image.png"
              // contactImages="/static/logo/FinalSquareHQ.png"
              contactTitle="Inquiries."
            />
          </div>
        </div>
        {/* End COntact Area */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </div>
    );
  }
}
export default MainDemo;
