import React, { Component } from 'react';
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

	_handleClick = () => {
		this.props.delete_person(this.state);
	}

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
						{/*<td>
							<button
								className="btn btn-danger btn-xs" 
								onClick={this._handleClick}>Delete
							</button>
						</td>*/}
					</tr>
				);
			})
		}

		if (this.props.data instanceof Array){
			return (
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
		);
		}

		else{
			return (
				<table/>
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
