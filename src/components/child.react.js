import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/add_person.action";
//import Axios from 'axios';

export default class Child extends Component {

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

	/*_handleClick = () => {
		let obj = this.state;
		Axios.post(sample, obj)
			.then((axiosReponse) => {
				this.props.callback(axiosReponse.data.response);
				this.setState({userName:"", userAddress:"", userQuote:""});
		})
	};*/

	_handleClick = () => {
		this.props.grab_data(this.state);
		this.state.userName = "";
		this.state.userAddress = "";
		this.state.userQuote = "";
	}

	render() {
		return (
			<div className="child">
				<h1>Redux</h1><br/>
				<input 
					type="text" 
					name="userName" 
					placeholder="  Name" 
					value={this.state.userName} 
					onChange={this._handleChange}
				/> 
				<br/>
				<br/>
				<input 
					type="text" 
					name="userAddress" 
					placeholder="  Address" 
					value={this.state.userAddress} 
					onChange={this._handleChange}
					/> 
					<br/>
					<br/>

				<textarea
					type="text"
					className="form-control"
					rows="6"
					name="userQuote" 
					placeholder="Favorite Quote" 
					value={this.state.userQuote}
					onChange={this._handleChange}
					/> 
					<br/>
					<br/>
					<br/>
			
				<button 
					className="btn btn-primary btn-sm" 
					onClick={this._handleClick}>Submit
				</button>
			</div>
		);  
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data.response
	};
}

export default connect(mapStateToProps, actions)(Child);
