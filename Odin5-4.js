
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Guide to Advanced React


//////////////////////////////////////////////////////////

React provides the possibility to declare types using 
PropTypes. And if that’s not enough for you, you could also 
use TypeScript with React.

PropTypes aren’t commonly used in modern React. 
Use TypeScript for static type checking.


As your app grows
you can catch a lot of bugs with typechecking
for some application can use javascript extensions like 
Flow or Typescript
to type check your whole application

but even if you do not use those
React has some built-in typechecking abilities
to run typechecking on the props for a component
can assign the special propTypes property



import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};



same functionality could also be applied to function 
components, or components created by React.memo or 
React.forwardRef.

PropTypes exports a range of validators that can be used
to make sure the data you receive is valid
in this example we are using PropTypes.string

when an invalid value is provided for a prop
a warning will be shown in the JavaScript console
only checked in development mode


//you can define default values for your props by assigning to
the special "defaultProps" property


class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renders "Hello, Stranger":
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);



Since ES2022 you can also declare defaultProps as static 
property within a React component class.
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

The defaultProps will be used to ensure that 
this.props.name will have a value if it was not 
specified by the parent component. The propTypes 
typechecking happens after defaultProps are resolved, 
so typechecking will also apply to the defaultProps.


//functions

import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent

//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
Typescript

TypeScript adds additional syntax to JavaScript to support 
a tighter integration with your editor. Catch errors 
early in your editor.

TypeScript code converts to JavaScript, which runs anywhere 
JavaScript runs: In a browser, on Node.js or Deno and in 
your apps.
//////////////////////////////////////////////////////////





2. Styled Components
larger application
encounter a problem, want to style things
similarly
through code duplication (writing even the most basic css for each button)
this not good or clean code

the styled components package provides a cleaner way to do this
allows give some default stylings to html elements
can define a button with some basic styling and reuse this button
throughout your application
thus, no code duplication and allows application to be more scalable


3. Redux
the most popular state management system
can be combned with react
purpose: store application's state in a single place
benefit: to prevent having to pass props
through multiple levels of the component tree
recommended for larger applications

https://react-redux.js.org/

























4. Context API
as your application becomes larger and have multiple components
to ensure reusability, might find passing props through a lot
of components in the middle or might have a lot of components
that require the same props
this patterns is known as prop drilling

to help avoid this
react provides the context api

that lets a parent component provide data to all the 
components in its tree without having to pass props.

having a context of your theme will allow all children 
components to have access to an implemented theme data/style.

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


Every parent component can pass some information to its 
child components by giving them props.

Step 1: Pass props to the child component
Now you can read these props inside the Avatar component.


export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

//This syntax is called “destructuring”
//with size having a default value
function Avatar({ person, size = 100 }) {
  // person and size are available here
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}


//or

function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}



////repetitive props can be merged with "spread" syntax

//from
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

//to
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}



//{children}

import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}


props are immutable—a term from computer science meaning 
“unchangeable”. When a component needs to change its props 
(for example, in response to a user interaction or new data), 
it will have to “ask” its parent component to pass it different 
props—a new object! Its old props will then be cast aside, 
and eventually the JavaScript engine will reclaim the memory 
taken by them.

export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}


import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
    </div>
  );
}

//////////////////////////////////////////////////////////

Passing props is a great way to explicitly pipe data 
through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when 
you need to pass some prop deeply through the tree

or if many components need the same prop. 
The nearest common ancestor could be far removed from 
the components that need data, and lifting state up that 
high can lead to a situation called “prop drilling”.

a way to “teleport” data to the components in the tree 
that need it without passing props? With React’s context 
feature, there is!


want the state of two components to always change together. 
To do it, remove state from both of them, move it to their 
closest common parent, and then pass it down to them via props. This is known as lifting state up,

//changing one panel does not change the other
import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}


//now let’s say you want to change it so that only one panel 
is expanded at any given time
//With that design, expanding the second panel should 
collapse the first one. How would you do that?

To coordinate these two panels, you need to “lift their state 
up” to a parent component in three steps:

Remove state from the child components.
Pass hardcoded data from the common parent.
Add state to the common parent and pass it down together with the event handlers.

import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
//////////////////////////////////////////////////////////

export default function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

