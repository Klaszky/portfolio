import React, { Component } from 'react';
import {Grid, Cell} from "react-mdl";

class LandingPage extends Component {
  render() {
    return(
        <div style={{width: '100%', margin: 'auth'}}>
          <Grid className={"landing-grid"}>
            <Cell col={12}>
              <img
                src={"https://image.flaticon.com/icons/svg/607/607433.svg"}
                alt={"avatar"}
                className={"avatar-img"}
              />

              <div className={"banner-text"}>
                <h1>Full Stack Web Developer</h1>

                <hr/>

                <p>Java | Spring | JavaScript | ReactJS | GraphQL |MongoDB</p>

                <div className={"social-links"}>
                  <a href={"http://google.com"} target={"_blank"} rel={"noopener noreferrer"}>
                    <i className={"fa fa-linkedin-square"}  aria-hidden={"true"}/>
                  </a>

                  <a href={"http://google.com"} target={"_blank"} rel={"noopener noreferrer"}>
                    <i className={"fa fa-github-square"}  aria-hidden={"true"}/>
                  </a>

                </div>

              </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}

export default LandingPage;