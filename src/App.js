import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB01gCHM_f6QOGbAvqcOVCQw_eiJkyvZRc',
      authDomain: 'manager-974c0.firebaseapp.com',
      databaseURL: 'https://manager-974c0.firebaseio.com',
      projectId: 'manager-974c0',
      storageBucket: 'manager-974c0.appspot.com',
      messagingSenderId: '966066821986'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