export default function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
        <Section>   //having the same size
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    </Section>
  );
}

////////////////////////////////////////////

//but now want to pass level prop to the <section> component
instead and remove it from the <heading>

<Section level={3}>
  <Heading>About</Heading>
  <Heading>Photos</Heading>
  <Heading>Videos</Heading>
</Section>

1. create a context
2. use that context from the component that needs the data (heading)
3. Provide that context from the component (section)

//LevelContext.js
import { createContext } from 'react';
export const LevelContext = createContext(1);


//Heading.js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  // switch cases
    switch (level) {
    case 1:
      return <h1>{children}</h1>;
  //..
}


//Section.js
//This tells React: “if any component inside this <Section> 
asks for LevelContext, give them this level.” The component 
will use the value of the nearest <LevelContext.Provider> in 
the UI tree above it.

import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}


//App.js
import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}


//Section.js
//for having automatic increment of levels
//having sections in App.js with no level property

import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}


//this is helpful when want to pass a theme
//the currently logged in user and so on



/////////////////////////////////////////////


//App.js
import Heading from './Heading.js';
import Section from './Section.js';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}


//Section.js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <section className={
      'section ' +
      (isFancy ? 'fancy' : '')
    }>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}


//Heading.js
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

//LevelContext.js

import { createContext } from 'react';

export const LevelContext = createContext(0);


result: https://react.dev/learn/passing-data-deeply-with-context


//You didn’t do anything special for this to work. 
A Section specifies the context for the tree inside it, 
so you can insert a <Heading> anywhere, and it will have the 
correct size. Try it in the sandbox above!

//different React contexts don’t override each other. 
Each context that you make with createContext() is completely 
separate from other ones


Just because you need to pass some props several levels deep 
doesn’t mean you should put that information into context.

1.Start by passing props. If your components are not trivial
2.Extract components and pass JSX as children to them.
If neither of these approaches works well for you, consider context.

Common uses of context
Themes
Current Account
Routing
Managing State, using a reducer with context

Context is not limited to static values. 
If you pass a different value on the next render, 
React will update all the components reading it below! 
This is why context is often used in combination with state.

In general, if some information is needed by distant 
components in different parts of the tree, it’s a good 
indication that context will help you.


//check the image list example at the end
https://react.dev/learn/passing-data-deeply-with-context

//utils.js
export function getImageUrl(place) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}

//data.js
export const places = [{
  id: 0,
  name: 'Bo-Kaap in Cape Town, South Africa',
  description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
  imageId: 'K9HVAGH'
}, {
  id: 1, 
  name: 'Rainbow Village in Taichung, Taiwan',
  description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
  imageId: '9EAYZrt'
},..cont..


//context.js
import { createContext } from 'react';

export const ImageSizeContext = createContext(500);

//App.js
import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider
      value={imageSize}
    >
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place place={place} />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////















5. Higher-order Components
are components that consume another component and
return a third component

an advanced technique in React for reusing component logic.
not part of the React API
they are a pattern that emerges from React's compositional nature

//////////////////////////////////////////////////////////

a function that takes a component and returns a new component
Whereas a component transforms props into UI, 
a higher-order component transforms a component into 
another component.

HOC are common in third-party React libraries

Use HOCs For Cross-Cutting Concerns

We want an abstraction that allows us to define this logic 
in a single place and share it across many components. 

Higher-order components (HOCs) in React were inspired by 
higher-order functions in JavaScript.

HOCs basically incorporate the don’t-repeat-yourself (DRY) principle of programming
It is one of the best-known principles of software development,
and observing it is very important when building an application or writing code in general.

//higher order function
//formatCurrency returns a function with a fixed currency symbol and decimal separator.
const formatCurrency = function( currencySymbol, decimalSeparator  ) {
    return function( value ) {
        const wholePart = Math.trunc( value / 100 );
        let fractionalPart = value % 100;
        if ( fractionalPart < 10 ) {
            fractionalPart = '0' + fractionalPart;
        }
        return `${currencySymbol}${wholePart}${decimalSeparator}${fractionalPart}`;
    }
}

> getLabel = formatCurrency( '$', '.' );
> getLabel( 1999 )
"$19.99" //formatted value


//Higher order component HOC
take one or more components as arguments, 
and return a new upgraded component.

We don’t modify or mutate components. We create new ones.
A HOC is used to compose components for code reuse.
A HOC is a pure function. It has no side effects, returning only a new component.

//ex
import React from 'react';
// Take in a component as argument WrappedComponent
const higherOrderComponent = (WrappedComponent) => {
// And return another component
  class HOC extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  }
  return HOC;
};


