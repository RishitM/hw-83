import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from './StoryCard'
export default class Feed extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Profile</Text>
      </View>
    );
  }
}
