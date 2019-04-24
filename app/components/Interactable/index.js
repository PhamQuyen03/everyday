import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Interactable from 'react-native-interactable';

export default class InteractableExample extends PureComponent {
  constructor(props) {
    super(props);

  }
  onDrawerSnap() {
    console.log('quyen');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", }}>
        <Interactable.View
          // horizontalOnly={true}
          snapPoints={[{ x: 0 }, { x: -200 }]}
          onSnap={this.onDrawerSnap}>
          <Text>{'quyen'}</Text>
        </Interactable.View>
      </View>
    )
  }
}