//mapping example
//List.js
import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos) return null;
  if (!repos.length) return <p>No repos, sorry</p>;
  return (
    <ul>
      {repos.map((repo) => {
        return <li key={repo.id}>{repo.full_name}</li>;
      })}
    </ul>
  );
};
export default List;


//HOC ex//
//withdLoading.js
import React from 'react';
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
}
export default WithLoading;


//App.js
import React from 'react';
import List from './components/List.js';
import WithLoading from './components/withLoading.js';

const ListWithLoading = WithLoading(List);

class App extends React.Component {
  state = {
{
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    );
  }
}
export default App;


//Once the request is complete, we set the loading state to false and populate 
//the repos state with the data we have pulled from the API request.



//another example
//The code below is a HOC named withAuth. It basically takes a component and returns 
a new component, named AuthenticatedComponent, that checks whether the user is 
authenticated. If the user is not authenticated, it returns the loginErrorMessage 
component; if the user is authenticated, it returns the wrapped component.
//this.props.isAuthenticated has to be set from your application’s logic. 

// withAuth.js
import React from "react";
export function withAuth(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated() {
            return this.props.isAuthenticated;
        }

        render() {
          const loginErrorMessage = (
              <div>
                  Please <a href="/login">login</a> in order to view this part of the application.
              </div>
          );

          return (
              <div>
                  { this.isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage }
              </div>
          );
      }
  };
}

export default withAuth;


//Here, we create a component that is viewable only by users who are authenticated. 
We wrap that component in our withAuth HOC to protect the component from users who 
are not authenticated.

// MyProtectedComponent.js
import React from "react";
import {withAuth} from "./withAuth.js";

export class MyPrivateComponent extends React.Component {
    render() {
      return (
          <div>
              This is only viewable  by authenticated users.
          </div>
      );
  }
}

// Now wrap MyPrivateComponent with the requireAuthentication function 
export default withAuth(MyPrivateComponent);



//another example
const HelloComponent = ({ name, ...otherProps }) => (
 <div {...otherProps}>Hello {name}!/div>
);

const withStyling = (BaseComponent) => (props) => (
  <BaseComponent {...props} style={{ fontWeight: 700, color: 'green' }} />
);

const EnhancedHello = withStyling(HelloComponent);

<EnhancedHello name='World' />




const HelloComponent = ({ name, ...otherProps }) => (
 <div {...otherProps}>Hello {name}!</div>
);

const withNameChange = (BaseComponent) => (props) => (
  <BaseComponent {...props} name='New Name' />
);

const EnhancedHello2 = withNameChange(HelloComponent);

<EnhancedHello /> // will output <div>Hello New World</div>
<EnhancedHello name='Shedrack' /> //will output <div>Hello Shedrack</div>


//if we decide to change things around, we only have to edit our HOC.



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Using Baas for your backend

Backend, storage, different devices

You can learn how to build a back-end later using Node.js
you can outsource your backend functionality to a 
Backend-as-a-Service (BaaS) company like Firebase or Apigee. 


Firebase*
Accelerate and scale app development without managing infrastructure
Spin up your backend without managing servers

Cloud fireStore*
build serverless, secure apps at a global scale
Store app data in the cloud
sync data across online and offline devices
retrieve it with expressive queries

Services:
RealTime Database
Remote Config
Firebase extensions
App Check
App traffic check
Cloud functions, write/run app logic server-side without needing to set up your own server
Add an end-to-end identity solution for easy yser authentication, sign-in, and onbarding
Cloud messaging
Hosting*
Cloud messaging, messages between your server and devices, across platforms at no cost
Cloud storage,* 
Firebase ML, machine learning features to your app with ready to use API's
            and support for custom model deployment
Authentication*

Related extensions, pre-packed solutions, support google cloud products
Stream collections to BigQuery
Trigger Email
Search with Algolia



Cloud Firestore is a NoSQL document database that lets you easily 
store, sync, and query data for your mobile and web apps - at global scale.

