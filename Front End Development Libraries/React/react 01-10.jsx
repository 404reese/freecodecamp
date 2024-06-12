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
  