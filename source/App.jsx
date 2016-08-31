//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var Main = require('./Main.jsx').Main;
var Blocks = require('./Main.jsx').Blocks;

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="/chapters/:title" component={Blocks} />
    </Router>
  ),
  document.getElementById('main')
);
