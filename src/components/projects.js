import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*PROJECT TAB 1 REACT JS*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffffff', height: '250px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project
                    </CardTitle>
                    <CardText style={{color:'#000000'}}>
                        Portfolio Website built using ReactJS
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/Portfolio" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*react js */},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ffffff', height: '250px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project
                    </CardTitle>
                    <CardText style={{color:'#000000'}}>
                        StopWatch built using React.js.
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/ReactNative-StopWatch" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/*Project TAB 2 ANDROID PROJECTS*/}},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '250px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}>Popular Movies App
                    </CardTitle>
                    <CardText>
                    Android app that uses The MovieDB API to show the most popular, highest rated and user's favorites movies details.
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/Popular-Movies" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                {/*ANDROID PROJ*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '250px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}>Blocks
                    </CardTitle>
                    <CardText>
                    Android game that stacks 3-d cubes.
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/Blocks" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                {/*Project TAB 3 JAVASCRIPT PROJECTS*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ff0000', height: '250px', background:'url(https://i.ibb.co/X7sJ7cH/js.jpg) center / cover'}}>JS Project#1
                    </CardTitle>
                    <CardText>
                        Portfolio Website built using JavaScript and also React.js.
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/Portfolio//tree/gh-pages" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*JAVASCRIPT PROJECTS*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#ff0000', height: '250px', background:'url(https://i.ibb.co/X7sJ7cH/js.jpg) center / cover'}}>JS Projects
                    </CardTitle>
                    <CardText>
                        Other short projects done in JS
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/JSProject" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab ===3){
            return(
                <div className="projects-grid">
                {/*Project TAB 4 JAVA PROJECTS*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000000', height: '250px', background:'url(https://seofiles.s3.amazonaws.com/seo/media/uploads/2017/01/24/unit-41-java.png) center / cover'}}>Popular Movies
                    </CardTitle>
                    <CardText>
                    Android app that uses The MovieDB API to show the most popular, highest rated and user's favorites movies details.
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/Popular-Movies" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                {/*Project TAB 4 JAVA PROJECTS*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000000',fontWeight: 'bolder' , height: '250px', background:'url(https://seofiles.s3.amazonaws.com/seo/media/uploads/2017/01/24/unit-41-java.png) center / cover'}}>Java Projects
                    </CardTitle>
                    <CardText>
                    Others Java Projects.
                    </CardText>
                    <CardActions border>
                    <h4><a href="https://github.com/Shub4am/JavaProject" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Github</b></a></h4>
                    </CardActions>
                    <CardMenu style={{color: '#000'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab}onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
             <Tab>React</Tab>
             <Tab>Android</Tab>
             <Tab>JavaScript</Tab>
             <Tab>Java</Tab>
             </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
               </Grid>
            </div>
        )
    }
}
export default Projects;