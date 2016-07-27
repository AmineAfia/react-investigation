import React, {Component} from 'react';

import WidgetList from './widget-list';
import WidgetDetails from './widget-details';

class Widgets extends Component {
    render() {
        return (            
              <div className="mdl-grid items">
                    <div className="mdl-cell mdl-cell--6-col">
                        <WidgetList/>
                    </div>
                        <WidgetDetails/>
              </div>
        );
    }
}

export default Widgets;