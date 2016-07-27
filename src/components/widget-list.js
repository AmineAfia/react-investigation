import React, {Component} from 'react';
import Money from 'react-money-component';
import { connect } from 'react-redux';

import { fetchWidgets, deleteWidget } from '../actions/index';
class WidgetList extends Component {
 
    
    componentWillMount() {
        this.props.fetchWidgets();
    }
    
    // componentWillMount() {
    //     const deletedwidget = 2;
    //     this.props.deleteWidget(deletedwidget);
    //     console.log("cmw:" + this.props.widgets);
    // }
    
    renderWidgets() {
        return this.props.widgets.map((widget) => {
           return (
            <div className="widget-card mdl-card mdl-shadow--2dp" key={widget.id}>

                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{widget.name}</h2>
                    </div>

                    <div className="mdl-card__supporting-text">
                        <Money cents={widget.price} currency="EUR" />
                    </div>
                    
                    <div className="mdl-card__menu">
                        <button 
                        className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
                        onClick={this.deletingWidget.bind(null, widget.id)}>
                        <i className="material-icons">close</i>
                        </button>
                    </div>
            </div>
           );
        });
    }

    deletingWidget(widget) {
        console.log('delete event from widget-list');
        this.props.deleteWidget(widget);
    }
    
    render() {
        return (
            <div>
              {this.renderWidgets()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { widgets: state.widgets.widgets };
}

export default connect(mapStateToProps, { fetchWidgets, deleteWidget})(WidgetList);
