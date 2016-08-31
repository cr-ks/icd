var currentYear = new Date().getFullYear();

var cardData = [
  {id: 1, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 2, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 3, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 4, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 5, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 6, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 7, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 8, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 9, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 10, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  {id: 11, title:"A00-A99", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
];

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
          <div className="logo">eICD10</div><div className="logo-back">CODES</div>
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

//Card Component
var Card = React.createClass({
  render: function() {
    return(
      <div className="card">
        <div className="card-title">{this.props.card.title}</div>
        <div className="card-content">{this.props.card.description}</div>
      </div>
    )
  }
});

//Main Page Component
var Content = React.createClass({
  render: function() {
    var cardTable = this.props.cards.map(function(card) {
      return <Card key={card.id} card={card} />
    })
    return (
      <div>
        <div className="main-container">
          <div className="headline">{currentYear} ICD-10-CM Codes</div>
          <div className="card-container">
            {cardTable}
          </div>
          <div className="widget-container">
          </div>
        </div>
      </div>
    )
  }
});

var CardAdd = React.createClass({
  render: function() {
    console.log("Rendering CardAdd");
    return (
      <div>
        <form name="cardAdd">
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
          <button onClick={this.handleSubmit}>Add Card</button>
        </form>
      </div>
    )
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var form = document.forms.cardAdd;
    this.props.addCard({title: form.title.value, description: form.description.value});
    // clear the form for the next input
    form.title.value = ""; form.description.value = "";
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {cards: cardData};
  },
  render: function() {
    return (
      <div>
        <Nav year={currentYear}/>
        <Content cards={this.state.cards}/>
        <cardAdd addCard={this.addCard} />
      </div>
    );
  },
  addCard: function(card) {
    console.log('Adding Card');
    var cardsModified = this.state.cards.slice();
    card.id = this.state.cards.length + 1;
    cardsModified.push(card);
    this.setState({cards: cardsModified})
  }
});

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
