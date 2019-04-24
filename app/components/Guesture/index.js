import React, { PureComponent } from 'react';
import { View, Animated, StyleSheet, Text, PanResponder, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
this.heightCurrent = 600;

export default class GustureComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      scaleY: new Animated.Value(1),
      heightCurrent: 600,
      toValueCurrent: 1
    }
  }

  componentDidMount() {
    const SPRING_CONFIG = { tension: 2, friction: 3 }; //Soft spring
    Animated.spring(this.state.pan, {
      ...SPRING_CONFIG,
      toValue: { x: 0, y: height - 300 }                        // return to start
    }).start();
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetResponder: (evt, gestureState) => true,
      onStartShouldSetResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetResponder: (evt, gestureState) => true,
      onMoveShouldSetResponderCapture: (evt, gestureState) => true,
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      // moving
      onPanResponderMove: (evt, gestureState) => {
        // this.props.updatePanPosition(gestureState.moveX, gestureState.moveY)
        console.log('gestureState666666', gestureState)
        return Animated.event([null, {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        }])(evt, gestureState)
      },
      onResponderTerminationRequest: (evt, gestureState) => {
        // console.log('gestureState', gestureState)
        return true
      },
      onPanResponderGrant: (evt, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        // this.state.pan.setValue({ x: 0, y: 0 })
        Animated.spring(
          this.state.scaleY,
          { toValue: 1, friction: 5 }
        ).start();
        console.log('gestureState', gestureState)
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }
      ]),
      onPanResponderRelease: (evt, gestureState) => {
        const { moveY } = gestureState;
        this.state.pan.flattenOffset();
        console.log('heightCurrentheightCurrentheightCurrentheightCurrent', this.state.heightCurrent);
        console.log('moveY', moveY);

        console.log('#######toValueTemp222222', height - moveY);
        console.log('#######toValueTemp1111111', height - this.state.heightCurrent);


        const toValueTemp = (height - moveY) / (height / 3);
        console.log('#######toValueTemp', toValueTemp.toFixed(2));
        this.setState({ toValueCurrent: toValueTemp });
        this.setState({ heightCurrent: moveY });
        Animated.spring(
          this.state.scaleY,
          { toValue: 1, friction: 5 }
          // { toValue: parseFloat(toValueTemp.toFixed(2)), friction: 5 }
        ).start();
        console.log('toValueCurrent', this.state.toValueCurrent);
        console.log('heightCurrent', this.state.heightCurrent);
        console.log('heightheightheight', height);
        console.log('gestureStatePanResponderRelease', gestureState);
        this.setState({

          locationX: evt.nativeEvent.locationX.toFixed(2),

          locationY: evt.nativeEvent.locationY.toFixed(2)

        });
      },
      moveThreshold: 2,
      debug: false
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animated,
        {
          transform: [
            { scaleY: this.state.scaleY },
            // { translateX: this.state.pan.x },
            // { translateY: this.state.pan.y }
          ]
        }]}
          {...this._panResponder.panHandlers}>
          <Text style={{ color: 'white', height: height / 20 }}>{`this.state.pan.x[0]${this.state.pan.x._value}`}</Text>
          <Text style={{ color: 'white', height: 30 }}>{`this.state.pan.x[0]${this.state.pan.y._value}`}</Text>
          <Text style={{ color: 'white', height: 30 }}>X: {this.state.locationX}, Y: {this.state.locationY}</Text>
        </Animated.View>

      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    width: width,

  },
  animated: {
    height: height / 3,
    width: width,
    backgroundColor: 'black',
    // position: 'absolute',
  }
});
