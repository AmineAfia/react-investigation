import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';


import { saveWidget, fetchWidgets } from '../actions/index';

class WidgetDetails extends Component {
    
    onCancel() {
        this.props.fields.name.value= '';
        this.props.fields.price.value= null;
    }
    
    onSave(props) {
        this.props.saveWidget(props)
        .then(this.props.fetchWidgets());
        console.log(props);
    }
     
    render() {
        const { fields: {name, price}, handleSubmit, error, resetForm, submitting } = this.props;
        return (
            <div className="mdl-cell mdl-cell--6-col">
            <div className="item-card mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Editing</h2>
                    <h2 className="mdl-card__title-text">Create New Widget</h2>
                </div>
                <form onSubmit={handleSubmit(this.onSave.bind(this))}>
                    <div className="mdl-card__supporting-text">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" >
                                <input
                                {...name}
                                className="mdl-textfield__input"
                                id="widget"
                                type="text" />
                                <label className="mdl-textfield__label" for="widget">Widget Name</label>
                                <span className="mdl-textfield__error">
                                    {name.touched ? name.error : ''}
                                </span>
                            </div>

                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input
                                className="mdl-textfield__input" type="text"
                                id="price" {...price}/>
                                <label className="mdl-textfield__label" for="price">Widget price</label>
                                <span className="mdl-textfield__error">
                                    {price.touched ? price.error : ''}
                                </span>
                            </div>
                    </div>
                    <div className="mdl-card__actions">

                        <button type="button" disabled={submitting} 
                        className="mdl-button mdl-js-button mdl-js-ripple-effect"
                        onClick={resetForm}>Cancel</button>
                        
                        <button type="submit"
                        className="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect"
                        >Save </button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    
    if(!values.name) {
        errors.name = 'Enter a name for your widget';
    }
    
    if(!values.price) {
        errors.price = 'Enter a price';
    }
    
    return errors;
}

export default reduxForm({
    form: 'PostWidget',
    fields: ['name', 'price'],
    validate
}, null, {saveWidget, fetchWidgets})(WidgetDetails);
