import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increment, incrementAsync} from './actions/counter';
import {get_users} from './actions/users';

function App({counter, increment,incrementAsync, get_users}) {
  return (
    <div className="App">
    <p>{counter}</p>
     <button onClick={increment}>+</button>
     <br/>
     <button onClick={incrementAsync}>async+</button>
     <br/>
     <button onClick={get_users}>Get Users</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count
  }
}


export default connect(mapStateToProps, {increment, incrementAsync, get_users})(App);
