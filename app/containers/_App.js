
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';


import RootContainer from './RootContainer';
import rootReducer from '../reducers';

import createSagaMiddleware from 'redux-saga';
import saga from '../sagas';

import { fetchList } from '../actions';

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
    // { list, initialFetch } = this.props;
    // list = this.props.list;
    // initialFetch = this.props.initialFetch;
    // persistStore(store, {}, () => {
    //   this.setState({ rehydrated: true }, () => {
    //     // if (list.length === 0) {
    //     //   initialFetch();
    //     // } 
    //   })
    // })
  }
  render() {
    if(!this.state.rehydrated){
      console.log('------')

      return (<div>Loading...</div>)
    }
    return (
      <Provider store={store}>
        {() => <RootContainer />}
      </Provider>
    )
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   initialFetch: () => {
//       dispatch(fetchList());
//     },
// })
// const mapStateToProps = (state) => ({
//   list: state.list,
// })
// App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;

/*
// const store = createStore(rootReducer, applyMiddleware(
//   sagaMiddleware
// ), autoRehydrate());
// const store = createStore(reducer, undefined, autoRehydrate())


// import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
// import reducer from '../reducers'

// const store = compose(autoRehydrate())(createStore)(reducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

 */
