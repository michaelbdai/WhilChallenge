import { View, TouchableOpacity, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import React, { Component } from 'react';
import ItemContainer from '../containers/ItemContainer';


export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastItem: 7,
    }
    this.handleScroll = 
      (() => {
        let flag = false;
        let offset = 0;
        return (e) => {
          if (!flag && offset < e.nativeEvent.contentOffset.y) {
            console.log('Loading more items');
            flag = true;
            offset = e.nativeEvent.contentOffset.y;
            this.setState({
              lastItem: this.state.lastItem + 2
            })
            setTimeout(function() {
              flag = false;
            }, 100);
          }
        }
      })().bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.props.handleRefresh}
          >
            <Text style={styles.buttonText}>Refresh</Text>
          </TouchableOpacity>

        <ScrollView onScroll={this.handleScroll} >
        {this.props.dataArray.slice(0, this.state.lastItem).map(id => (
          <ItemContainer
            key={id}
            itemId={id}
          />))}
        </ScrollView>
      </View>
    )
  }
}
var {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: height - 50,
    backgroundColor: 'silver'    
  },
  button: {
    backgroundColor: 'whitesmoke',
    // margin: 5,
    padding: 15,
  },
  buttonText: {
    marginTop: 7,
    textAlign: 'center',
  }
})

