
/**
 * Sample React Native BookingCar
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Platform, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AutoScroll from './components/autoScroll';
import ScrollLoop from './components/scrollLoop';
import ScrollViewCustom from './components/scrollCustom';
import GustureComponent from './components/Guesture';
// import ShowCase from './components/Guesture/libGestures';
// import withConnect from './withConnect';
import InteractableExample from './components/Interactable'
import I18n from '../I18n';
import { serviceApi } from '../redux/action';
// @withConnect
class Everyday extends React.PureComponent {
    static propTypes = {
        getArticles: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        I18n.locale = 'en';
        this.getArticles = this.props.getArticles.bind(this);
    }
    componentDidMount() {
        // this.getArticles('full-size-articles');
    }
    render() {
        return (
            <InteractableExample />
            // <AutoScroll />
            // <ScrollViewCustom />
            // <ScrollLoop />
            // <View>
            // <GustureComponent />
            // </View>
            // <ShowCase />
        );
    }
}

function mapStateToProps(state) {
    //   const { userData } = state.auth;
    //   const {
    //     fitnessTypeIndices, fitnessTypes, studioByBrandIndices, studiosByCity,
    //   } = state.staticData;
    return { state };
}
function mapDispatchToProps(dispatch) {
    return {
        getArticles: type => dispatch(serviceApi.getArticleCategories(type)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Everyday);