'use strict';

//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var Main = require('./Main.jsx').Main;
var Blocks = require('./Main.jsx').Blocks;

ReactDOM.render(React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(Route, { path: '/', component: Main }),
  React.createElement(Route, { path: '/chapters/:title', component: Blocks })
), document.getElementById('main'));