across all devices, multiple users, support for offline mode even on the web
manage access, structure data, 




Hosting
Behind the scenes, our infrastructure is powered by Google Cloud, 
so you can scale to meet your users where they are faster than ever.

Storage
store/serve photos, videos
stored in database and shared among "authenticated" users
secure connection

authentication
identy for user to provide customized experience
what parts of the database have access to
to focus more on the app and not the authentication side of the app
It can take months to set up your own auth system, and it requires 
an engineering team to maintain that system in the future. Set up 
the entire authentication system of your app in under 10 lines of 
code, even handling complex cases like account merging.




works on ios, android, web





///////////////////////////////////////////////////////////////////
Local Storage

You would keep a key on the user’s computer and read it 
out when the user returns.

The classic way to do this is by using a cookie
a text file hosted on the user's computer
and connected to the domain that your website runs on
can store information in them, read them out, delete them
and have limitations
.add to the load of every document accessed on the domain
.allow up to only 4kb of data storage
.some companies turn them off



//Using Local Storage In HTML5-Capable Browsers #

localStorage.setItem('favoriteflavor','vanilla');

var taste = localStorage.getItem('favoriteflavor');
// -> "vanilla"

localStorage.removeItem('favoriteflavor');
var taste = localStorage.getItem('favoriteflavor');
// -> null

You can also use sessionStorage instead of localStorage if 
you want the data to be maintained only until the browser window 
closes.

shortcoming of local storage is that you can only store strings 
in the different keys. This means that when you have an object, 
it will not be stored the right way.

can work around this by using the native 
JSON.stringify() and JSON.parse() methods:

var car = {};
car.wheels = 4;
car.doors = 2;
car.sound = 'vroom';
car.name = 'Lightning McQueen';
console.log( car );
localStorage.setItem( 'car', JSON.stringify(car) );
console.log( JSON.parse( localStorage.getItem( 'car' ) ) );

Where To Find Local Storage Data And How To Remove It from browser #
Preferences → Advanced → Storage

Use cases:
(1) for an application that takes time to load
can cache the data so the second time becomes faster

