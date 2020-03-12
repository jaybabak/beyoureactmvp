import React, { Component } from "react";

class BrandTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="row align-items-end">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="section-title pt--120 ptb--120">
              <h2>Brands In My Kit</h2>
            </div>
          </div>
        </div>
        <ul className="brand-style-2">
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
        </ul>
      </React.Fragment>
    );
  }
}
export default BrandTwo;
