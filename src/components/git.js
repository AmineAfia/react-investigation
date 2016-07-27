import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUser } from '../actions/index';

class Git extends Component {
    constructor(props) {
        super(props);
        
        this.state = {username: ''}
    }
    
    inputHandler(username) {
        this.setState({username});
    }
    
    onCancel() {
        this.setState({ username: ''});
        this.props.fetchUser(this.state.username);
    }
    
    onSubmit() {
                this.props.fetchUser(this.state.username);
                this.setState({ username: ''});
    }
    
    render() {
        return (
            <div className="mdl-cell mdl-cell--6-col">
               <div className="item-card mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Git Search</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                            <div className="mdl-textfield mdl-js-textfield">
                                <input
                                placeholder="Enter a name"
                                className="mdl-textfield__input" type="text"
                                value={this.state.username}
                                onChange={ event => this.inputHandler( event.target.value ) } />
                            </div>
                    </div>
                    
                    <div className="mdl-card__actions">
                        <button type="submit"
                        className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick={ this.onCancel.bind(this)}>Cancel</button>
                        <button type="submit"
                        className="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect"
                        onClick={ this.onSubmit.bind(this)}>Submit</button>
                    </div>
                </div>
             </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(Git);