//using jQuery here
if(localStorage && localStorage.getItem('thewholefrigginworld')){
  render(JSON.parse(localStorage.getItem('thewholefrigginworld')));
} else {
  $('#list').html('’ + loading + ’’); 
  
var query = ‘select centroid,woeid,name,boundingBox’+ ‘ from geo.places.children(0)’+ ‘ where parent_woeid=1 and placetype=“country”‘+ ’ | sort(field=“name”)‘; var YQL = ‘https://query.yahooapis.com/v1/public/yql?q='+ encodeURIComponent(query)+’&diagnostics=false&format=json’; $.getJSON(YQL,function(data){ if(localStorage){ localStorage.setItem(‘thewholefrigginworld’,JSON.stringify(data)); } render(data); }); }

If a Web service allows you only a certain number of calls per 
hour but the data doesn’t change all that often, you could store 
the information in local storage and thus keep users from using up 
your quota. 
A photo badge, for example, could pull new images every six hours, 
rather than every minute.

getJSON() in jQuery is especially egregious in accessing services 
and breaking their cache, as explained in
https://www.yqlblog.net/blog/2010/03/12/avoiding-rate-limits-and-getting-banned-in-yql-and-pipes-caching-is-your-friend/ 


(2) Maintaining the state of an interface the simple way
storing the entire HTML or as clever as maintaining an object with the state of all of your widgets

search: using-html5-storage-to-cache-application-interfaces

///////////////////////////////////////////////////////////////////


//how to use Firebase to easily create web applications by 
implementing and deploying a chat client using Firebase products 
and services.

Sync data using Cloud Firestore and Cloud Storage for Firebase.
Authenticate your users using Firebase Authentication.
Deploy your web app on Firebase Hosting.
Send notifications with Firebase Cloud Messaging.
Collect your web app's performance data.


//Sign in to firebase
create new project: friendlychat 
it will be given an id : friendlychat-19e16
Uncheck Enable Google Analytics for this project


The application that we're going to build uses Firebase products 
that are available for web apps:

.Firebase Authentication to easily allow your users to sign into your app.
.Cloud Firestore to save structured data on the cloud and get 
instant notification when data changes.
.Cloud Storage for Firebase to save files in the cloud.
.Firebase Hosting to host and serve your assets.
.Firebase Cloud Messaging to send push notifications and display browser popup notifications.
.Firebase Performance Monitoring to collect user performance data for your app.

Some of these products need special configuration or need to be 
enabled using the Firebase console.

//Add a Firebase web app to the project
Click the web icon </> to create a new Firebase web app.
Register the app with the nickname Friendly Chat, then check the 
box next to Also set up Firebase Hosting for this app. 
Click Register app.
On the next step, you'll see a configuration object. 
Copy just the JS object (not the surrounding HTML) 
into src/firebase-config.js





//Enable Google sign-in for Firebase Authentication
To allow users to sign in to the web app with their Google accounts, 
we'll use the Google sign-in method.

You'll need to enable Google sign-in:

In the Firebase console, locate the Build section in the left panel.
Click Authentication, then click the Sign-in method tab (or click here to go directly there).
Enable the Google sign-in provider, then click Save.
Set the public-facing name of your app to Friendly Chat and choose 
a Project support email from the dropdown menu.
Configure your OAuth consent screen in the Google Cloud Console and add a logo:

//Enable Cloud Firestore
In the Firebase console's Build section, click Firestore Database.
Click Create database in the Cloud Firestore pane.
Select the Start in test mode option, then click Next after reading 
the disclaimer about the security rules.


//Enable Cloud Storage
In the Firebase console's Build section, click Storage.
If there's no Get Started button, it means that Cloud storage is
 already enabled, and you don't need to follow the steps below.
Click Get Started.
Read the disclaimer about security rules for your Firebase project, then click Next.

With the default security rules, any authenticated user can write 
anything to Cloud Storage. We'll make our storage more secure 
later in this codelab.


//4. Install the Firebase command-line interface
The Firebase command-line interface (CLI) allows you to use 
Firebase Hosting to serve your web app locally, as well as to 
deploy your web app to your Firebase project.

install cli
npm install -g npm //install/update node
node -v
npm -v //check version
# npm -g install firebase-tools

verify CLI installation
# firebase --version

authorize the firebase cli
# firebase login


We've set up the web app template to pull your app's configuration 
for Firebase Hosting from your app's local directory (the repository 
that you cloned earlier in the codelab). But to pull the configuration, 
we need to associate your app with your Firebase project.

Associate your app with your Firebase project by running the following command:
# firebase use --add


//5. Run the starter app locally
In a console from the web-start directory, run the following Firebase CLI command:
# firebase serve --only hosting

Your command line should display the following response:
✔  hosting: Local server: http://localhost:5000

We're using the Firebase Hosting emulator to serve our app locally. 
The web app should now be available from http://localhost:5000. 
All the files that are located under the public subdirectory are 
served.

Using your browser, open your app at http://localhost:5000.
You should see your FriendlyChat app's UI, which is not (yet!) 
functioning:


////6. Import and configure Firebase
//Import the Firebase SDK
you can import the library from our CDN. Or you can install it locally 
using npm, then package it in your app if you're using Browserify.

get the firebase sdk from npm and use Webpack to bundle our code
so webpack can remove any unnecessary code
keeping our JS bundle size small
to make sure our app loads quickly

created web-start/package.json that includes the firebase SDK
imported the needed functions at the top of web-start/src/index.js

in future apps makse sure that you are only importing the parts
of firebase that you need, to shorten the load time of your app

//Install the Firebase SDK and start your Webpack build

new terminal window
in web-start directory
# npm install > to download the firebase SDK
# npm run start > to start up webpack to continually rebuild our 
source code for the rest of the codelab

//Configure firebase
https://console.firebase.google.com/project/_/settings/general/
select your project > Your apps card > nickname of the app need to config
select config radio button, copy the config object and add it to
firebase-config.js file locally


go to the bottom of web-start/src/index.js and initialize Firebase:
const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);


////set up user sign-in
The Firebase SDK should now be ready to use since it's imported and 
initialized in index.js

//Authenticate your users with Google Sign-In
we want to authorize Firebase to use Google as the identity provider.
We'll use a popup, but several other methods are available from Firebase.

