// 01-Create-a-Redux-Store
const reducer = (state = 5) => {
    return state;
}
const store = Redux.createStore(reducer);


// 02-Get-State-from-the-Redux-Store.js
const store = Redux.createStore(
    (state = 5) => state
);

// Change code below this line
const currentState = store.getState();

console.log(currentState);


// 03-Define-a-Redux-Action.js
const action = {
    type: 'LOGIN'
};

// 04-Define-an-Action-Creator.js
const action = {
    type: 'LOGIN'
};
// Define an action creator here:
const actionCreator = () => action;

// 05-Dispatch-an-Action-Event.js

const store = Redux.createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

// Dispatch the action here:
store.dispatch(loginAction());

// 06-Handle-an-Action-in-the-Store
const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN': return { ...state, login: true }
        default: return state;
    }
    // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
    return {
        type: 'LOGIN'
    }
};

// 07-Use-a-Switch-Statement-to-Handle-Multiple-Actions
const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {
    // Change code below this line
    switch (action.type) {
        case 'LOGIN': return { ...state, authenticated: true };
        case 'LOGOUT': return { ...state, authenticated: false };
        default: return state;
    }
    // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: 'LOGIN'
    }
};

const logoutUser = () => {
    return {
        type: 'LOGOUT'
    }
};

// 08-Use-const-for-Action-Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
    authenticated: false
};

const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }

        default:
            return state;

    }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
    return {
        type: LOGIN
    }
};

const logoutUser = () => {
    return {
        type: LOGOUT
    }
};

// 09-Register-a-Store-Listener
const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const cb = () => count++;
store.subscribe(cb);
// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);

// 10-Combine-Multiple-Reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true
            }
        case LOGOUT:
            return {
                authenticated: false
            }
        default:
            return state;
    }
};

const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
});

const store = Redux.createStore(rootReducer);


// 11-Send-Action-Data-to-the-Store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
    switch (action.type) {
        // Change code below this line
        case ADD_NOTE: return action.text;
        // Change code above this line
        default:
            return state;
    }
};

const addNoteText = (note) => {
    // Change code below this line
    return {
        type: ADD_NOTE,
        text: note
    }
    // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// 12-Use-Middleware-to-Handle-Asynchronous-Actions
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

const requestingData = () => { return { type: REQUESTING_DATA } }
const receivedData = (data) => { return { type: RECEIVED_DATA, users: data.users } }

const handleAsync = () => {
    return function (dispatch) {
        // Dispatch request action here
        dispatch(requestingData());
        setTimeout(function () {
            let data = {
                users: ['Jeff', 'William', 'Alice']
            }
            // Dispatch received data action here
            dispatch(receivedData(data));
        }, 2500);
    }
};

const defaultState = {
    fetching: false,
    users: []
};

const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: []
            }
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users
            }
        default:
            return state;
    }
};

const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);

// 13-Write-a-Counter-with-Redux
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        default: return state;
    }
};

const incAction = () => ({
    type: INCREMENT
});

const decAction = () => ({
    type: DECREMENT
});

const store = Redux.createStore(counterReducer);

// store.dispatch(incAction());
// store.dispatch(incAction());
// store.dispatch(incAction());
// store.dispatch(decAction());
// store.dispatch(incAction());
// store.dispatch(decAction());
// console.log(store.getState());


// 14-Never-Mutate-State
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // Don't mutate state here or the tests will fail
            return [...state, action.todo]
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo
    }
}

const store = Redux.createStore(immutableReducer);


// 15-Use-the-Spread-Operator-on-Arrays
const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch (action.type) {
        case 'ADD_TO_DO':
            // Don't mutate state here or the tests will fail
            return [...state, action.todo];
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: 'ADD_TO_DO',
        todo
    }
}

const store = Redux.createStore(immutableReducer);


// 16-Remove-an-Item-from-an-Array
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            // Don't mutate state here or the tests will fail
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1, state.length)
            ];
        default:
            return state;
    }
};

const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        index
    }
}

const store = Redux.createStore(immutableReducer);

// 17-Copy-an-Object-with-Object.assign
const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ONLINE':
            // Don't mutate state here or the tests will fail
            // return { ...state, status: 'online' };
            return Object.assign({}, state, { status: 'online' });
        default:
            return state;
    }
};

const wakeUp = () => {
    return {
        type: 'ONLINE'
    }
};

const store = Redux.createStore(immutableReducer);
