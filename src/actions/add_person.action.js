import Axios from "axios";
import { CHANGE, GRAB, DELETE, SAMPLE_API } from "./constants";

export function add_person(data) {
	return {
		type: CHANGE,
		payload: data
	};
}

export function grab_data(obj) {
	const request = Axios.post(SAMPLE_API, obj);
	return {
		type: GRAB,
		payload: request
	};
}

export function delete_person(obj) {
	const request = Axios.delete(SAMPLE_API, obj);
	return {
		type: DELETE,
		payload: request
	};
}
