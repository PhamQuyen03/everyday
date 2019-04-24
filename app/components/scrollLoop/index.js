import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, } from 'react-native';
import InfiniteScroll from 'react-native-infinite-looping-scroll';


export default class ScrollLoop extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <InfiniteScroll
          data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }]}
          renderItem={({ item }) => <View style={styles.listItem}><Text>{item.key}</Text></View>}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});