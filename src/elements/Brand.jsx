import React, { Component } from "react";

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <React.Fragment>
        <ul className={`brand-list ${branstyle}`}>
          <li>
            <img src="/static/brands/mac.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/static/brands/anastasia.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/static/brands/mac.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/static/brands/anastasia.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/static/brands/mac.png" alt="Logo Images" />
          </li>
          <li>
            <img src="/static/brands/mac.png" alt="Logo Images" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default Brand;
