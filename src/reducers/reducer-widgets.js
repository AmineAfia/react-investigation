import { FETCH_WIDGETS, DELETE_WIDGET } from '../actions/index';

const INITIAL_STATE = {widgets: [] };

export default function( state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_WIDGETS:
            return { ...state, widgets: action.payload.data };
        case DELETE_WIDGET:
            console.log('widget erased: '+ action.payload.data);
            break;
        default:
            return state;
        }
    }
