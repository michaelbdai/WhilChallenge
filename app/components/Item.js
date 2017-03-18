import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class List extends Component {

  renderItem = (text, i) => {
    const {onPressItem} = this.props

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(i)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const {list} = this.props

    return (
      <View>
        {list.map(this.renderItem)}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    padding: 15,
  },
})
const sampleData = {
  "thumbnail": "https://a.thumbs.redditmedia.com/yyO6rGE7CrWwnx0OIdYClfG5yasN55p5ig-B16KZuk0.jpg",
  "author": "plasmabitch",
  "title": "PSA: Trump's budget would strip $3 billion from the Community Development Block Grant program, which supports a variety of community-development and anti-poverty programs. Those include Meals on Wheels, which provided 219 million meals to 2.4 million seniors in 2016. r/all should see the truth.",
  "ups": 10128,

}
