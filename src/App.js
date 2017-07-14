// import './styles/index.css';

import React from 'react';
import { Link } from 'react-router';
// import Header from './components/Header';
// import Footer from './components/Footer';

const App = (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/home" activeClassName="active">Home</Link></li>
        <li><Link to="/presidents" activeClassName="active">Presidents</Link></li>
      </ul>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default App;
