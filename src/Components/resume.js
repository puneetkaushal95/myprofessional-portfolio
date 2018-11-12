import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import image from './passport.jpg';

import Skills from './skillslevel';

class Resume extends Component{
	render() {
		return(
				<div>
					<Grid>
						<Cell className="resume-left-col" col={4}>
						<div style={{textAlign: 'center'}}>
						<img 
							src={image}
										alt="me"
							style={{height:'200px',paddingTop:'2px'}}
						/>
						</div>
							<h2 style={{paddingTop:'1em', fontSize:'57px'}}><b>Puneet Kaushal</b></h2>
							<hr style={{borderTop:'3px solid #833fb2', width:'100%'}}/>

							<h3 style={{color:'grey'}}>Front-end Web Developer</h3>

							
							<p style={{fontSize:'17px', fontFamily:'Georgia'}}>A Mobile Application and Development student seeking 15-30 weeks paid-internship as Professional Web Developer to utilize my skills and knowledge of Web development and like to optimize websites for the visitors to comfort.</p>
							<hr style={{borderTop:'3px solid #833fb2', width:'100%'}}/>

							<h3 style={{color:'grey'}}>Address</h3>
							
							<p style={{fontSize:'17px'}}>9 Saddlecreek Court, Brampton, ON, Canada</p>
							<hr style={{borderTop:'3px solid #833fb2', width:'100%'}}/>
							
							<h3 style={{color:'grey'}}>Mobile</h3>
							
							<p style={{fontSize:'17px'}}>(289) 981-7137</p>
							<hr style={{borderTop:'3px solid #833fb2', width:'100%'}}/>
							
							<h3 style={{color:'grey'}}>Email</h3>
							
							<p style={{fontSize:'17px'}}>puneet.kaushal95@gmail.com</p>
							<hr style={{borderTop:'3px solid #833fb2', width:'100%'}}/>
							

						</Cell>
						
						<Cell className="resume-right-col" col={8}>
							<h2>Education</h2>


							<Education
								startYear={2018}
								endYear={'Present'}
								schoolName="Cambrian College of Applied Arts and Technology"
								studyDescription="Mobile Application and Development"
							 />

							 <Education
								startYear={2014}
								endYear={2017}
								schoolName="Mata Gujri College"
								studyDescription="B.Sc (Computer, Statistics and Mathematics)"
							 />

							 <Education
								startYear={2012}
								endYear={2014}
								schoolName="Gobindgarh Public School"
								studyDescription="Senior-Secondary Education"
							 /> 
							 <hr style={{borderTop: '3px solid #e22947'}} />

							 	<h2>Strengths</h2>
										<list>
											<ul>
												<li>Comfortable with HTML, CSS, Bootstrap, JavaScript.</li>
												<li>Knowledge of PHP.</li>
												<li>Basic knowledge of version control system Git.</li>
												<li>Strong problem solving and analytical skills.</li>
												<li>Self-motivated and maintains a high level of energy, quick learner.</li>
												<li>Strong verbal, written communications and interpersonal skills.</li>
												<li>Multi-tasking capabilities, able to work in a target driven, busy environment.</li>										
												<li>Hardworking with excellent attendance and punctuality records.</li>


												</ul>
										</list>
							<hr style={{borderTop: '3px solid #e22947'}} />

							 	<h2>Skills</h2>

							 	<Skills
							 		skill="HTML|CSS"
							 		progress={80}
							 	/>

							 	<Skills
							 		skill="JavaScript"
							 		progress={50}
							 	/>



							 	<Skills
							 		skill="ReactJS"
							 		progress={50}
							 	/>

						</Cell>
					</Grid>
				</div>

			)
	}
}

export default Resume;