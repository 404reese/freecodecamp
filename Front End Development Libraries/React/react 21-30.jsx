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
