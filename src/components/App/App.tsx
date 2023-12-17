import './App.scss';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { Outlet } from 'react-router';

function App() {


  return (
    <div className="container-fluid px-4">
      <div className="row gx-5">
        <NavigationMenu />
      </div>
      <div className="row">
        <Outlet />
      </div>      
    </div>
  );
}

export default App;
