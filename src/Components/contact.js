import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
	render() {
		return(
				<div className="contact-body">
					<Grid className="contact-grid">
						<Cell col={6}>
							<h2>Puneet Kaushal</h2>
							<img
								src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
								alt="avatar"
								style={{height: '250px'}}
							/>
							<p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Recently, I came from India for study purpose to Canada. I am Puneet Kaushal aged 22 years old and I am currently enrolled into Mobile Application and Development in Cambrian College in North York, ON, Canada. I am a bachelorette in Computer, Statistics and Mathematics. I love to do Web Development specifically in ReactJS and want to pursue my career as a Web Developer. I also have foundational knowledge of Swift, Android, Java and Object-oriented practices.</p>
						</Cell>

						<Cell col={6}>
							<h2>Contact Me</h2>
							<hr/>

								<div className="contact-list">
									<List>
	  									<ListItem>
	    									<ListItemContent style= {{fontSize:'25px', fontFamily: 'Anton'}}><i className="fa fa-phone-square" aria-hidden="true"/>(289)-981-7137</ListItemContent>
	 									</ListItem>
	  									
	  									<ListItem>
	    									<ListItemContent style= {{fontSize:'25px', fontFamily: 'Anton'}}><i className="fa fa-envelope" aria-hidden="true"/>puneet.kaushal95@gmail.com</ListItemContent>
	 									</ListItem>

	 									<ListItem>
	    									<ListItemContent style= {{fontSize:'25px', fontFamily: 'Anton'}}><i className="fa fa-github" aria-hidden="true"/>puneetkaushal95</ListItemContent>
	 									</ListItem>

	 									<ListItem>
	    									<ListItemContent style= {{fontSize:'25px', fontFamily: 'Anton'}}><i className="fa fa-linkedin" aria-hidden="true"/>puneet-kaushal-88a640171/</ListItemContent>
	 									</ListItem>
	  									
									</List>
								</div>
						</Cell>
					</Grid>
				</div>

			)
	}
}

export default Contact;