import React from 'react';
import ReactDOM from 'react-dom/client';
import './simple-budget-ui.scss'
import NewTransaction from './transactions/newtransaction';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const IsUserLoggedIn = async () => {
	let response:Response = await fetch("https://localhost:3101/user/loggedin", {
		credentials: "include"
	});
	let userIsLoggedIn:boolean = await response.json();

	if ( !userIsLoggedIn )
	{
		window.location.href = "https://localhost:3101/user/login";
	}
};

IsUserLoggedIn()
	.catch(console.error);

root.render(
  <React.StrictMode>
    <NewTransaction />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
