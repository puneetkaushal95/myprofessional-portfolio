import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
	render() {
		return(
				<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
				<Cell col={12}>
					<img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
					alt="avatar"
					className="avatar-img"
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