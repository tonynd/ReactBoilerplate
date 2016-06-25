import React, { Component } from 'react';
import Axios from 'axios';
import Child from './child.react';
import Display from './display.react';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			personList: ""
		};
	}

	/*componentDidMount() {
		Axios.get("/api/v0/sample")
			.then((obj) => {
				this.setState({
					personList: obj.data.response
				});
			});
	}*/

	_callback = (obj) => {
		this.setState({
			personList: obj
		});
	};

	render() {
		return (
			<div className="app">
				{this.state.response}
				<Child callback = {this._callback}/>
				<Display personList = {this.state.personList}/>
			</div>
		);
	}
}
