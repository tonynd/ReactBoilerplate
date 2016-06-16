import React, { Component } from 'react';
import Child from './child.react';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userName:"",
			userAddress:"",
			userQuote:""
		};
	}

	_handleChange = (event) => {
		let obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj)
	};

	_handleClick = () => {
		let obj = this.state;
		console.log(obj);
	};

	render() {
		return (
			<div className="app">
				<h1>React Training</h1>
				<input type="text" name="userName" placeholder="Name" onChange = 
					{this._handleChange}/> <br/><br/>
				<input type="text" name="userAddress" placeholder="Address" onChange = 
					{this._handleChange}/> <br/><br/>
				<input type="text" name="userQuote" placeholder="Favorite Quote" 
					onChange = {this._handleChange}/> <br/><br/><br/>

				<button onClick={this._handleClick}>Submit</button>
			</div>
		);  
	}
}
