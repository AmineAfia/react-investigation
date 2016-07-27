import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/index';
import Git from './git';

class GitList extends Component {    

    showUser() {
         return (
               <div className="item-card mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Git Profile</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                            <div className="mdl-textfield mdl-js-textfield">
                                <h2>{this.props.git.name}</h2>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield">
                                <img src={this.props.git.avatar_url} />
                            </div>
                    </div>
                </div>);
    }
    
    render() {
        return (
            <div className="mdl-grid items">
            <Git />
            <div className="mdl-cell mdl-cell--6-col">
                {this.showUser()}
            </div>
            </div>
        );
    }
    
}
function mapStateToProps (state) {
    return { git: state.users.git };
}

export default connect(mapStateToProps, { fetchUser })(GitList);