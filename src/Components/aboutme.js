import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from './dp.jpg';
import { FaReact } from 'react-icons/fa';

class About extends Component {
	render() {
		return(
				<div className="about-body">
					<h2>----------ABOUT <text style={{color:'blue'}}>ME</text>----------</h2>
					
					
						<h6>ALLOW ME TO INTRODUCE MYSELF</h6>

							<Grid className="about-grid">
								<Cell col={6}>
									<img 
										src={image}
										alt="me"								
									/>
								</Cell>

								<Cell col={5}>
									<div className="about-info">
										<p>Recently, I came from India for study purpose to Canada. I am Puneet Kaushal aged 22 years old and I am currently enrolled into Mobile Application and Development in Cambrian College in North York, ON, Canada. I am a bachelorette in Computer, Statistics and Mathematics. I love to do Web Development specifically in ReactJS and want to pursue my career as a Web Developer. I also have foundational knowledge of Swift, Android, Java and Object-oriented practices.</p>
									</div>
								</Cell>
							</Grid>
						<div className="about-icons">
							<Grid>
								<Cell col={6}>
									<h3><b>THINGS I LOVE</b></h3>
									<i className="fa fa-facebook-official" aria-hidden="true"></i>
									<i className="fa fa-twitter" aria-hidden="true"></i>
									<i className="fa fa-instagram" aria-hidden="true"></i>
									<i className="fa fa-snapchat" aria-hidden="true"></i>
						
								</Cell>

								<Cell col={4} className="about-icons2">
									<h4>LOOK WHAT I CAN DO</h4>
									<i className="fa fa-plus" aria-hidden="true">Web Development</i>
									<i className="fa fa-plus" aria-hidden="true">HTML/CSS</i>
									<i className="fa fa-plus" aria-hidden="true">JavaScript</i>
									<i className="fa fa-plus" aria-hidden="true">ReactJS</i>
								</Cell>
							</Grid>
						</div>	
				</div>
				
				
		)
	}
}

export default About;