https://firebase.google.com/codelabs/firebase-web#6
change the following functions
signIn, signOut, initFirebaseAuth, gerProfilePicUrl, getUserName, isUserSignedIn


//8. Write messages to Cloud Firestore
write some data to Cloud Firestore so that we can populate the app's UI.
can be done manually with the Firebase console, but we'll do it in 
the app itself to demonstrate a basic Cloud Firestore write.

//Data model
Cloud Firestore data is split into collections, documents, fields, and subcollections. 
We will store each message of the chat as a document in a top-level collection called messages.

replace the saveMessage function in index.js

//Read messages
To read messages in the app, we'll need to add listeners that 
trigger when data changes and then create a UI element that 
shows new messages.

we will add code that listens for newly added messages from the app
we will register the listener that listens for changes made to the data
last 12 messages

change load messages function

cloud firestore good for storing structured data
cloud storage is better suited for storing files
to store any images that a user shares using our app

add the saveImageMessage function

////show notifications
the app will notify users when new messages are posted in the chat
Firebase Cloud messaging FCM is a cross-platform solution
allows delivering messages and notifications at no cost

//add the fcm service worker
add to firebase-messaging-sw.js a code


//Get FCM device tokens
When notifications have been enabled on a device or browser, 
you'll be given a device token. This device token is what we use 
to send a notification to a particular device or particular browser.

When the user signs-in, we call the saveMessagingDeviceToken function. 
That's where we'll get the FCM device token from the browser and save it 
to Cloud Firestore.


//Request permissions to show notifications

For your app to be able to retrieve the device token, 
the user needs to grant your app permission to show notifications

add code to the function requestNotificationsPermissions.*


//Send a notification to your device
Open the Cloud Messaging tab of the Firebase console.
Click "New Notification"
Enter a notification title and notification text.
On the right side of the screen, click "send a test message"
Enter the device token you copied from the JavaScript console of your browser, then click the plus ("+") sign
Click "test"


//12. Cloud Firestore security rules
in the Database section's Rules tab, you can view and modify these rules.

add code to firestore.rules*

To update security rules in the Firebase console:

Go to the Database section from the left panel, and then click the Rules tab.
Replace the default rules that are already in the console with the rules shown above.
Click Publish.
To update security rules from a local file:

From the web-start directory, open firestore.rules.
Replace the default rules that are already in the file with the rules shown above.
From the web-start directory, open firebase.json.
Add the firestore.rules attribute pointing to firestore.rules, as shown below. (The hosting 

add code to firebase.json

Deploy the security rules using the Firebase CLI by running the following command:
firebase deploy --only firestore


////13. Cloud Storage security rules
View Cloud Storage security rules

Cloud Storage for Firebase uses a specific rules language to define 
access rights, security, and data validations.

we already chose to use default cloud storage
that only allows authenticated users to use cloud storage

We'll update the rules to do the following:

Allow each user to write only to their own specific folders
Allow anyone to read from Cloud Storage
Make sure that the files uploaded are images
Restrict the size of the images that can be uploaded to maximum 5 MB

can be done by adding code to storage.rules*

There are two ways to edit your storage security rules: either in 
the Firebase console or from a local rules file deployed using the 
Firebase CLI.


To update security rules in the Firebase console:
Go to the Storage section from the left panel, and then click the Rules tab.
Replace the default rule that is already in the console with the rules shown above.
Click Publish.

To update security rules from a local file:

From the web-start directory, open storage.rules.
Replace the default rules that are already in the file with the rules shown above.
From the web-start directory, open firebase.json.
Add the storage.rules attribute pointing to the storage.rules file, 
as shown below. (The hosting and database attribute should already be 
in the file.)

can be done by adding code to firebase.json*

Deploy the security rules using the Firebase CLI by running the following command:
firebase deploy --only storage


//14. Collect performance data
Performance Monitoring helps you to understand where and when the 
performance of your app can be improved so that you can use that 
information to fix performance issues.

add one line to tell Performance Monitoring to automatically collect 
page load and network request metrics for you when users visit your 
deployed site!

In web-start/src/index.js, add*

//First input delay is useful since the browser responding to a 
user interaction gives your users their first impressions about 
the responsiveness of your app.

View performance data

You need to add domain mail-demo-fcm.firebaseapp.com
in Authentication settings > authorized domains > add domain




*/