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
			<div  className="projects-grid">
		{/*Project1*/}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: 'black', height:'200px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover '}}>HTML/CSS Project #1</CardTitle>
				<CardText>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>					
				</CardActions>
				<CardMenu style={{color: 'rgb(255,0,0)'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
		{/*Project2*/}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: 'black', height:'200px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover '}}>HTML/CSS Project #2</CardTitle>
				<CardText>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>					
				</CardActions>
				<CardMenu style={{color: 'rgb(255,0,0)'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			</div>
			)
	} else if(this.state.activeTab === 1){
		return(

				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: 'black', height:'200px', background: 'url(https://www.hindilearn.in/images1/javascript.png) center / cover '}}>React Project #1</CardTitle>
				<CardText>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>					
				</CardActions>
				<CardMenu style={{color: 'rgb(255,0,0)'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

			)
	} else if (this.state.activeTab ===2) {
		return(
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'200px', background: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover '}}>React Project #1</CardTitle>
				<CardText>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</CardText>
				<CardActions border>
					<Button colored>GitHub</Button>
					<Button colored>CodePen</Button>
					<Button colored>LiveDemo</Button>					
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
				<Tab>HTML/CSS</Tab>
				<Tab>JavaScript</Tab>
				<Tab>ReactJS</Tab>
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