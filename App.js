/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import buildStore from './redux/store/index';
import Everyday from './app/index';

const store = buildStore();

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Everyday />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#262b3e',
  },
});