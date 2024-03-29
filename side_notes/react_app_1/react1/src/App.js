
import React, { Component, useState, setState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {tick} from './components/tickingClock.js' //not default import
import {Counter} from "./components/Counter.js"


import Nav from './Routing/Nav';
import {Page1, Home2, Page3} from './Routing/Page1';
import Page2 from './Routing/Page2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from './Routing/itemDetail';

/*
////////////////////////////////////////////////////////////
////component1

//export Class Header extends React.Component {
class APP_1A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      height: props.height,
      count: 0,
    }

    this.countUp = this.countUp.bind(this);

  }

    countUp() {
      this.setState({
        count: this.state.count + 1,
      });
    }


  render() {
    return (
      <div className="APP_1A">
        <h1> Hello {this.props.name} your height is {this.props.height} </h1>

        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>

      </div>
    )
  }


}


//rendering
const element_1A = <APP_1A name="SheriF" height="200" />;
const output_1A = document.getElementById("rootDiv1");
ReactDOM.render( element_1A, output_1A );



//class uses this.props.name
//function uses props.name only


////////////////////////////////////////////////////////////
////component2
//function, setting states the function way

const APP_1B = (props) => {

  const [timeOfDay, setTimeOfDay] = useState('Monday');
  const [count, setCount] = useState(0);
  const AppID = "1B";

  return (
    <div>
      <h1> Hello World {AppID} {props.name} its {timeOfDay} </h1> 
      <p> You clicked {count} times </p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )

}


//the idea is that you render and element to a root
//what ever this element has

//<button onClick={this.props.onButtonClicked}>Click Me!</button>




//another way of rendering , createRoot
const element_1B = <APP_1B name="SheriF" />;  //JSX element
const output_1B = ReactDOM.createRoot(document.getElementById('rootDiv2')); //Root element
output_1B.render(element_1B);


//can pass JSX to function
//however setInterval do not accept () after tick so no inputs passed

let toCheck = (
  <p> one </p>
);
tick(1,1,toCheck);
//setInterval(tick, 3000);




export { APP_1A, APP_1B };



////////////////////////////////////////////////////////////
////component3


// optimizing the comment component to use UserInfo 
// which contains also ImageComponent


function formatDate (props) {
  return props.date;
}


function ImageComponent (props) {
  return (
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
    />
  );
}

// <ImageComponent user={props.author} />


function UserInfo (props) {
  return (
    <div className="UserInfo">
      
      <ImageComponent user={props.user} />

      <div className="UserInfo-name">
        {props.user.name}
      </div>

    </div>
  );
}


//we have passed author here
//will be used inside of UserInfo as user

function Comment(props) {
  return (
    <div className="Comment">

      <UserInfo user={props.author} />

      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
       {formatDate(props.date)}
      </div>
    </div>
  );
}




let SheriFObj = {
  name: "sherif",
  avatarUrl: "https://m.media-amazon.com/images/I/415MqrAx1VL._AC_AA180_.jpg"
}

const element_2 = <Comment author={SheriFObj} text={"TEXT"} date={"24/03"}  />;  //JSX element
const output_2 = ReactDOM.createRoot(document.getElementById('rootDiv4')); //Root element
output_2.render(element_2);




////////////////////////////////////////////////////////////
////component4

//binding functions to state values in btnApp


class ComponentBtn extends Component {

    constructor(props) {
      super(props);
    }
    render () {
      const {title, onButtonClicked, isToggleOn} = this.props;
      //to use instead of this.props.title for example  

      return (
        <div>
          <h1>{title}</h1>
          <button onClick={onButtonClicked}>
            {isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
      );
    }
}



class AppBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleOn: true
    }


    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    console.log('Click happened');

    this.setState(prevState=> ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <ComponentBtn title="React" onButtonClicked={this.handleClick} isToggleOn={this.state.isToggleOn} />
    );
  }
}

//return <button onClick={this.handleClick.bind(this)}>Click Me</button>;

ReactDOM.render(<AppBtn />, document.getElementById("rootDiv5"));


////////////////////////////////////////////////////////////
////component5 for counter.js

//App5 mount/unmount counter
class App5 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false
    }

    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})

    this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
    this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random()*100)})
  
    this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent})

  }

  //UI greyed buttons on state
  //each button tick, Counter will rerender/DidUpdate
  render () {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          MountCounter
        </button>

        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          unMountCounter
        </button>

        <button onClick={this.seedGenerator}>
          Generate Seed
        </button>

        <button onClick={this.ignoreProp}>
          Ignore Prop
        </button>

        <button onClick={this.toggleError}>
          toggleError
        </button>

        {this.state.mount ? <Counter 
        ignoreProp={this.state.ignoreProp}
        seed={this.state.seed}
        showErrorComponent={this.state.showErrorComponent}
        /> : null}
      </div>
    )
  }
}

ReactDOM.render(<App5 />, document.getElementById("rootDiv6"))


////////////////////////////////////////////////////////////
////component6: function Hooks


const App6 = () => {
  const [color, setColor] = useState("black");



  useEffect(() => {


    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };
    
    document.addEventListener("click", changeColorOnClick);

    //ComponentWillUnmount
    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };


  }, [color]);
  //hook will run anytime the dependency [color] changes



  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};


ReactDOM.render(<App6 />, document.getElementById("rootDiv7"))

////////////////////////////////////////////////////////////
////component7: Routing

const Home = () => {
  return (
      <div>
        <h1>Hello from Home Page</h1>
      </div>
  );
};

function AppRouter() {
  return (
    <Router>
      <div>

      <Nav /> 

      <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Page1" exact element={<><Page1 /><Home /></>} />
          <Route path="/Page2" exact element={<Page2 />} />
          
          <Route path="/Page2/:id" exact element={<ItemDetail />} />
          
          <Route path="/Page3" exact element={<Page3 />} />
         <Route path="/" exact element={<Home2 />} />


        </Routes>


      </div>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("rootDiv8"))

// component={Profile}
//if both elements appear, this is because both share
//the / in path, so wrap them in a <Switch></Switch>
//and sort the <Route>s

//exact only if its / render this component

//want to view two components

*/

////////////////////////////////////////////////////////////
////component7: Testing


const App7 = () => <h1>Our First Test</h1>;


export default App7;
