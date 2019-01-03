import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
            <Cell col={12}></Cell>
            {/* <img
            src="https://tinyurl.com/ShubProfileImg"
            alt="avatar"
            className="avatar-img"
            /> */}
            <div className="banner-text">
            <h1>Shubham Prakash</h1>

            <hr/>

            <p>Java | NodeJS | JavaScript | Android App Development | ReactJS | React Native</p>

            <div className="social-links">

            {/* LINKEDIN */}
            <a href="https://linkedin.com/in/Shubham92101" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
            </a>

            {/* GITHUB */}
            <a href="https://github.com/Shub4am" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
            </a>
            
            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/shub4am/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"/>
            </a>
            
            {/* TWITTER */}
            <a href="https://twitter.com/Shubham92101" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-twitter-square" aria-hidden="true"/>
            </a>
            
            </div>
            </div>
            </Grid>
            </div>
        )
    }
}
export default Landing;