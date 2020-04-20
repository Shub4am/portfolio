import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './Education';
import Skills from './skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{TextAlign: 'center'}}>
                            <img
                                src="https://tinyurl.com/ShubProfileImg"
                                alt="avatar"
                                className="avatar-img"
                                style={{height: '200px'}}
                                />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Shubham Prakash</h2>
                        <h4 style={{color: 'grey'}}>Developer</h4>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'50%'}}/>
                        <p>I am currently looking for employment as a developer to utilize my skills in coding and working with a team. I also want to apply my
engineering knowledge to practical problems in software engineering and gain technical expertise while adding value. </p>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'70%'}}/>
                        <h5>Address</h5>
                        <p>Bengaluru, 560078. </p>
                        <hr style= {{borderTop: '3px solid #833fb2', width:'80%'}}/>

                        <h2 align="center"><a href="https://github.com/Shub4am/calculator/files/4501962/Shubham_Prakash_CV.pdf" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fas fa-file-pdf" aria-hidden="true"/></b></a></h2>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2014}
                            endYear={2019}
                            schoolName="Camellia Institute Of Technology, Kolkata"
                            schoolDescription="B.Tech in Computer Science"
                        />

                        <Education 
                            startYear={2011}
                            endYear={2013}
                            schoolName="Holy Mission, Patna"
                            schoolDescription="High School, CBSE"
                        />

                        <Education 
                            startYear={1999}
                            endYear={2011}
                            schoolName="Don Bosco Academy, Patna"
                            schoolDescription="Secondary School, ICSE"
                        />

                        <hr style={{borderTop: '3px solid #0fd850'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="Java"
                            progress={80} buffer={20}/>
                        
                        <Skills 
                            skill="Android Development"
                            progress={65} buffer={35}/>

                        <Skills 
                            skill="JavaScript"
                            progress={90} buffer={10}/>

                        <Skills 
                            skill="NodeJS"
                            progress={75} buffer={25}/>

                        <Skills 
                            skill="ReactJS"
                            progress={70} buffer={30}/>
                            
                        <Skills 
                            skill="React Native"
                            progress={60} buffer={40}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;