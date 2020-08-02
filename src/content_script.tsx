import React from 'react';
import ReactDOM from 'react-dom';

const root = document.createElement('div');
(root as any).style = "position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 1000000";
document.body.appendChild(root);
ReactDOM.render(<h1>React is here!</h1>, root);

