

/*////////////////////////////////////////////////////////////////////*/
/*
Hooks

Hooks allows functional components to be smarter
to have a lifecycle as well as state

useRef, useContext, custom hooks

most common use hooks
useState and useEffect

//useState
import {useState} from react
allow set initial state as an argument
returns the current state + a function that updates it

const [time, setTime] = useState(new Date())

const App6 = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div> {count} </div>
      <button onClick={incrementCount}> Increment </button>
    </div>
  )

}





//
effect hook will get invoked with the first DOM updating
we can pass in a function in useEffect
and every time the DOM gets updated
the function in useEffect will get invoked too

also allows to to pass in an array as the second argument
which contains all the dependencies that will trigger the effect hook
if any of the dependencies changes
the effect hook will run again

more efficient way to make an Ajax request

instead of making the request every time with DOM updates
can pass dependencies that only make the request while these
values change

//declarations
//change
//tick effect interval for change
//return declaration

//so time changed
//use effect fires as a function..? so repeats call? *1



const ClockUsingHooks = props => {
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        
        return () => clearInterval(tick)
    })


    return (
        <div className="clock">
            <h1>Hello! This is a function component clock.</h1>
            <h2>It is {time.toLocaleTimeString()}.</h2>
        </div>
    )
}



//setting the state is an async task
//setting the state calls a re-render *1
//that is the reason for seeing a new count when clicking the button

//component will update after setting the state
//to use this opportunity of updating to do some tasks

//useEffect can act like componentDidMount, componentDidUpdate or componentWillUnmount


/////////////////////////////////////////////////////////
//useEffect cont.


//useEffect(() => {}, [])
{} the code that will be executed
() optional dependency array

dependency
any state, prop, context
that is used within the useEffect callback
can also include state/props that are not

useEffect will trigger based on changes in the dependencies listed

ESLint will warn if it expects a dependency
a warning but not required


////equal to componentDidMount
//empty dependency
//the hook runs one time when the component mounts/inserted in the DOM tree

useEffect(() => {
  // Do something
}, []);


////equal to componentDidUpdate
//dependency
////main difference only runs when a certain condition is changed
//hook run every time dependency color changes

useEffect(() => {
  // Do something
}, [color]);


//equal to componentDidMount and componentDidUpdate
//no dependency
////leave out the dependency array
//useEffect hook runs anytime the component is updated
//AND right after the initial render

useEffect(() => {
  // Do something
});


/////equal to a componentWillUnmount method.
//The return statement 
//we are adding to our useEffect is actually 

////component6: function Hooks in react_app_1



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

state lets a component remember information like user input
form component state > store input value
image gallery component state > store selected image index

to add state to a component, use one of these hooks
useState: declares a state variable that you can update directly
useReducer: ''  ''      with the update logic inside a reducer function





////Context Hooks
lets a component receive information from distant parents 
without passing it as props.

for example, app's top level component can pass the
current UI theme to all components below,
no matter how deep

useContext reads and subscribes to a context.

function Button() {
  const theme = useContext(ThemeContext);
  // ...





////Ref Hooks
Refs let a component hold some information that isn’t used for 
rendering, like a DOM node or a timeout ID

Unlike with state, updating a ref does not re-render your component. 

are an “escape hatch” from the React paradigm
useful when need to work with non-React systems
such as built in API's


function Form() {
  const inputRef = useRef(null);
  // ...

useRef; declares a ref, can hold any value in it
most often a DOM node

useImperativeHandle; lets customize the ref exposed by
your component, rarely used




////Effect Hooks
Effects let a component connect and synchronize with external systems

this includes dealing with network, browser DOM, animations, 
widgets written using a different UI library
and other non-React code.

connects a component to an external system

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...


  //passed a prop of roomId
  //createConnection using prop
  //connect to the created connection
  //on dismount, disconnect
  //dependency on the prop roomId


//two used variations of useEffect with differences in timing
useLayoutEffect; fires before the browser repaints the screen
useInsertionEffect; fires before React makes changes to the DOM
  libraries can insert dynamic CSS here


////Performance Hooks
to optimize re-rendering performance is to skip unnecessary
work

for example can tell React to reuse a cached calculation
or to skip a re-render if the data has not changed since the previous render

To skip calculations and unnecessary re-rendering, use one of these Hooks:
useMemo; lets you cache the result of an expensive calculation.
useCallback; lets you cache a function definition before passing it down to an optimized component.

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}


sometimes you cant skip re-rendering because the screen actually
needs to update
in that case, can improve performance by separating blocking
updates that must be synchronous

like typing into an input
from non-blocking updates
which don't need to block the user interface 
(like updating a chart)

To prioritize rendering, use one of these Hooks:
useTransition; lets you mark a state transition as non-blocking and allow other updates to interrupt it.
useDeferredValue; lets you defer updating a non-critical part of the UI and let other parts update first.



/////////
Other Hooks mostly useful to library authors and
aren't commonly used in the application code

useDebugValue lets you customize the label React DevTools displays for your custom Hook.
useId lets a component associate a unique ID with itself. Typically used with accessibility APIs.
useSyncExternalStore lets a component subscribe to an external store.


/////////
You can also define your own custom Hooks as JavaScript functions.




/*////////////////////////////////////////////////////////////////////*/
/*
useMemo
a React Hook that lets you cache the result of a calculation between re-renders.

const cachedValue = useMemo(calculateValue, dependencies)

called at the top level of your component
or extract a new component and move the state into it.


import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),  //calculateValue function
    [todos, tab]    //dependency
  );
  // ...
}

//filterTodos function will rerun
TodoList updates its state or receives new props from its parent



calculateValue;
the function calculating the value that you want to cache
should be pure
should take no arguments
should return a value of any type

react will call your function during the initial render
in next renders, react will return the same value if deps. not changed
otherwise
it will call calculateValue, return its result
and store it so it can be reused later

dependencies;
React will compare each dependency with its previous value 
using the Object.is comparison.

Returns;
initial render > the result of calling calculateValue with no arguments
next renders > an already stored value from last render
if deps. not changed or call calcValue again and return its returned result


in strict mode
calc function will be called twice
if the function is pure it will affect nothing
and one of the results will be ignored


In other words, useMemo caches a calculation result between re-renders until its dependencies change.


By default, React will re-run the entire body of your 
component every time that it re-renders.



// cont : https://react.dev/reference/react/useMemo

The Object.is() static method determines whether two values are the same value.
console.log(Object.is('1', 1));
// Expected output: false


/*////////////////////////////////////////////////////////////////////*/
/*

useCallback is a React Hook that lets you cache a function 
definition between re-renders.

const cachedFn = useCallback(fn, dependencies)


import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => { //&
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); //&


Parameters:
fn; 
React will return (not call!) your function back to you 
during the initial render.
to decide when and whether to call it

same function if dependencies are not changed
otherwise will give the function passed during the current render
and store it in case it can be used later

dependencies;
The list of all reactive values referenced inside of the fn code.
Reactive values include props, state and all the variables and functions
declared directly inside your component body
if your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency.


To cache a function between re-renders of your component, 
wrap its definition into the useCallback Hook:

for example
you remove <ShippingForm /> from your JSX, it feels fast. This tells you that it’s worth trying to optimize the ShippingForm component.
if you verified a re-render is slow, you can tell ShippingForm to skip re-rendering when its props are the same as on last render by wrapping it in memo:

import { memo } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // ...
});

then your component that uses the shipping Form

function ProductPage({ productId, referrer, theme }) {
  // Every time the theme changes, this will be a different function...
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }
  
  return (
    <div className={theme}>
      {/* ... so ShippingForm's props will never be the same, and it will re-render every time /}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}


//////////////

With this change, ShippingForm will skip re-rendering if all of its props are the same as on the last render.
This is when caching a function becomes important

////////////////////////////////////////////////////////

function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function between re-renders...
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ...so as long as these dependencies don't change...

  return (
    <div className={theme}>
      {/* ...ShippingForm will receive the same props and can skip re-rendering/}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

By wrapping handleSubmit in useCallback, you ensure that it’s the same function between the re-renders (until dependencies change). 

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

//App.js

import { useState } from 'react';
import ProductPage from './ProductPage.js';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

//ProductPage.js

import { useCallback } from 'react';
import ShippingForm from './ShippingForm.js';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}

//shippingForm.js
import { memo, useState } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;

//shipping form is intentionally slowed down
//thanks to useCallback and memo, 
theme toggle is fast

//shipping form is skipped re-rendering because
handle submit function has not changed
because both product Id and referrer deps.
haven't changed since last render

// If your interactions are fast enough, you don’t need memoization.

//Keep in mind that you need to run React in production mode, 
disable React Developer Tools, and use devices similar 
to the ones your app’s users have in order to get a realistic 
sense of what’s actually slowing down your app.

//



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

Sometimes, you might need to update state based on previous 
state from a memoized callback.

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...


You’ll usually want memoized functions to have as few 
dependencies as possible. When you read some state only 
to calculate the next state, you can remove that dependency 
by passing an updater function instead:

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ No need for the todos dependency
  // ...

  Here, instead of making todos a dependency and reading 
  it inside, you pass an instruction about how to update 
  the state (todos => [...todos, newTodo]) to React. 


////////////////////////////////////////////////////////

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  **
  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

 useEffect(() => {
    const options = createOptions();
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // 🔴 Problem: This dependency changes on every render
  // ...




This creates a problem. as Every reactive value must be declared 
as a dependency of your Effect. However, if you declare 
createOptions as a dependency, it will cause your Effect 
to constantly reconnect to the chat room:

To solve this, you can wrap the function you need to call 
from an Effect into useCallback:

**
  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Only changes when roomId changes


  However, it’s even better to remove the need for a function 
  dependency. Move your function inside the Effect:
  instead of being a constant
  Now your code is simpler and doesn’t need useCallback. 
  Learn more about removing Effect dependencies.


/*////////////////////////////////////////////////////////////////////*/
/*

if you're writing a custom Hook
it's it’s recommended to wrap any functions that it returns 
into useCallback:
This ensures that the consumers of your Hook can optimize 
their own code when needed.


function useRouter() {
  const { dispatch } = useContext(RouterStateContext);

  const navigate = useCallback((url) => {
    dispatch({ type: 'navigate', url });
  }, [dispatch]);

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return {
    navigate,
    goBack,
  };
}


//Extracting your own custom Hook from a component 
//declare a function called useOnlineStatus 
and move all the duplicated code into it from
the components you wrote earlier
At the end of the function, return isOnline. 
This lets your components read that value:


import { useState, useEffect } from 'react';


function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}


//its App.js
import { useOnlineStatus } from './useOnlineStatus.js';

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}


naming conventions
React component names must start with a capital letter, like StatusBar
Hook names must start with use followed by a capital letter, like useState

Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent 
from every other call to the same Hook.

cont here: https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Components with many state updates spread across many 
event handlers can get overwhelming.
For these cases, you can consolidate all the 
state update logic outside your component
in a single function, called a reducer.

 For example, the TaskApp component below holds an array 
 of tasks in state and uses three different event handlers 
 to add, remove, and edit tasks:


import {useState} from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


//you can move that state logic into a single function outside 
your component, called a “reducer”.

handleAddTask(text) is called when the user presses “Add”.
handleChangeTask(task) is called when the user toggles a task or presses “Save”.
handleDeleteTask(taskId) is called when the user presses “Delete”.


Managing state with reducers is slightly different from 
directly setting state. Instead of telling React “what to do” 
by setting state, you specify “what the user just did” by 
dispatching “actions” from your event handlers. (The state 
update logic will live elsewhere!) So instead of “setting 
tasks” via an event handler, you’re dispatching an 
“added/changed/deleted a task” action. This is more 
descriptive of the user’s intent.

function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  });
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  });
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  });
}

A reducer function is where you will put your state logic. 
It takes two arguments, the current state and the action object, 
and it returns the next state:

function tasksReducer(tasks, action) {
  if (action.type === 'added') {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  } else if (action.type === 'changed') {
    return tasks.map((t) => {
      if (t.id === action.task.id) {
        return action.task;
      } else {
        return t;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter((t) => t.id !== action.id);
  } else {
    throw Error('Unknown action: ' + action.type);
  }
}



Because the reducer function takes state (tasks) as an argument, 
you can declare it outside of your component. 
This decreases the indentation level and can make 
your code easier to read.

//can use switch in this example

  switch (action.type) {
    case 'added': {
    case 'changed': {
    case 'deleted': {
    default: {
      throw Error('Unknown action: ' + action.type);


import {useReducer} from 'react';
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);


The useReducer Hook takes two arguments:

A reducer function
An initial state
And it returns:

A stateful value
A dispatch function (to “dispatch” user actions to the reducer)

import {useReducer} from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

//can be in a different file export and import into app.js
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


//We recommend using a reducer if you often encounter bugs 
due to incorrect state updates in some component, 
and want to introduce more structure to its code.

Just like with updating objects and arrays in regular state, 
you can use the Immer library to make reducers more concise. 
Here, useImmerReducer lets you mutate the state with push or 
arr[i] = assignment:

import {useImmerReducer} from 'use-immer';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

function tasksReducer(draft, action) {
  switch (action.type) {
    case 'added': {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case 'changed': {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case 'deleted': {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

Reducers must be pure, so they shouldn’t mutate state. But Immer provides you with a special draft object which is safe to mutate. Under the hood, Immer will create a copy of your state with the changes you made to the draft. This is why reducers managed by useImmerReducer can mutate their first argument and don’t need to return state.

Recap
To convert from useState to useReducer:
Dispatch actions from event handlers.
Write a reducer function that returns the next state for a given state and action.
Replace useState with useReducer.
Reducers require you to write a bit more code, but they help with debugging and testing.
Reducers must be pure.
Each action describes a single user interaction.
Use Immer if you want to write reducers in a mutating style.


example at the end:
https://react.dev/learn/extracting-state-logic-into-a-reducer


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Basic hooks:
useEffect, useContext, useState

//setWidth updates the previous width (passed as previousWidth parameter)
const [state, setState] = useState(initialState);
//this use state used in first render

function GrowingButton() {  
  const [width, setWidth] = useState(50);  
  
  // call setWidth with functional update  
  const increaseWidth = () => setWidth((previousWidth) => previousWidth + 10);  
  
  return (    
  <button style={{ width }} onClick={increaseWidth}>      
    I grow    
  </button>  
  );  
}


//   const [state, setState] = useState({ name: "React" });  
//        <pre>{JSON.stringify(state)}</pre>      


//you can use the previous property and the new property
const updateState = () =>  setState((prevState) => ({ 
   ...prevState, 
   creator: "Facebook" }));

//dependency
// after: if your goal is to run the callback only on mount 
//add dependencies to prevent eslint warning

useEffect(() => {  
  setState(prevState => prevState * 10)
}, [setState]) //remove state dependency. setState can be safely used here.



The initialState argument to useState is only used 
during your initial render.

However, if the initial state is a result of an expensive 
computation, you could also pass a function, which will be 
invoked only on initial render:
const [state, setState] = useState(() => yourExpensiveComputation(props))


//they are equal, it ignores the re-render.
//it’s important to note that in some cases, React may still 
render the specific component whose state was updated. 
That’s OK because React will not go deeper into the tree, i.e., 
render the component’s children.


Having such side effects in the main body of your function 
can lead to confusing bugs and inconsistent UIs. Don’t do this. 
Use useEffect.

useEffect(() => {  
  //this callback will be invoked after every render
  //useful since most of these shouldn’t block the browser 
  //from updating the screen.

  return () => {     
   //clean up the subscription     
   //The cleanup function is guaranteed to be invoked before 
   //the component is removed from the user interface.

   subscription.unsubscribeApi() 
  }

})

If you want your effect to run only on mount (clean up when unmounted), pass an empty array dependency:

useEfect(() => {
  console.log(props1 + props2 + props3)
},[])

but here, effect callback won’t be invoked when they change.
props if put in dependency will run
On mount and when prop changes

useEfect(() => {
  console.log(props1)
},[props1])

//and not passed as arguments to the effect function



////////////////

useLayoutEffect
has the same signature as useEffect
the only difference is in when it’s fired
i.e., when the callback function is invoked.

although useEffect is deferred until the browser 
has painted, it is still guaranteed to be fired before 
any re-renders. when state is updated again This is important.
React will always flush a previous render’s effect before starting a new update.

/*////////////////////////////////////////////////////////////////////*/
/*

const value = useContext(ContextObject) 

Note that the value passed to useContext must be the context 
object, i.e., the return value from invoking 
React.createContext — not ContextObject.Provider or 
ContextObject.Consumer.

and it returns the current value for that context

Note that using the useContext Hook within a component 
implicitly subscribes to the nearest Provider in the component 
tree

when the Provider updates, this Hook will trigger a re-render 
with the latest value passed to that Provider.


If the ancestor component uses React.memo or 
shouldComponentUpdate, a re-render will still happen 
starting at the component that calls useContext.

Remember that useContext only lets you read the context and
subscribe to its changes. You still need a context provider
i.e., ContextObject.Provider

//
const theme = {
  light: {background: "#fff"},
  dark: {background: "#000"}
}

// create context object with light theme as default
const ThemeContext = React.createContext(theme.light) 

function App() {
   return (
    // have context provider up the tree (with its value set)
    <ThemeContext.Provider value={theme.dark}>
       <Body />
    </ThemeContext.Provider>
 )
}

function Body() {
  //get theme value. Make sure to pass context object
  const theme = useContext(ThemeContext)
  return (
   {/* style element with theme from context/}
   <main style={{ background: theme.background, height: "50vh", color: "#fff" }}>
	 I am the main display styled by context!	
   </main>
  )
}


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Advanced Hooks

//useReducer
alternative to useState

const [state, dispatch] = useReducer(reducer, initialArgument, init) 

when invoked it returns an array that holds the current state 
value and a dispatch method

with usestate, the state updater function is invoked
to update state
with useReducer, you invoke the dispatch function and pass 
it an action i.e an object with a least a type property

dispatch({type: 'increase'})


when to favor useReducer over useState
when have a complex state logic that utilizes multiple sub-values
or when a state depends on the previous one

the reducer function
three arguments, 
1) the reducer, function type (state, action) => newState
takes the current state and an action object 
and returns a new state value

whenever you attempt to update state managed via useReducer
i.e calling dispatch
the current state value and the action argument passed to
dispatch
are passed on to the reducer

//receives current state and dispatched action
const reducer = (state, action) => {
       // return new state value 
   return state * 10 
}

const reducer = (state, action) => {
   // check action type  
   switch (action.type) {
    case "increase":
     //return new state
      return state * 10;
    default:
      return state;
  } 
}

export default function App() {
  const [width, dispatch] = useReducer(reducer, 50);

  // you update state by calling dispatch
  const increaseWidth = () => dispatch({ type: "increase" });

    return (
    <button style={{ width }} onClick={increaseWidth}>
      I grow
    </button>
  );
}



// two arguments 
useReducer(reducer, initialState)

// three arguments 
useReducer(reducer, initialArgument, init) 

const [state, dispatch] = useReducer(reducer, 10) // initial state will be 10



////Lazy initialization
can also create the initial state lazily. To do this, pass a third argument to useReducer: the init function.
const [state, dispatch] = useReducer(reducer, initialArgument, init) 

If you pass an init function, the initial state will be set 
to init(initialState), i.e., the function will be invoked 
with the second argument, initialArgument.

function init(someInitialValue) {
   return { state: someInitialValue }
}


function reducer(state, action) {
   switch(action.type) {
      //reset by calling init function
      case 'reset': 
        // an action object typically has a "type" and a "payload" 
		return init(action.payload)
   }
}
...
const initialValue = 10;
const [state, dispatch] = useReducer(reducer, initialValue, init)



f you try to update state with the same value as the current 
state, React won’t render the component children or fire 
effects, e.g., useEffect callbacks. React compares previous 
and current state via the Object.is comparison algorithm.

the main app may be rendered
child1,2,3 won't


////useCallback
The basic signature for useCallback looks like this:

const memoizedCallback = useCallback(callback, arrayDependency)

takes
callback argument
array dependency
and returns a memoized callback, guaranteed to have the same reference. It’s especially useful when passing callbacks to child components that depend on referential checks to prevent needless re-renders.

be sure to include all referenced variables within the 
callback in the array dependency

You should also take advantage of the official ESLint 
plugin to help with checking that your array dependency 
is correct and providing a fix.



Even though ExpensiveComponent is memoized via React.memo, 
it will still be re-rendered anytime App is re-rendered 
because the reference to the prop callback will change.

const App = () => {
   const handleCallback = () => {
     // do something important 
   }
   return <ExpensiveComponent callback={handleCallback}/>
}

const ExpensiveComponent = React.memo(({props}) => {
	// expensive stuff 
})


To keep the reference to callback the same, we can use the useCallback Hook:
Without passing an array dependency, useCallback will recompute 
the returned memoized callback on every render. 
Passing an empty array dependency means the memoized 
callback is only computed once: on mount.


const App = () => {
   // use the useCallback hook 
   const handleCallback = useCallback(() => {
     // do something important 
   }, [])   //array dependency
   return <ExpensiveComponent callback={handleCallback}/>
}

In such a case, it is important to have props1 and props2 
as part of the array dependency list.

const App = ({props1, props2}) => {
   const handleCallback = useCallback(() => {
     // do something important
     return props1 + props2 
   }, [props1, props2]) // see array dependency
   return <ExpensiveComponent callback={handleCallback}/>
}



what if props1 refers to a function
by placing the function as a dependency
be certain its reference does'nt change all the time
on all re-renders
if it does, then it defies the purpose of using useCallback
because the memoized callback returned by useCallback will change
every time props1 changes

if it changes
props1 could be memoized using useCallback or avoided


////useMemo
returns a memoized value
the callback for useMemo is "create function"
it is invoked and a value is returned
the returned value is what's memoized by useMemo


useCallback(fn, deps) === useMemo(() => fn, deps)

The statement above is true because useMemo invokes the 
“create” function () => fn. Remember that arrow functions 
implicitly return. In this case, invoking the “create” 
function returns fn . Making it equivalent to the useCallback 
alternative.

useMemo can be used as an optimisation to avoid expensive 
calculations on every render.

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

he rule of thumb is that your code should work without useMemo, 
then add useMemo for performance optimization.

//dependency, wont run on every dependency
const App = () => {
  useMemo(() => someExpensiveCalculation(), [])

  return null
}

With an empty array, it only runs on mount.
be sure to include all referenced variables within the callback in the array dependency.


////useRef
const refObject = useRef(initialValue)

useRef returns a mutable object whose value is set 
as: {current: initialValue}.

The difference between using useRef and manually setting an 
object value directly within your component, e.g., const 
myObject = {current: initialValue}, is that the ref object 
remains the same all through the lifetime of the component, 
i.e., across re-renders.

const App = () => {
   const refObject = useRef("value")
   //refObject will always be {current: "value"} every time App is re-rendered. 

   //update ref 
   refObject.current = "new value" 
  
  //refObject will always be {current: "new value"} 
}

A common use case for useRef is to store child DOM nodes:
function TextInputWithFocusButton() {
  //1. create a ref object with initialValue of null
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 4. `current` points to the mounted text input element
    // 5. Invoke the imperative focus method from the current property
    inputEl.current.focus();
  };

  return (
    <>
      {/* 2. as soon as input is rendered, the element will be saved in the ref object i.e {current: *dom node*}  /}
      <input ref={inputEl} type="text" />
      {/* 3. clicking the button invokes the onButtonClick handler above /}
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
} 

useRef returns a plain JavaScript object so it can be used 
for holding more than just DOM nodes; it can hold whatever 
value you want. This makes it the perfect choice for simulating 
instance-like variables in functional components:


In this example we log initialProp1 and prop1 via 
useEffect. This will be logged on mount and every time prop1 
changes.

const App = ({prop1}) => {
    // save props1 in ref object on render
	const initialProp1 = useRef(prop1)

    useEffect(() => {
       // see values logged here
       console.log({
         initialProp1: initialProp1.current,
         prop1
       })
    }, [prop1])
}

With this, you can go ahead and create instance like variables
that don’t change within your functional component.
useRef will give you the same ref object on every render.





////useImperativeHandle
useImperativeHandle(ref, createHandle, [arrayDependency])

useImperativeHandle takes a ref object and a createHandle 
function whose return value “replaces” the stored value in the 
ref object.

Note that useImperativeHandle should be used with forwardRef.

To forward the ref object to the Input child component, 
we use forwardRef as follows in TextInputWithFocusButton function above

const Input = forwardRef((props, ref) => {
  return <input ref={inputRef} {...props} />;
});

However, in this solution, the parent component App has 
full access to the input element, i.e., the inputRef declared 
in App holds the full DOM node for the child input element.

What if you want to hide the DOM node from the parent and 
just expose a focus function, which is basically all the 
parent needs?
That’s where useImperativeHandle comes in.

const Input = forwardRef((props, ref) => {
  // create internal ref object to hold actual input DOM node 
  const inputRef = useRef();
	
  // pass ref from parent to useImperativeHandle and replace its value with the createHandle function
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  // pass internal ref to input to hold DOM node
  return <input ref={inputRef} {...props} />;
});


The useImperativeHandle function argument returns an object. 
This object return value is set as the current property 
for the ref passed in from the parent.
Instead of the parent having full access to the entire 
DOM node, the inputRef in App will now 
hold {current: focus: ..}, where focus represents the function 
we defined within useImperativeHandle.

If you went ahead and logged the ref objects in the parent 
component App and child component Input, this becomes even more 
apparent:

If you need control over the re-computation of the value 
returned from the function argument to useImperativeHandle, 
be sure to take advantage of the array dependency list.




////useLayoutEffect
The signature for useLayoutEffect is identical to useEffect; 
the difference is the time of execution.

The useLayoutEffect callback/effects will be fired synchronously 
after all DOM mutations, i.e., before the browser has a 
chance to paint.

useLayoutEffect fires in the same phase as 
componentDidMount and componentDidUpdate,

Don’t block visual updates except when you’re absolutely 
sure you need to.

It’s also worth mentioning that with server-side rendering, 
neither useEffect nor useLayoutEffect are run until JavaScript 
is downloaded on the client.
You’ll get a warning with server-rendered components 
containing useLayoutEffect. To resolve this, you can either 
move the code to useEffect, i.e., to be fired after first 
render (and paint), or delay showing the component until 
after the client renders.

To exclude a component that needs layout effects from the 
server-rendered HTML, render it conditionally with 
showChild && <Child /> and defer showing it with 
useEffect(() => { setShowChild(true); }, []). 
This way, the UI doesn’t appear broken before hydration.


//useDebugValue
useDebugValue(value)
useDebugValue can be used to display a label for custom Hooks in React DevTools.

Consider the following basic custom Hook:

const useAwake = () => {
  const [state, setState] = useState(false);

  const toggleState = () => setState((v) => !v);

  return [state, toggleState];
};

A glorified toggle Hook. Let’s go ahead and use this custom Hook:

export default function App() {
  const [isAwake, toggleAwake] = useAwake();

  return (
    <div className="App">
      <h1>isAwake: {isAwake.toString()} </h1>
      <button onClick={toggleAwake}>Toggle awake!</button>
    </div>
  );
}

If you want to display a custom “label” in the DevTools, 
we can use the useDebugValue Hook as follows:

const useAwake = () => {
  const [state, setState] = useState(false);
  // look here
  useDebugValue(state ? "Awake" : "Not awake");
  ...
};


The custom label will now be displayed in the DevTools, as seen below:
hooks
Awake: "Not Awake"

N.B., don’t add debug values to every custom Hook. 
These are most valuable for custom Hooks that are part of 
shared libraries.

In some cases, formatting a value for display via 
useDebugValue might be an expensive operation. 
It’s also unnecessary to run this expensive operation 
unless a Hook is actually inspected. For such cases, 
you can pass a function to useDebugValue as a second argument.

useDebugValue(state ? "Awake" : "Not awake", val => val.toUpperCase());

In the example above, we avoid calling val.toUpperCase 
unnecessarily as it’ll only be invoked if the Hook is 
inspected in the React DevTools.



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

sharing logic between components becomes easier

const [stateName,useState]
is a js syntax to store in both variables

want to pass a reference not call the function

//syntaxes

<button onClick={sideHandler.bind(this, 'light)}> 
Light side
</button>

//use spread operator to get all properties of existing
state
//manually merging
//not the best option, better separate the states inside App

const App = props => {
    const [ stateName, setState] = useState({
        selectedCharacter: 1.
        destroyed: false
    });
}

const sideHandler = side => {
    setState({...stateName, side: side})
}


const [selectedCharacter, setSelectedCharacter] = useState("1");
const charSelectHandler = event => {
    const charId = event.target.value
    setSelectedCharacter(charId);
};
//if (selectedCharacter)



instead of this.state.something, this.props.something
we use something, props.something

use useEffect instead of componentDidMount
//with calling the function without this.
//after the component has to render finished
//whenever component rerenders
//props,state changes, 
//which changes when data fetched from the server
//this can cause an infinite loop
//so we put an empty array of dependencies to stop the loop
//or add external in code prop as dependency

import React, {useState, useEffect} from 'react';

return in useEffect
runs before every re-run of use effect
or when the component is removed
if want to only when unmount
use an empty dependency

can add many useEffects like useState


//should component update functionality
//used to disallow rerendering unless specific happens
//wrap all component with React.memo

export default Character;
to 
export default React.memo(Character, (prevProps, nextProps) => {
    return nextProps.selectedChar === prevProps.selectedChar //true or false
});

//stores it, only when inputs change/props will rerender


//with a function second argument that returns
true when props are equal (should not re-render)
false when props changed (it should re-render)
with two arguments
prevProps, nextProps
//useful when have props that could change that still should not tigger a re render


//useState returns an array of two elements state/statefunction

//http request can share with custom hooks
//http.js file

import { useState } from 'react;

export const useHttp = (urlProp, dependencies) => {

    const [myState, setmyState] = useState([]);

    //api fetch code fetch(urlProp)

    //custom hook
    //can return data: string,number,object,array or nothing
    useEffect(()=> {
        //code
    }, dependencies)


    return [myState1, myState2]

};

in app.js

const CharPicker = props => {
    const [isLoading, fetchedData] = usehttp('httlps://url', []);    //empty array dependency
    const selected Characters = fetchedData 
    ? fetchedData.result.slice(0,5).map((char,index) => ({
    name: char.name,
    id: index + 1
})); 
//the ? if data fetched run the code
//wont see http.js logs after first render as 
http request did not send another http request 

//always call hooks custom/generic 
outside of other hooks
top level
not nested in another function call, if statement, for loop
and use the useEffect inside the useHttp to not load every time

 
React is a library. It lets you put components together, 
but it doesn’t prescribe how to do routing and data fetching. 
To build an entire app with React, we recommend a full-stack 
React framework like Next.js or Remix.

People expect web app pages to load fast. On the server, 
React lets you start streaming HTML while you’re still 
fetching data, progressively filling in the remaining 
content before any JavaScript code loads. On the client, 
React can use standard web APIs to keep your UI responsive 
even in the middle of rendering.

People expect native apps to look and feel like their platform. 
React Native and Expo let you build apps in React for Android, 
iOS, and more. They look and feel native because their UIs are 
truly native. It’s not a web view—your React components render 
real Android and iOS views provided by the platform.







*/