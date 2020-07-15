'use strict'
import React from "react";
import {View} from 'react-native'

const DEFAULT_CONFIG = {
  // react-native-web 平台使用的
  otherImageViewr: <View />,

  imageViewer: {
    // 下面是 imageView 使用的配置
    underlayColor: '#F2F2F2',

    iphonexBottom: 50,
    phoneBottom: 40,

    // 可以替换 image-viewer.style.js
    ImageStyles: null,
  },
  zoom: { // 3 种 配置样式，可以配合使用

    // 采用样式: 1 > 3 > 2

    // 1. 可以在props 配置，如果为统一配置，可以采用下面配置

    // 2. style -> container 样式
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#B0C4DE',

    // 3. 可以替换 image-zoom.style.js
    styles: { // 可以不用上面的配置，可以自定义
      container : null,
    },
  }
}



export default class RXImageViewerStyle {
  static get store() {
    if (!this._store) {
      this._store = DEFAULT_CONFIG;
    }
    return this._store;
  }

  static initApi (config) {
    if (!config) {
      throw new Error('RXImageViewerStyle -> initApi() -> config=null');
    }
    Object.assign(this.store, config)
  }
}