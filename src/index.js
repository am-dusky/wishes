import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

let fulldate = new Date();
  fulldate = fulldate.getHours();
  let greet="";
  const style1 = {};

  if(fulldate >=1 && fulldate < 12){
      greet="Good morning!!";
      style1.color="green";
  }
  else if(fulldate >=12 && fulldate < 19){
      greet="Good Afternoon!!";
      style1.color="blue";
  }
  else{
      greet="Good Night!!";
      style1.color="black";
  }  
  ReactDOM.render(
      <>
          <div className="greeting">
          <h1>Hello,<span style={style1}>{greet}</span></h1>
         </div>
         </>,
      document.getElementById('root')
  );
  
