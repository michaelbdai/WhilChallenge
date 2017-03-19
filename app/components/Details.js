/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let itemId = this.props.selectedId;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: this.props.thumbnails[itemId]}}
        /> 
        <Text style={styles.title}>
          {this.props.titles[itemId]}
        </Text>
        <Text style={styles.details}>
          {`Author: ${this.props.authors[itemId]}`}
        </Text>
        <Text style={styles.details}>
          {`Votes: ${this.props.ups[itemId]}`}
        </Text>
        <TouchableHighlight onPress={() => this.props.handleFavChange(itemId)}>
          <View style={styles.button}>
          { this.props.favs[itemId] ? 
            (<Text style={styles.buttonText}> Unfavorite </Text>) :
            (<Text style={styles.buttonText}> Mark as favorite </Text>)
          }
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F5FCFF',
    margin: 5,
  },
  image: {
    marginLeft: 10,
    marginTop: 50,
    width: 300, 
    height: 300,

  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 5,
    marginTop: 5,
  },
  details: {
    textAlign: 'center',
    color: '#333333',
    margin: 3
  },
  button: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
  }  
});