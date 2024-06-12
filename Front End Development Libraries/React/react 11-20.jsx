//   11 React: Compose React Components

class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* change code below this line */ }
            {/* // nesting two components which is assumed to be in the background  */}
            <NonCitrus/>
            <Citrus/>
           { /* change code above this line */ }
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* change code below this line */ }
          {/* // nesting the other react component */}
          <Fruits/>
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
  };

//   12 React: Render a Class Component to the DOM

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
< Fruits />
<Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
  

//   13 React: Write a React Component from Scratch
// change code below this line
class MyComponent extends React.Component {
    // Constructor and super both passes props
    constructor(props){
      super(props);
    }
  
    render(){
      return(
        <h1>My First React Component!</h1>
      );
    }
  
  };
  
  ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));

//   14 React: Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
    return (
      <div>
        { /* change code below this line */ }
        {/* //   passing up the props called date here */}
        <p>The current date is: {props.date}</p>
        { /* change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* change code below this line */ }
          {/* // adding the props date that take return value of date() function  */}
          <CurrentDate date={Date()}/>
          { /* change code above this line */ }
        </div>
      );
    }
  };


// 15 React: Pass an Array as Props
// use Array methods such as join() can be used when accessing the property.
// for eg
const List = props => {
  return <p>{props.tasks.join(', ')}</p>;
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  }
}


// 16 React: Use Default Props
// React assigns default props if props are undefined, 
// but if you pass null as the value for a prop, it will remain null.
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // change code below this line
  ShoppingCart.defaultProps = {
      items: 0
  };

// 17 React: Override Default Props
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      // overriding the default props is same as explicitly setting up the props 
      return <Items quantity={10}/>
      { /* change code above this line */ }
    }
  };



//   18 React: Use PropTypes to Define the Props You Expect

import React, { PropTypes } from 'react';
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // change code below this line
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };
  // change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };

//   19 React: Access Props Using this.props

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Welcome name="John Doe" />
      </div>
    );
  }
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <strong>{this.props.name}</strong>
      </div>
    );
  }
};


//   20 React: Review Using Props with Stateless Functional Components

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // change code below this line
  const Camper = (props) => {
      return(
        <div>
          <p>{props.name}</p>
        </div>
      );
  }
  
  Camper.defaultProps = {
    name: "CamperBot"
  };
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  }