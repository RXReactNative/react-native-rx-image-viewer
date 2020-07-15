import React, { Component } from "react";

import {
  Text,
  View,
  ScrollView,
} from 'react-native'


export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>react-native-image-pan-zoom</Text>
        <ScrollView>

        </ScrollView>
      </View>
    )
  }
}