// 01 React: Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;

// 02 React: Create a Complex JSX Element
const JSX = <div>
<h1>header</h1>
<p>paragraph</p>
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
</div>

// 03 React: Add Comments in JSX
const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
      {/**/}
    </div>
  );

//   04 React : Render HTML Elements to the DOM
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // change code below this line
  
  ReactDOM.render(JSX, document.getElementById('challenge-node'));
  
//   05 React: Define an HTML Class in JSX
const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );

//   06 React: Learn About Self-Closing JSX Tags(like br and hr)
const JSX = (
    <div>
      // remove comment and change code below this line
      <h2>Welcome to React!</h2>
      <br></br>
      <p>Be sure to close all tags!</p>
      <hr></hr>
      // remove comment and change code above this line 
    </div>
  );
  
//   07 React: Create a Stateless Functional Component
const MyComponent = function() {
  // Change code below this line
return (
      <div><p>Hello</p></div>
    
)
  // Change code above this line
}

// 08 React: Create a React Component
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
        return(
          <div>
            <h1>Hello React!</h1>
          </div>
        );
      // change code above this line
    }
  };

// 09 React: Create a Component with Composition of other components
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* change code below this line */ }
          <ChildComponent/>
  
          { /* change code above this line */ }
        </div>
      );
    }
  };

//  10 React: Use React to Render Nested Components
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* change code below this line */ }
        <TypesOfFruit/>
        { /* change code above this line */ }
      </div>
    );
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
          <Fruits/>
          { /* change code above this line */ }
        </div>
      );
    }
  };
  
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

//   21 React: Create a Stateful Component
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
this.state = {
      firstName: "John"
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

//   22 React: Render State in the User Interface
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* change code below this line */ }
          <h1>{this.state.name}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  
  // 23 React: Render State in the User Interface Another Way
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // change code below this line
      const name = this.state.name;
      // change code above this line
      return (
        <div>
          { /* change code below this line */ }
          <h1>{name}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };

  // 24 React: Set State with this.setState
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // change code below this line
      // Note the setState Syntax
        this.setState({
          name: "React Rocks!"
        });
  
      // change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };


  // 25 React: Bind 'this' to a Class Method
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

//  26 React: Use State to Toggle an Element
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility:!state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}


  // 27 React: Write a Simple Counter
  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      // change code above this line
    }
    // change code below this line
    increment(){
      this.setState({
        // on right side this.state is required
        count: this.state.count + 1
      });
    }
    decrement(){
      this.setState({
        // on right side this.state is required
        count: this.state.count - 1
      });
    }
    reset(){
      this.setState({
        // on right side this.state is required
        count: 0
      });
    }
  
    // change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };

  // 29 React: Create a Controlled Input
  class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // change code below this line
      this.handleChange = this.handleChange.bind(this)
      // change code above this line
    }
    // change code below this line
    handleChange(e){
      this.setState({
        input: e.target.value
      });
    }
    // change code above this line
    render() {
      return (
        <div>
          { /* change code below this line */}
          {/* onChange is an event that if triggered then handleChange Function will execute above */}
          <input value={this.state.input} onChange={this.handleChange}/>
          { /* change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  // 30 React: Create a Controlled Form

  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // change code below this line
       event.preventDefault();
       this.setState({
         submit: this.state.input
       }); 
      // change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            { /* change code below this line */ }
            <input value={this.state.input} onChange={this.handleChange}/>
            { /* change code above this line */ }
            <button type='submit'>Submit!</button>
          </form>
          { /* change code below this line */ }
          <h1>{this.state.submit}</h1>
          { /* change code above this line */ }
        </div>
      );
    }
  };
// 31 React: Pass State as Props to Child Components
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
      {/* //  passing up the state name as props */}
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
    {/* // now accessing the props */}
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};


// 32 React: Pass a Callback as Props
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

/// 33 React: Use the Lifecycle Method componentWillMount
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
    console.log("this is component will mount shhit")
    // change code above this line
  }
  render() {
    return <div />
  }
};

// 34 React: Use the Lifecycle Method componentDidMount

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers }</h1>
      </div>
    );
  }
};

// 35 React: Add Event Listeners
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // change code below this line
  componentDidMount() {
    // use this keyword
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    // use this keyword
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  // change code above this line
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

// 36 React: Manage Updates with Lifecycle Methods

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}


// 37 React: Optimize Re-Renders with shouldComponentUpdate
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};


// 38 React: Introducing Inline Styles
const styles = {
  color: 'purple',
  fontSize: 40,
  border: "2px solid purple",
};

class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};

// 39 React: Add Inline Styles in React using const
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
}
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};

// 41 React: Use Advanced JavaScript in React Render Method
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; // Change this line
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* Change code below this line */}
{answer}
          {/* Change code above this line */}
        </p>
      </div>
    );
  }
}

// 42 React: Render with an If/Else Condition
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    if(this.state.display){
      return (
            <div>
              <button onClick={this.toggleDisplay}>Toggle Display</button>
              <h1>Displayed!</h1>
            </div>
          );
    }else{
      return (
            <div>
              <button onClick={this.toggleDisplay}>Toggle Display</button>
            </div>
          );
    }
   
  }
};

// 43 React: Use && for a More Concise Conditional
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
        {/* //  using && instead of if/else */}
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

// 44 React: Use a Ternary Expression for Conditional Rendering
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userAge: '',
      input: ''
    }
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
          {/* changes here */}
        {
         this.state.userAge && 1*this.state.userAge < 18 ? buttonThree : this.state.userAge && 1*this.state.userAge >= 18 ? buttonTwo : buttonOne
        }
      </div>
    );
  }
};


// 45 React: Change Inline CSS Conditionally Based on Component State
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1
      }
    });
  }

  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
        <Results fiftyFifty={expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};


// 46 React: Use Array.map() to Dynamically Render Elements
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

// 47 React: Give Sibling Elements a Unique Key Attribute
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: '',
      toDoList: []
    }
    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(i => <li>{i}</li>); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

// 48 React: Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online); // change code here
    const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={item}>{item}</li>
);
    // change code here
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};

// 49 React: Render React on the Server with renderToString
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);


// 50 React : Use Array.filter() to Dynamically Filter an Array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online === true); // change code here
    const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>); // change code here
    
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

// 51 React: Render React on the Server with renderToString
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App />);  