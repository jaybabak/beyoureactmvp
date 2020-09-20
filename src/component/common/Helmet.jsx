import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Be You by MQ</title>
                    <meta name="description" content="Mariam Qureshi - A full service makeup artist located in Ottawa. Bridal makeup and special occasions." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
