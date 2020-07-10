/**
 * 
 */
"use strict";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TestNavConfig from './navigation/config';

const Navigator = createStackNavigator({
  ...TestNavConfig
}, {
  initialRouteName: 'index',
  headerMode: 'screen',
  mode: 'card',
  defaultNavigationOptions: () => ({
    gesturesEnabled: true,
    headerStyle: {
      backgroundColor: '#54FF9F',
      shadowColor: 'transparent',
      shadowOpacity: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: '#698B69',
      elevation: 0,
    }
  })
})
export default createAppContainer(Navigator);
