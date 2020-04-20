import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contacts extends Component {
    render() {
        return(
            <div className="contact-body">
                
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        I'd love to hear from you.</h2>
                        
                        <h3 style={{color:'#54545c'}}>If you have any queries, you can always reach out to me by<a href="android-app://com.google.android.gm/" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}> email</b></a>, or connect with me on LinkedIn</h3>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
								<List>
                                    <ListItem>
										<ListItemContent style={{fontSize: '35px', fontFamily: 'Arial'}}>
                                        <a href="https://www.linkedin.com/in/Shub4am/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin" aria-hidden="true"/><b style={{color:'black'}}>LinkedIn</b></a>
											</ListItemContent>
									</ListItem>
									<ListItem>
										<ListItemContent style={{fontSize:'28px', fontFamily: 'Anton'}}>
											<i className="fa fa-envelope" aria-hidden="true"/>
											shubham92101@gmail.com</ListItemContent>
									</ListItem>
								</List>
                        </div>
                    </Cell>
                    <div class="footer">
                        <p> © Shubham Prakash 2020</p>
                    </div>
                </Grid>
                
            </div>
        )
    }
}
export default Contacts;