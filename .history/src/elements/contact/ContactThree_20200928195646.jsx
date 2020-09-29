import React, { Component } from "react";
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

class ContactThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      success: false,
      nameError: false,
      emailError: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }

  async handleClick(e) {
    e.preventDefault();

    if(this.state.name === ''){
      this.setState({
        isNameError: true
      });
    }else{
      this.setState({
        isNameError: false
      });
    }

    if(!isEmail(this.state.email)){
      this.setState({
        isEmailError: true
      });
    }else{
      this.setState({
        isEmailError: false
      });
    }

    if(this.state.name === '' || !isEmail(this.state.email)){
      return;
    }

    var settings = {
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9` },
      method: "post",
      url: `http://localhost:5000/app/send/email`,
      data: this.state
    };

    //Make the requst
    var sendEmail = await axios(settings);

    console.log(this.state);
    console.log(sendEmail);

    if (sendEmail.data.sucess === true){
      this.setState({
        success: true
      })
    }else {
      alert('Sorry something is not quite right, please try submitting your request at a later time.')
    }
    
  }

  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
            
              { this.state.success ? (
                <div className={"section-title text-left mb--50"}>
                  <h2 className="title">Thank you!</h2>
                  <p className="description">
                    Thank you for reaching out to me, I will get back to you as soon as possible! For urgent inquiries please do not hesitate to contact me via telephone.
                  </p>
                </div>
              ) : 
                (
                <div className={"section-title text-left mb--50"}>
                  <h2 className="title">{this.props.contactTitle}</h2>
                  <p className="description">
                    I am available for freelance work. Connect with me via phone:
                    <a href="tel:6132180587"> 613.218.0587</a> or email:{" "}
                    <a href="mailto:contact@mariamqureshi.com">
                      contact@mariamqureshi.comm
                    </a>
                  </p>
                </div>
                )
              }

              <div className="form-wrapper">
                <form className={this.state.success ? 'hidden' : ''}>
                  <label htmlFor="item01">
                    <input
                      required={true}
                      type="text"
                      name="name"
                      id="item01"
                      value={this.state.name}
                      onChange={e => {
                        this.setState({ name: e.target.value });
                      }}
                      placeholder="Your Name *"
                      className={this.state.isNameError ? 'error-form' : ''}
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      required={true}
                      type="text"
                      name="email"
                      id="item02"
                      value={this.state.email}
                      onChange={e => {
                        this.setState({ email: e.target.value });
                      }}
                      placeholder="Your email *"
                      className={this.state.isEmailError ? 'error-form' : ''}
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      id="item03"
                      value={this.state.subject}
                      onChange={e => {
                        this.setState({ subject: e.target.value });
                      }}
                      placeholder="Write a Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      type="text"
                      id="item04"
                      name="message"
                      value={this.state.message}
                      onChange={e => {
                        this.setState({ message: e.target.value });
                      }}
                      placeholder="Your Message"
                    />
                  </label>
                  <button
                    onClick={this.handleClick}
                    className="rn-button-style--2 btn-solid"
                    type="submit"
                    value="submit"
                    name="submit"
                    id="mc-embedded-subscribe"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={`${this.props.contactImages}`} alt="trydo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactThree;
