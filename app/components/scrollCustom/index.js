import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, AppRegistry } from 'react-native';

const SCROLLVIEW_REF = 'scrollview';

export default class ScrollViewCustom extends PureComponent {

  state = { height: 0, autoPlay: true };

  constructor(props) {
    super(props);
    this._currentIndex = 0;
    this._childrenCount = 5;
    this._goToNextPage = this._goToNextPage.bind(this);
    this._onScroll = this._onScroll.bind(this);
    this._startAutoPlay = this._startAutoPlay.bind(this);
    this._stopAutoPlay = this._stopAutoPlay.bind(this);
    this._onScrollViewLayout = this._onScrollViewLayout.bind(this);


  }

  componentDidMount() {
    if (this.state.autoPlay) this._startAutoPlay()
    else this._stopAutoPlay();
  }
  _goToNextPage() {
    this._stopAutoPlay();
    let nextIndex = this._currentIndex + 1 % this._childrenCount;
    this.refs[SCROLLVIEW_REF].scrollTo({ y: this.state.height * nextIndex });
  }

  _startAutoPlay() {
    this._timeId = setInterval(this._goToNextPage, 5000);
  }

  _stopAutoPlay() {
    if (this._timeId) {
      clearInterval(this._timeId);
      this._timeId = null;
    }
  }

  _onScrollViewLayout(event) {
    let { height } = event.nativeEvent.layout;
    this.setState({ height: height });
  }
  _onScroll(event) {
    let { y } = event.nativeEvent.contentOffset, offset, position = Math.floor(y / this.state.height);
    if (y === this._preScrollY) return;
    this._preScrollY = y;
    offset = y / this.state.height - position;

    if (offset === 0) {
      this._currentIndex = position;
      this._timeId = setInterval(this._goToNextPage, 5000);
    }
  }

  render() {
    const containerHeight = 400;
    const childHeight = 100;
    const margin = (containerHeight - childHeight) / 2;
    return (
      <View style={{ height: containerHeight, backgroundColor: 'white', flex: 1 }}>
        <ScrollView
          onScroll={this._onScroll}
          onLayout={this._onScrollViewLayout}
          ref={SCROLLVIEW_REF}
          pagingEnabled={true}
          scrollEventThrottle={8}>
          <View style={{ flex: 1, }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'red', margin: margin }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'black', margin: margin }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow', margin: margin }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue', margin: margin }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'gray', margin: margin }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({

});
