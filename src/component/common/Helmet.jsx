import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} | Be You by MQ - Mariam Qureshi Makeup Artist</title>
                    <meta name="description" content="Be You by MQ | Mariam Qureshi makeup artist - Bridal makeup and full makeup services in the Ottawa and Gatineau area. Mariam provides services for all occasion!" />
                    <meta name="keywords" content="Bridal makeup, traditional makeup, indian makeup, bridal make up, makeup artist, make up artist, make-up, bridal, occasions." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
