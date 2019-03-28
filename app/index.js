
/**
 * Sample React Native BookingCar
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import withConnect from './withConnect';
import { serviceApi } from '../redux/action';
// @withConnect
class Everyday extends React.PureComponent {
    static propTypes = {
        getArticles: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.getArticles = this.props.getArticles.bind(this);
    }
    componentDidMount() {
        this.getArticles('full-size-articles');
        // this.getCurrentPosition();
        // console.log('statusBarHeight: ', StatusBar.currentHeight);

    }
    render() {
        return (
            <View>
                <Text>{'hello'}</Text>
                <Text>{'hello'}</Text>
                <Text>{'hello'}</Text>
                <Text>{'hello'}</Text>
                <Text>{'hello'}</Text>
            </View>
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