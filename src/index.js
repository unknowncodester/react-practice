import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './App8';
import App9 from './App9';
import App10 from './App10';
import App11 from './App11';

ReactDOM.render(
  <App />,
  document.getElementById('helloworld')
);

ReactDOM.render(
    <App2 />,
    document.getElementById('multipleelement')
);

ReactDOM.render(
    <App3 />,
    document.getElementById('withoutjsx')
);

ReactDOM.render(
    <App4 msg="This is a message passed in via a prop"/>,
    document.getElementById('usingprops')
);

ReactDOM.render(
    <App5/>,
    document.getElementById('proptypeanddefaultprop')
);

ReactDOM.render(
    <App6/>,
    document.getElementById('usingstate')
);

ReactDOM.render(
    <App7/>,
    document.getElementById('childcomponents')
);

ReactDOM.render(
    <App8/>,
    document.getElementById('nesteddatafromchildren')
);

ReactDOM.render(
    <App9/>,
    document.getElementById('validationonproptype')
);

ReactDOM.render(
    <App10/>,
    document.getElementById('events')
);

ReactDOM.render(
    <App11/>,
    document.getElementById('specificcomponents')
);