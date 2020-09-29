import React, { Component } from "react";

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <React.Fragment>
        <ul className={`brand-list ${branstyle}`}>
          <li>
            <img src="/static/brands/mac.png" alt="MAC" />
          </li>
          <li>
            <img src="/static/brands/anastasia.png" alt="Anastasia" />
          </li>
          <li>
            <img src="/static/brands/toofaced.png" alt="Too Faced" />
          </li>
          <li>
            <img src="/static/brands/tarte.png" alt="Tarte" />
          </li>
          <li>
            <img src="/static/brands/nyx.png" alt="NYX" />
          </li>
          <li>
            <img src="/static/brands/urbandecay.png" alt="Urban Decay" />
          </li>
          <li>
            <img src="/static/brands/hudabeauty.png" alt="Huda Beauty" />
          </li>
          <li>
            <img src="/static/brands/smashbox.png" alt="Smashbox" />
          </li>
          <li>
            <img src="/static/brands/makeupforever.png" alt="Makeup Forever" />
          </li>
          <li>
            <img src="/static/brands/benefit.png" alt="Benefit" />
          </li>
          <li>
            <img src="/static/brands/lancome.png" alt="Lancome" />
          </li>
          <li>
            <img src="/static/brands/lise_watier.png" alt="Lise Watier" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default Brand;
