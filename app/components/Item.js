import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

export default class Item extends Component {
  constructor (props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.itemId === nextProps.itemId &&
      this.props.favs[this.props.itemId] === nextProps.favs[nextProps.itemId]) {
      return false;
    } else {
      return true;
    }
  }
  handleSelect(itemId) {
    NavigationActions.detailScreen({selectedId: itemId});
  }
  render() {
    let itemId = this.props.itemId;
    let title = this.props.titles[itemId].length < 40 ?
      this.props.titles[itemId] : `${this.props.titles[itemId].slice(0, 40)} ...`;
    return (
      <View style={styles.container} >
        <TouchableHighlight 
          onPress={() => this.handleSelect(this.props.itemId)}
          style={styles.imgContainer}
        >
          <Image
            style={styles.image}
            source={{uri: this.props.thumbnails[itemId]}}
          />          
        </TouchableHighlight>
        <View style={styles.textContainer}>
          <TouchableHighlight 
            onPress={() => this.handleSelect(this.props.itemId)}
          >
            <Text style={
              this.props.favs[this.props.itemId] ?
              styles.redTitle :
              styles.title
            }>
              {title}
            </Text>
          </TouchableHighlight>  
          <Text style={styles.details}>
            {`Author: ${this.props.authors[itemId]}`}
          </Text>
          <Text style={styles.details}>
            {`Votes: ${this.props.ups[itemId]}`}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    marginTop: 5,
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
    marginTop: 5,
    width: 100, 
    height: 100,

  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5,
  },
  redTitle: {
    color: 'red',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 5,
    marginTop: 5,
  },  
  details: {
    textAlign: 'left',
    color: '#333333',
    margin: 3
  },
});

