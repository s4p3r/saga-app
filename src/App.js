import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increment, incrementAsync} from './actions/counter';
import {get_users} from './actions/users';

function App({counter, increment,incrementAsync, get_users, users}) {

  const {isFetch, error, user} = users;

  console.log(users)

  let data;
  if(error) {
    data = error;
  } else if (isFetch) {
    data = "Loading..."
  }else{
    data = user && user.data[0].name
  }

  return (
    <div className="App">
    <p>{counter}</p>
     <button onClick={increment}>+</button>
     <br/>
     <button onClick={incrementAsync}>async+</button>
     <br/>
     <button onClick={get_users}>Get Users</button>
     <h1>{data}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count,
    users: state.users
  }
}


export default connect(mapStateToProps, {increment, incrementAsync, get_users})(App);
