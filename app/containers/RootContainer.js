
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

// containers
// import ListScreen from './ListScreen';
// import DetailScreen from './DetailScreen';
import { fetchList } from '../actions';
// Styles
// import styles from './Styles/RootContainerStyle';

// Test
import TestA from '../components/TestA';
import TestB from '../components/TestB';

class RootContainer extends Component {
  constructor(props) {
    super(props)

  }  
  componentWillMount(){
    const dataArray = this.props.dataArray;
    const initialFetch = this.props.initialFetch;
    console.log(dataArray);
    if (dataArray.length === 0) {
      this.props.initialFetch();
    }
  }  
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            initial
            key="listScreen"
            component={TestA}
            title="List"
          />
          <Scene
            key="detailScreen"
            component={TestB}
            title="details"
          />
        </Scene>
      </Router>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  initialFetch: () => {
      console.log('fetching...')
      dispatch(fetchList());
    },
})
const mapStateToProps = (state) => ({
  dataArray: state.dataArray,
})
RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainer)
export default RootContainer

