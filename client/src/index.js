import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VideoApp from './VideoChat/videoChat';
ReactDOM.render(
  <React.StrictMode>
    <VideoApp />
    {/* <App text= "https://www.tacklhealth.com/tackl-corporate-testing" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
