import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, Animated, ScrollView, Dimensions } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = {
  height: Dimensions.get('window').height
};

export default class InteractableExample extends PureComponent {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
    this.state = {
      canScroll: false
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ backgroundColor: '#542790', height: 250, alignItems: 'center' }}>
          <Animated.View style={{
            transform: [
              {
                translateY: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [-48, -48, 0, 0]
                })
              },
              {
                scale: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [0.3, 0.3, 1, 1]
                })
              }
            ]
          }}>
            <View style={{ width: 150, height: 150, backgroundColor: 'black', borderRadius: 75, marginTop: 50 }} />
          </Animated.View>
        </View>

        <Interactable.View
          verticalOnly={true}
          snapPoints={[{ y: 0 }, { y: -150, id: 'bottom' }]}
          boundaries={{ top: -150 }}
          onSnap={this.onSnap.bind(this)}
          animatedValueY={this._deltaY}
          showsVerticalScrollIndicator={false}
        >
          <ScrollView
            bounces={false}
            scrollEnabled={this.state.canScroll}
            onScroll={this.onScroll.bind(this)}
            style={{ left: 0, right: 0, height: Screen.height - 150, backgroundColor: '#e0e0e0' }}
          >
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
            <View style={styles.placeholder} />
          </ScrollView>
        </Interactable.View>

      </View>
    );
  }
  onSnap(event) {
    const { id } = event.nativeEvent;
    console.log('id', id);
    if (id === 'bottom') {
      // this.setState({ canScroll: true });
    }
  }
  onScroll(event) {
    const { contentOffset } = event.nativeEvent;
    console.log('contentOffset', contentOffset);
    if (contentOffset.y == 0) {
      this.setState({ canScroll: false });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  placeholder: {
    backgroundColor: '#65C888',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20
  }
});