//Imports
var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

//Navigation Component
var Nav = React.createClass({
  render: function() {
    return (
      <div>
        <div className="top-nav">
          <span className="search"><form action="#">ICD-10-CM Code Search<input type="text" name="search" /></form></span>
          <span className="login"><a href="#">Login</a> | <a href="#">Signup</a></span>
        </div>
        <div className="side-nav">
          <Link to={'/'}><div className="logo">eICD10</div><div className="logo-back">CODES</div></Link> 
          <div className="links">
            <ul>
              <li><i className="fa fa-heartbeat" aria-hidden="true"></i><br />ICD CODES</li>
              <li><i className="fa fa-exchange" aria-hidden="true"></i><br />CODE CONVERSION</li>
              <li><i className="fa fa-search" aria-hidden="true"></i><br />CODE LOOKUP</li>
            </ul>
          </div>
          <div className="copy"><a href="#">About</a> | <a href="#">Privacy</a>
            <p>&copy; {this.props.year} cr-ks</p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Nav;
