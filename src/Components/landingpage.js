import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from './1.jpg';
class Landing extends Component{
	render() {
		return(
				<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
				<Cell col={12}>
					<img className="avatar-img"
					src={image}
						alt="me"					
					/>
					<div className="banner-text">
					<h1>Front-end Web Developer</h1>

					<hr/>
					<p>
						HTML/CSS | JavaScript | React
					</p>

					<div className="social-links">
						{/*Linkedin*/}
						<a href="https://www.linkedin.com/in/puneet-kaushal-88a640171/" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-linkedin-square" aria-hidden="true" />
						</a>

						{/*GitHub*/}
						<a href="https://github.com/puneetkaushal95" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-github-square" aria-hidden="true" />
						</a>

					{/*FreeCodeCamp*/}
						<a href="https://www.freecodecamp.org/kaushal_puneet95" rel="noopener noreferrer" target="_blank">
						<i className="fa fa-free-code-camp" aria-hidden="true" />
						</a>
					</div>
					
					</div>
				</Cell>
				</Grid>
				</div>

			)
	}
}

export default Landing;