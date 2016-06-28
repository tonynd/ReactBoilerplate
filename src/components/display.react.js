import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
//import Axios from 'axios';
import { connect } from "react-redux";
import Contact from './contact.react'
import * as actions from "../actions/add_person.action";

//const store = [{userName: Tony, userAddress: Klondike, userQuote: Food}];
export default class Display extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id:""
		}
	}

	static contextTypes = {
		router: PropTypes.object
	};

	_handleRemoveClick = () => {
		this.props.delete_person(event.target.id);
		this.props.grab_data2();
		//this.context.router.push("/display");
	};

	_handleBackClick = () => {
		this.context.router.push("/");
	};

	render() {
		if (this.props.data instanceof Array){
				var v = this.props.data.map((entry, index)=>{
				return(
					<tr key={index}>
						<td>
							{entry.userName}
						</td>
						<td>
							{entry.userAddress}
						</td>
						<td>
							"{entry.userQuote}"
						</td>
						<td>
							<button
								type="button"
								className="btn btn-danger btn-xs" 
								id={entry._id}
								onClick={this._handleRemoveClick}>Remove
							</button>
						</td>
					</tr>
				);
			})
		}

		if (this.props.data instanceof Array){
			return (
				<div>
					<table className="table table-striped table-bordered">
						<thead>
						<tr>
							<th>
								Name
							</th>
							<th>
								Address
							</th>
							<th>
								Favorite Quote
							</th>
						</tr>
						</thead>
						<tbody>
							{v}
						</tbody>
					</table>
					<button className="btn btn-primary btn-xs" onClick={this._handleBackClick}>Back</button>
				</div>
		);
		}

		else{
			return (
				<div>
					<h4>No data.</h4>
					<button className="btn btn-primary btn-xs" onClick={this._handleBackClick}>Back</button>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		data: state.list.data.response
	};
}

export default connect(mapStateToProps, actions)(Display);
