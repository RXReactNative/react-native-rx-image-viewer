var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 
 */
import * as React from "react";
import { View, ViewPropTypes } from 'react-native';

import * as PropTypes from "prop-types";

//-------------------------------------------------------------------------------
export const ZoomPropsType = _extends({}, ViewPropTypes, {
  cropWidth: PropTypes.number, //操作区域宽度
  cropHeight: PropTypes.number, //操作区域高度
  imageWidth: PropTypes.number, //图片宽度
  imageHeight: PropTypes.number, //图片高度
  panToMove: PropTypes.bool, //单手是否能移动图片
  pinchToZoom: PropTypes.bool, //多手指是否能缩放
  enableDoubleClickZoom: PropTypes.bool, //双击能否放大
  clickDistance: PropTypes.number, //单击最大位移
  maxOverflow: PropTypes.number, //最大滑动阈值
  longPressTime: PropTypes.number, //长按的阈值（毫秒）
  doubleClickInterval: PropTypes.number, //双击计时器最大间隔
  centerOn: PropTypes.shape({
    x: PropTypes.number, //如果提供，这将导致视图缩放并平移到中心点。
    y: PropTypes.number, //持续时间是可选的，默认为300毫秒。
    scale: PropTypes.number,
    duration: PropTypes.number
  }),
  swipeDownThreshold: PropTypes.number, //threshold for firing swipe down function
  enableSwipeDown: PropTypes.bool, //for enabling vertical movement if user doesn't want it
  enableCenterFocus: PropTypes.bool, //for disabling focus on image center if user doesn't want it
  minScale: PropTypes.number, //minimum zoom scale
  maxScale: PropTypes.number, //maximum zoom scale
  onClick: PropTypes.func, //单击的回调
  onDoubleClick: PropTypes.func, //双击的回调
  onLongPress: PropTypes.func, //长按的回调
  handlePanSwipeDown: PropTypes.func,
  horizontalOuterRangeOffset: PropTypes.func, //横向超出的距离，父级做图片切换时，可以监听这个函数。
  //当此函数触发时，可以做切换操作
  onDragLeft: PropTypes.func, //触发想切换到左边的图，向左滑动速度超出阈值时触发
  responderRelease: PropTypes.func, //松手但是没有取消看图的回调
  onMove: PropTypes.func, //If provided, this will be called everytime the map is moved
  layoutChange: PropTypes.func, //If provided, this method will be called when the onLayout event fires
  onSwipeDown: PropTypes.func //function that fires when user swipes down


  //-------------------------------------------------------------------------------
});export const ZoomDefaultProps = _extends({}, View.defaultProps, {
  cropWidth: 100,
  cropHeight: 100,
  imageWidth: 100,
  imageHeight: 100,
  panToMove: true,
  pinchToZoom: true,
  enableDoubleClickZoom: true,
  clickDistance: 20,
  maxOverflow: 100,
  longPressTime: 800,
  doubleClickInterval: 175,
  swipeDownThreshold: 230,
  enableSwipeDown: false,
  enableCenterFocus: false,
  minScale: 0.6,
  maxScale: 10,
  onClick: (eventParams = { locationX: 0, locationY: 0, pageX: 0, pageY: 0 }) => {},
  onDoubleClick: () => {},
  onLongPress: () => {},
  handlePanSwipeDown: (Y = 0) => {},
  horizontalOuterRangeOffset: (offsetX = 0) => {},
  onDragLeft: () => {},
  responderRelease: (vx = 0, scale = 0) => {},
  onMove: (position = { type: '', positionX: 0, positionY: 0, scale: 0, zoomCurrentDistance: 0 }) => {},
  layoutChange: (event = {}) => {},
  onSwipeDown: (isSucess = false) => {}
});
//# sourceMappingURL=image-zoom.type.js.map