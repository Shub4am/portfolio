import React, {Component} from 'react';
import {Grid, Cell,  Card} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="about-body">
            <Card shadow={15} style={{ margin: 'auto', width: '90%', height:'80%', borderRadius:'8px'}}>
                <Grid className="about-grid">
                    <Cell col={12}>
                        <h1><b>Shubham Prakash</b></h1>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <h2 style={{color:'grey'}}>Developer</h2>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>My name is Shubham Prakash, and I'm an <b>Android Application</b> and <b>Front End Web developer</b>. </p>
                        <p>I love coding and working on mobile and web development projects.</p>
                        <p>Currently enrolled in Term II of the Android Developer Nanodegree Program by Udacity.</p>
                        <p>I'm interested in Machine Learning, Automation & Artificial Intelligence.</p>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>I am also actively applying for jobs as a developer to utilize my skills and learn new ones too.
                        </p>
                    </Cell>
                </Grid>
                </Card>
            </div>
        )
    }
}
export default About;