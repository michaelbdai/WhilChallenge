
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import {AsyncStorage} from 'react-native';
import createSagaMiddleware from 'redux-saga';

import saga from '../sagas';
import RootContainer from './RootContainer';
import rootReducer from '../reducers';
import Loading from '../components/Loading';

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
        this.setState({ rehydrated: true }, () => {})
      }
    )
  }
  render() {
    if (this.state.rehydrated) {

      return (
        <Provider store={store}>  
          <RootContainer />
        </Provider>
      )
    } else {
      return (<Loading />)
    }
  }
     
}

export default App;

