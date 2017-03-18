
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import {AsyncStorage} from 'react-native';

import RootContainer from './RootContainer';
import rootReducer from '../reducers';

import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

import { fetchList } from '../actions';
import TestA from '../components/TestA';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(sagaMiddleware),
    autoRehydrate()
  )
)


sagaMiddleware.run(saga);


class App extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false }
  }
  componentWillMount(){
    persistStore(
      store, 
      {storage: AsyncStorage},
      () => {
        this.setState({ rehydrated: true }, () => {
      },

      )
    })
  }
  render() {
    return (
      <Provider store={store}>  
        <RootContainer />
      </Provider>
    )
  }
     
}

export default App;

