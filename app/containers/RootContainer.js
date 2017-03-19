
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';

// containers
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import { fetchList, resetState } from '../actions';

class RootContainer extends Component {
  constructor(props) {
    super(props)

  }  
  componentWillMount(){
    const dataArray = this.props.dataArray;
    const initialFetch = this.props.initialFetch;
    console.log('favs in persist', this.props.favs)
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
            component={ListScreen}
            title="List"
          />
          <Scene
            key="detailScreen"
            component={DetailScreen}
            title="Details"
          />
        </Scene>
      </Router>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  initialFetch: () => {
      // console.log('fetching...')
      dispatch(fetchList());
    },
  cleanData: () => {
      dispatch(resetState());
    }
})
const mapStateToProps = (state) => ({
  dataArray: state.dataArray,
  favs: state.favs,
})
RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainer)
export default RootContainer

