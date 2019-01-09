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
                        <p>Hello! I am Shubham Prakash, a 23 years old <b>Front End</b> and an <b>Android Application Developer</b> living in Bengaluru,IN <img src="blank.gif" class="flag flag-in" alt=''/></p>
                        <p>I'm passionate about coding! & working on challenging Projects that help me learn new skills.</p>
                        <p>Currently enrolled in Term II of the Android Developer Nanodegree Program by Udacity and Google.</p>
                        <p>Fasinated by Machine Learning, Automation, New Technologies & Artificial Intelligence.</p>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>I am actively applying for jobs as a Computer Science Engineer to utilize my skills and learn new ones too.</p>
                        <hr style= {{borderTop: '2px solid #833fb2', width:'80%'}}/>
                    </Cell>
                </Grid>
                </Card>
            </div>
        )
    }
}
export default About;