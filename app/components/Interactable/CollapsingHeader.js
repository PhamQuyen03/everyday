import React, { Component } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import Interactable from 'react-native-interactable';
const Screen = Dimensions.get('window');

export default class CollapsingHeader extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ backgroundColor: '#32B76C', height: 250, alignItems: 'center' }}>
          <Animated.View style={{
            transform: [
              {
                translateY: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [-45, -45, 0, 0]
                })
              },
              {
                scale: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [0.4, 0.4, 1, 1]
                })
              }
            ]
          }}>
            <View style={{ width: 150, height: 150, backgroundColor: '#EE2C38', borderRadius: 75, marginTop: 50 }} />
          </Animated.View>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -150 }]}
          boundaries={{ top: -150 }}
          animatedValueY={this._deltaY}>
          <View style={{ left: 0, right: 0, height: Screen.height, backgroundColor: 'black' }} />
        </Interactable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  }
});