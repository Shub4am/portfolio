import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/*PROJECT TAB 1 REACT JS*/}    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede'}}>
                    <CardTitle style={{color: '#ffffff', height: '250px', background:'url(https://user-images.githubusercontent.com/43783336/79716239-b98e5c80-82f3-11ea-8058-1c49c22f5e17.PNG) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                        <b><i>Portfolio Website</i></b>
                    </CardText>
                    <CardActions border >
                    <h4 align="center"><a href="https://github.com/Shub4am/Portfolio" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>    
                </Card>
                

                {/*react js */}    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede',marginTop:'15px'}}>
                    <CardTitle style={{color: '#ffffff', height: '250px', background:'url(https://user-images.githubusercontent.com/43783336/79716653-f9097880-82f4-11ea-980c-b4c8ac5ac82c.PNG) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                        <b><i>Calculator based on Mathjs</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/calculator" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b> </a>
                    <a href="https://shub4am.github.io/calculator/" rel="noopener noreferrer" target="_blank"><b style={{color:'black', padding:'25px'}}><i className="fa fa-laptop fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                </Card>

                {/*react js */}   
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede',marginTop:'15px'}}>
                    <CardTitle style={{color: '#ffffff', height: '250px', background:'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                        <b><i>StopWatch</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/ReactNative-StopWatch" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                </Card>
                
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/*Project TAB 2 ANDROID PROJECTS*/}    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede'}}>
                    <CardTitle style={{color: '#000', height: '250px', background:'url(https://user-images.githubusercontent.com/43783336/79720069-776a1880-82fd-11ea-9d77-ff5a7b5dc3e9.PNG) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                    <b><i>Popular Movies App</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/Popular-Movies" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                    
                </Card>
                
                {/*ANDROID PROJ*/}    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede',marginTop:'15px'}}>
                    <CardTitle style={{color: '#000', height: '250px', background:'url(https://banner2.kisspng.com/20180326/pjw/kisspng-android-studio-integrated-development-environment-studio-5ab9a802275d15.7223949015221166101612.jpg) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                    <b><i>Blocks: 3D cube stacking game</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/Blocks" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                    
                </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    
                {/*Project TAB 3 JAVASCRIPT PROJECTS*/}   
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede'}}>
                    <CardTitle style={{color: '#ff0000', height: '250px', background:'url(https://user-images.githubusercontent.com/43783336/79716239-b98e5c80-82f3-11ea-8058-1c49c22f5e17.PNG) center / cover'}}/>
                    <CardText style={{color:'#00000', textAlign:"center"}}>
                        <b><i>Portfolio Website</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/Portfolio" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                </Card>

                {/*JAVASCRIPT PROJECTS*/} 
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',border:'8px',backgroundColor:'#dedede',marginTop:'15px'}}>
                    <CardTitle style={{color: '#ff0000', height: '250px', background:'url(https://i.ibb.co/X7sJ7cH/js.jpg) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                        <b><i>Other JS projects</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/JSProject" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                    
                </Card>
                </div>
            )
        }else if(this.state.activeTab ===3){
            return(
                <div className="projects-grid">
                {/*Project TAB 4 JAVA PROJECTS*/}    
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede'}}>
                    <CardTitle style={{color: '#000000', height: '250px', background:'url(https://user-images.githubusercontent.com/43783336/79720069-776a1880-82fd-11ea-9d77-ff5a7b5dc3e9.PNG) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                    <b><i>Popular Movies App</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/Popular-Movies" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
                    
                </Card>
                {/*Project TAB 4 JAVA PROJECTS*/}   
                <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius:'8px',backgroundColor:'#dedede',marginTop:'15px'}}>
                    <CardTitle style={{color: '#000000',fontWeight: 'bolder' , height: '250px', background:'url(https://seofiles.s3.amazonaws.com/seo/media/uploads/2017/01/24/unit-41-java.png) center / cover'}}/>
                    <CardText style={{color:'#000000', textAlign:"center"}}>
                    <b><i>Others Java Projects</i></b>
                    </CardText>
                    <CardActions border>
                    <h4 align="center"><a href="https://github.com/Shub4am/JavaProject" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}><i className="fa fa-github fa-lg" aria-hidden="true"/></b></a></h4>
                    </CardActions>
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