import React from 'react';
import Dashboard from '../pages/Dashboard/index'
import Brasil from '../pages/Brasil/index'
import { Switch, Route} from 'react-router-dom';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/brasil' component={Brasil} />
    </Switch>
)

export default Routes;