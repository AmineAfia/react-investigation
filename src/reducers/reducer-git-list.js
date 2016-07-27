import { GIT_USER } from '../actions/index';

const INITIAL_STATE = {git: [] };

export default function( state = INITIAL_STATE, action) {
    switch (action.type) {
        case GIT_USER:
            return { ...state, git: action.payload.data };
        default:
            return state;
        }
    }
