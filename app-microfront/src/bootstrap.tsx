import React from 'react';
import ReactDOM from 'react-dom';
import Microfront from './microfront.component';
import { bootstrap } from './auth.service';

bootstrap.start();

ReactDOM.render(<Microfront />, document.body);
