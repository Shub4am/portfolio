import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} 
        to="">Home</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation className="navbar">
                <Link style={{textDecoration: 'none', fontSize: '18px',color: 'White', marginBottom: '30px'}} to="">Home</Link>
                <Link style={{textDecoration: 'none', fontSize: '18px',color: 'White', marginBottom: '30px'}} to="/resume">Resume</Link>
                <Link style={{textDecoration: 'none', fontSize: '18px',color: 'White', marginBottom: '30px'}} to="/aboutme">About Me</Link>
                <Link style={{textDecoration: 'none', fontSize: '18px',color: 'White', marginBottom: '30px'}} to="/projects">Projects</Link>
                <Link style={{textDecoration: 'none', fontSize: '18px',color: 'White', marginBottom: '30px'}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
