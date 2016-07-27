import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
            <div className="mdl-cell mdl-cell--12-col">
               <div className="item-card mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">About</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                            <div className="system-font">
                                <label> This application is meant to investigate the features of React-Redux libraries.</label>
                            </div>
                    </div>
                </div>
             </div>
             
            <div className="mdl-cell mdl-cell--12-col">
               <div className="item-card mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">Contact</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                            <div className="mdl-textfield mdl-js-textfield">
                                <label>Name</label>
                                <input
                                placeholder="Enter your name"
                                className="mdl-textfield__input" type="text" />
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <label>E-Mail</label>
                                <input
                                placeholder="Enter your mail address"
                                className="mdl-textfield__input" type="text" />
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <label>Message</label>
                                <textarea
                                placeholder="write your message :)"
                                className="mdl-textfield__input" type="text" />
                            </div>
                    </div>
                    
                    <div className="mdl-card__actions">
                        <button type="submit"
                        className="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
                        <button type="submit"
                        className="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Submit</button>
                    </div>
                </div>
             </div>
             </div>
        );
    }
}

export default About;