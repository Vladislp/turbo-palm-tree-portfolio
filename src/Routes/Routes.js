import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound404 from '../components/404';
import NotFound500 from '../components/500';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/notfound404" component={NotFound404} />
        <Route path="/notfound500" component={NotFound500} />
      </Switch>
    </Router>
  );
};

export default App;
