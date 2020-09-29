import React, { Component } from "react";
import axios from 'axios';

class ContactTwo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            success: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick(e) {
      e.preventDefault();
  
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

    render(){
        return(
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title">Contact Me.</h2>
                                <p className="description">Please do no hesitate to reach out to me for any questions or inquiries.</p>
                            </div>
                            <div className="form-wrapper">
                                <form className={this.state.success ? 'hidden' : ''}>
                                    <label htmlFor="item01">
                                        <input
                                            type="text"
                                            name="name"
                                            id="item01"
                                            value={this.state.name}
                                            onChange={(e)=>{this.setState({name: e.target.value});}}
                                            placeholder="Your Name *"
                                        />
                                    </label>

                                    <label htmlFor="item02">
                                        <input
                                            type="text"
                                            name="email"
                                            id="item02"
                                            value={this.state.email}
                                            onChange={(e)=>{this.setState({email: e.target.value});}}
                                            placeholder="Your email *"
                                        />
                                    </label>

                                    <label htmlFor="item03">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="item03"
                                            value={this.state.subject}
                                            onChange={(e)=>{this.setState({subject: e.target.value});}}
                                            placeholder="Write a Subject"
                                        />
                                    </label>
                                    <label htmlFor="item04">
                                        <textarea
                                            type="text"
                                            id="item04"
                                            name="message"
                                            value={this.state.message}
                                            onChange={(e)=>{this.setState({message: e.target.value});}}
                                            placeholder="Your Message"
                                        />
                                    </label>
                                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img src="/assets/images/client/ref-image-10.png" alt="trydo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;