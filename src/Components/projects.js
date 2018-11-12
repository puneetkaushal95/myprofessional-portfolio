import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {activeTab: 0};
	} 

toggleCategories(){
	
	 
	if(this.state.activeTab === 0){
		return(

				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: 'black', height:'235px', background: 'url(https://www.hindilearn.in/images1/javascript.png) center / cover '}}>Professional Portfolio using ReactJS</CardTitle>
				<CardText>
				An electronic portfolio (also known as an eportfolio, e-portfolio, digital portfolio, or online portfolio) is a collection of electronic evidence assembled and managed by a user, usually on the Web. Such electronic evidence may include input text, electronic files, images, multimedia, blog entries, and hyperlinks.
				</CardText>
				<CardActions border>
					<Button><a href="https://github.com/puneetkaushal95/myprofessional-portfolio" target="_blank">GitHub</a></Button>
				</CardActions>
				<CardMenu style={{color: 'rgb(255,0,0)'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

			)
	}
}
	render() {
		return(
				<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
				
				<Tab>JavaScript</Tab>
				
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