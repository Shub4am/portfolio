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
                {/*Project 1 */},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '175px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project#1
                    </CardTitle>
                    <CardText>
                        Portfolio Website built using React.js.
                    </CardText>
                    <CardActions border>
                    <Button onClick="location.href='https://github.com/Shub4am/Portfolio-Website';">Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 2 */},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '175px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project#2
                    </CardTitle>
                    <CardText>
                        StopWatch built using React.js.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
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
                {/*Project 1*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '175px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}>Popular Movies App
                    </CardTitle>
                    <CardText>
                    Android app that uses The MovieDB API to show the most popular, highest rated and user's favorites movies details.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                {/*Project 2*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '175px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}>Blocks
                    </CardTitle>
                    <CardText>
                    Android game that stacks 3-d cubes.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                {/*Project 1 */},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '175px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project#1
                    </CardTitle>
                    <CardText>
                        Portfolio Website built using javascript framework React.js.
                    </CardText>
                    <CardActions border>
                    <Button onClick="location.href='https://github.com/Shub4am/Portfolio-Website';">Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                {/*Project 2 */},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '175px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project#2
                    </CardTitle>
                    <CardText>
                        StopWatch built using JavaScript framework React.js.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
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
                {/*Project 1*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '175px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}>Popular Movies App
                    </CardTitle>
                    <CardText>
                    Android app that uses The MovieDB API to show the most popular, highest rated and user's favorites movies details.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
                {/*Project 2*/},    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '175px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}>Blocks
                    </CardTitle>
                    <CardText>
                    Android game that stacks 3-d cubes.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
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