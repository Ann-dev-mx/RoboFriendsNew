import React,{ Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import Search from './Search';
import './App.css';

class App extends Component  {
	constructor () {
		super()
		this.state = {
			robots :[],
			searchfiled :''

		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
		
			.then(users =>this.setState({ robots: users }));
				

			
		
	}
	onSearchChange = (event) => {
		this.setState({searchfiled: event.target.value })
		
		
		
	}
	render() {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfiled.toLowerCase());
		})
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
		return (
		<div className ='tc'>
		<h1 className='f1'>Robo Friends</h1>
		<Search searchChange = {this.onSearchChange} />
		<Scroll>
		<CardList robots = {filteredRobots} />
		</Scroll>

		</div>
		);
	}

	}
	
} 
export default App;