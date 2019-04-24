
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import AutoScrolling from "react-native-auto-scrolling";

export default class AutoScroll extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <AutoScrolling style={styles.scrolling2} endPadding={50} duration={6000}>
          <View style={styles.test}>
            <Text style={styles.welcome}>MERRY CHRISTMAS AND HAPPY NEW YEAR</Text>
            <Text style={styles.welcome}>NGON ROI</Text>
          </ View>
        </AutoScrolling>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  image: {
    width: 200,
    height: 200
  },
  scrolling1: {
    width: 400,
    padding: 10,
    marginBottom: 10
  },
  scrolling2: {
    backgroundColor: "red",
    width: 400,
    padding: 10,
    marginBottom: 10
  },
  welcome: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10
  }
});
