import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

const SECTIONS = [
  {
    code: 'CLE.CME',
    listCode: {
      'CLE#1.CME': {
        name: 'CRUDE LIGHT (1) (CONTINUOS: CURRENT CONTRACT IN FRONT)',
        logo: '../../asset/images/uc.png',
        type: 'Equity'
      },
      'CLE1.1.CME': {
        name: 'CRUDE LIGHT (GLOBEX): MAY 2019',
        logo: '../../asset/images/uc.png',
        type: 'Equity'
      },
      'CLE1.2.CME': {
        name: 'CRUDE LIGHT (GLOBEX): MAR 2019',
        logo: '../../asset/images/uc.png',
        type: 'Equity'
      }
    }
  },
  {
    code: 'CLE.CME1',
    listCode: {
      'CLE#2.CME1': {
        name: 'CRUDE LIGHT (21) (CONTINUOS: CURRENT CONTRACT IN FRONT)',
        logo: '../../asset/images/uc.png',
        type: 'Equity'
      },
      'CLE2.1.CME1': {
        name: 'CRUDE LIGHT (22) (CONTINUOS: CURRENT CONTRACT IN FRONT)',
        logo: '../../asset/images/uc.png',
        type: 'Equity'
      },
      'CLE2.2.CME1': {
        name: 'CRUDE LIGHT (23) (CONTINUOS: CURRENT CONTRACT IN FRONT)',
        logo: '../../asset/images/uc.png',
        type: 'Equity'
      }
    }
  },
];

export default class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View >
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };

  _renderHeader = (section, index, isActive, sections) => {
    const textColor = isActive ? '#359ee4' : '#c5cbce';
    const UpOrDown = isActive ? <Icon name="chevron-down" style={{ marginLeft: 5 }} size={8} color={textColor} /> : <Icon style={{ margin: 5 }} name="chevron-up" size={8} color={textColor} />
    return (
      <View style={{ flexDirection: 'row', }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Icon name="plus" size={8} color={textColor} style={{ marginLeft: 5 }} />
          {UpOrDown}
          <Text style={{ color: textColor, marginLeft: 5 }}>{section.code}</Text>
        </View>
      </View>
    );
  };


  _renderRowConten = ({ item }) => {
    console.log('item##########', item.logo);
    const pathLogo = item.logo;
    console.log('pathLogo##########', pathLogo);
    return (
      <View style={styles.content}>
        <View style={styles.subCode}>
          <Icon name="plus" size={8} color={'#c5cbce'} style={{ flex: 2, paddingLeft: 8 }} />
          <Text style={{ flex: 8, fontSize: 12, fontFamily: 'HelveticaNeue-Medium', overflow: 'hidden', paddingLeft: 3, color: '#c5cbce' }} numberOfLines={1} ellipsizeMode="tail" >{item.key}</Text>
        </View>
        <View style={styles.detailCode}>
          <Image
            resizeMethod='resize'
            resizeMode='center'
            source={require('../../asset/images/uc.png')}
          // source={require(pathLogo)}
          // source={{ uri: item.logo }}
          />
          <Text style={{ fontSize: 12, fontFamily: 'HelveticaNeue-Medium', overflow: 'hidden', flex: 1, color: '#c5cbce' }} numberOfLines={1} ellipsizeMode="tail" >{item.name}</Text>
        </View>
        <View style={styles.typeCode}>
          <Text style={{ fontSize: 12, fontFamily: 'HelveticaNeue-Medium', overflow: 'hidden', color: '#c5cbce' }}>{item.type}</Text>
        </View>
      </View>
    )
  }

  _renderContent = section => {
    const { listCode } = section;
    const arrayList = _.flatMap(listCode, (item, key) => {
      item.key = key;
      return { ...item }
    })
    return (
      <View style={styles.containerContent}>
        {/* {this._renderRowConten(listCode)} */}
        <FlatList
          data={arrayList}
          // showsVerticalScrollIndicator={false}
          renderItem={this._renderRowConten}
          keyExtractor={item => item.key}
        />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        // renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
  },
  content: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  subCode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 3,
  },
  detailCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    overflow: 'hidden',
    flex: 8
  },
  logoDetailCode: {

  },
  typeCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
    flex: 3,
    justifyContent: 'flex-end',
  }

});