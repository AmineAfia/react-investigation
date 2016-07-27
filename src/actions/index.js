import axios from 'axios';

export const GIT_USER= 'GIT_USER';
export const FETCH_WIDGETS= 'FETCH_WIDGETS';
export const DELETE_WIDGET= 'DELETE_WIDGET';
export const SAVE_WIDGET= "SAVE_WIDGET";

const CLIENT_ID = "8c0f4053047df9073b59";
const SECRET_ID= "02a0d0d3af357a39264645d0fdf3d69b3d9211d3";
const JSON_URL = "http://localhost:3000/widgets/";
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };


export function fetchUser(username) {
    console.log(username);
    const request = axios.get(`https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${SECRET_ID}`);
    
    return {
        type: GIT_USER,
        payload: request
    };
}

export function fetchWidgets() {
    const request = axios.get(JSON_URL);
    
    return {
        type: FETCH_WIDGETS,
        payload: request
    };
}

export function deleteWidget(widget) {
    console.log("Delete Action: " + JSON_URL + widget)
    const request = axios.delete(JSON_URL + widget.id);
    
    return {
      type: DELETE_WIDGET,
      payload: request
    };
}

export function saveWidget(props) {
    const request = axios.post(JSON_URL, props, HEADER);
    
    return {
      type: SAVE_WIDGET,
      payload: request
    };
}
