import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex',fontStyle: 'italic',fontSize: '16px'}}>
                    {this.props.skill}<ProgressBar style={{margin: 'auto', width:'75%', fontStyle: 'italic'}}
                    progress={this.props.progress} /> </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;