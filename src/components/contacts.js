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
                        <h3 style={{color:'#54545c'}}>You can always reach out by <a href="android-app://com.google.android.gm/" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}> Email</b></a>. Or connect with me on <a href="https://www.instagram.com/shub4am/" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Instagram</b></a> or on <a href="https://www.linkedin.com/in/Shubham92101/" rel="noopener noreferrer" target="_blank"><b style={{color:'black'}}>Linkedin</b></a>.</h3>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
								<List>
									<ListItem>
										<ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
											<i className="fa fa-phone-square" aria-hidden="true"/>+919905972742 
                                            (Whatsapp only)</ListItemContent>
									</ListItem>
                                    <ListItem>
										<ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
											<i className="fa fa-phone-square" aria-hidden="true"/>
											+917*********</ListItemContent>
									</ListItem>
									<ListItem>
										<ListItemContent style={{fontSize:'22px', fontFamily: 'Anton'}}>
											<i className="fa fa-envelope" aria-hidden="true"/>
											shubham92101@gmail.com</ListItemContent>
									</ListItem>
								</List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contacts;