import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import WeatherApp from './WeatherApp';

ReactDOM.render(<WeatherApp />, document.getElementById('root'));

serviceWorker.unregister();

module.hot.accept();