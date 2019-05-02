import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Animated, Dimensions } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = Dimensions.get('window');
const SideMenuWidth = 280;
const RemainingWidth = Screen.width - SideMenuWidth;

export default class TestCustom extends Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(0);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#32B76C', height: 250, alignItems: 'center', flex: 1 }}>
          <Animated.View style={{
            transform: [
              {
                translateY: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [-60, -60, 0, 0]
                })
              },
              {
                scale: this._deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [0.1, 0.1, 1, 1]
                })
              }
            ]
          }}>
            <View style={{ width: 100, flex: 1, backgroundColor: '#EE2C38', borderRadius: 75, marginTop: 50, marginBottom: 50 }} />
          </Animated.View>
        </View>
        <View style={styles.sideMenuContainer} >

          <Interactable.View
            ref='menuInstance'
            verticalOnly={true}
            snapPoints={[{ y: Screen.height / 2 }, { y: -50 }, { y: 0 }]}
            // boundaries={{ right: RemainingWidth / 2 }}
            // initialPosition={{ y: Screen.height / 2 }}
            // boundaries={{ top: -150 }}
            animatedValueY={this._deltaY}
            style={{ height: Screen.height / 2, flex: 3 }}
          >
            <View style={styles.sideMenu}>
              <Text style={styles.sideMenuTitle}>Menu</Text>
              <TouchableOpacity onPress={() => alert('Button 1 pressed')}>
                <Text style={styles.button}>Button 1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Button 2 pressed')}>
                <Text style={styles.button}>Button 2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Button 3 pressed')}>
                <Text style={styles.button}>Button 3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onClosePress.bind(this)}>
                <Text style={styles.button}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Interactable.View>
        </View>
      </View>
    );
  }
  onMenuPress() {
    // this.refs['menuInstance'].changePosition({ y: 300 });
  }
  onClosePress() {
    // this.refs['menuInstance'].setVelocity({ x: -2000 });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  sideMenuContainer: {
    flex: 3,
    width: Screen.width,
    flexDirection: 'column',
  },
  sideMenu: {
    backgroundColor: '#e0e0e0',
  },
  sideMenuTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    color: '#542790',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#32B76C',
    alignItems: 'center',
    zIndex: 1001
  },
  body: {
    flex: 1,
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    marginTop: 50
  },
  headerTitle: {
    marginLeft: 24,
    color: 'white',
    fontSize: 20
  },
  content: {
    fontSize: 18
  }
});