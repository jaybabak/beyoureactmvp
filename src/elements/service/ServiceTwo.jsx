import React, { Component } from "react";
import { FiFeather, FiArchive, FiAward, FiHeart } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiFeather />,
    title: "Prom",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiArchive />,
    title: "Corporate Events",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiAward />,
    title: "Special Events",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  },
  {
    icon: <FiHeart />,
    title: "Bridal Make-up",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth."
  }
];

class ServiceTwo extends Component {
  render() {
    let title = "Services",
      description =
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/service">
                  <span className="text">View All Services</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt_md--50">
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                  <a href="/service">
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
