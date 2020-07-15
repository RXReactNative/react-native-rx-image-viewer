var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 
 */
import * as React from "react";
import { View, ViewProps } from 'react-native';

import * as PropTypes from "prop-types";

//-------------------------------------------------------------------------------
export const ImageViewerPropsType = _extends({}, ViewProps, {

  /**
   * 是否显示
   */
  show: PropTypes.bool,

  /**
   * 初始显示第几张图
   */
  index: PropTypes.number,

  /**
   * 图片数组
   */
  imageUrls: PropTypes.shape(IImageInfo),

  /**
   * 滑动到下一页的X阈值
   */
  flipThreshold: PropTypes.number,

  /**
   * 当前页能滑到下一页X位置最大值
   */
  maxOverflow: PropTypes.number,

  /**
   * 加载失败的图
   */
  failImageSource: PropTypes.shape(IImageInfo),

  /**
   * 背景颜色
   */
  backgroundColor: PropTypes.string,

  /**
   * style props for the footer container
   */
  footerContainerStyle: PropTypes.object,

  /**
   * Menu Context Values
   */
  menuContext: PropTypes.shape({
    saveToLocal: PropTypes.string,
    cancel: PropTypes.string
  }),

  /**
   * 是否开启长按保存到本地的功能
   */
  saveToLocalByLongPress: PropTypes.bool,

  /**
   * 是否允许缩放图片
   */
  enableImageZoom: PropTypes.bool,

  /**
   * Enable swipe down to close image viewer.
   * When swipe down, will trigger onCancel.
   */
  enableSwipeDown: PropTypes.bool,

  /**
   * threshold for firing swipe down function
   */
  swipeDownThreshold: PropTypes.number,

  doubleClickInterval: PropTypes.number,

  /**
   * 是否预加载图片
   */
  enablePreload: PropTypes.bool,

  /**
   * 翻页时的动画时间
   */
  pageAnimateTime: PropTypes.number,

  /**
   * 长按图片的回调
   */
  onLongPress: PropTypes.func,

  /**
   * 单击回调
   */
  onClick: PropTypes.func,

  /**
   * 双击回调
   */
  onDoubleClick: PropTypes.func,

  /**
   * 图片保存到本地方法，如果写了这个方法，就不会调取系统默认方法
   * 针对安卓不支持 saveToCameraRoll 远程图片，可以在安卓调用此回调，调用安卓原生接口
   */
  onSave: PropTypes.func,

  onMove: PropTypes.func,

  /**
   * 自定义头部
   */
  renderHeader: PropTypes.func,

  /**
   * 自定义尾部
   */
  renderFooter: PropTypes.func,

  /**
   * 自定义计时器
   */
  renderIndicator: PropTypes.func,

  /**
   * Render image component
   */
  renderImage: PropTypes.func,

  /**
   * 自定义左翻页按钮
   */
  renderArrowLeft: PropTypes.func,

  /**
   * 自定义右翻页按钮
   */
  renderArrowRight: PropTypes.func,

  /**
   * 弹出大图的回调
   */
  onShowModal: PropTypes.func,

  /**
   * 取消看图的回调
   */
  onCancel: PropTypes.func,

  /**
   * function that fires when user swipes down
   */
  onSwipeDown: PropTypes.func,

  /**
   * 渲染loading元素
   */
  loadingRender: PropTypes.func,

  /**
   * 保存到相册的回调
   */
  onSaveToCamera: PropTypes.func,

  /**
   * 当图片切换时触发
   */
  onChange: PropTypes.func,
  menus: PropTypes.func

  //-------------------------------------------------------------------------------
});export const ImageViewerDefaultProps = _extends({}, View.defaultProps, {
  show: false,
  index: 0,
  imageUrls: [],
  flipThreshold: 80,
  maxOverflow: 300,
  failImageSource: null,
  backgroundColor: 'black',
  footerContainerStyle: {},
  menuContext: { saveToLocal: 'save to the album', cancel: 'cancel' },
  saveToLocalByLongPress: false,
  enableImageZoom: true,
  enableSwipeDown: false,
  swipeDownThreshold: 0,
  doubleClickInterval: 0,
  enablePreload: false,
  pageAnimateTime: 100
  // onLongPress: (image?:IImageInfo)=>{},
  // onClick: (close, currentShowIndex=0)=>{},
  // onDoubleClick: (close=() => any)=>{},
  // onSave: (uri='')=>{},
  // onMove: (position={type:'', positionX:0, positionY:0, scale:0, zoomCurrentDistance:0})=>{},
  // renderHeader: (currentIndex=0)=>{},
  // renderFooter: (currentIndex=0)=>{},
  // renderIndicator: (currentIndex=0, allSize=0)=>{},
  // renderImage: (props=null)=>{},
  // renderArrowLeft: ()=>{},
  // renderArrowRight: ()=>{},
  // onShowModal: (content=null)=>{},
  // onCancel: ()=>{},
  // onSwipeDown: ()=>{},
  // loadingRender: ()=>{},
  // onSaveToCamera: (index=0)=>{},
  // onChange: (index=0)=>{},
  // menus: (obj={ cancel : null, saveToLocal: null })=>{},


  //-------------------------------------------------------------------------------
});export const IImageInfo = {
  url: PropTypes.string,
  /**
   * 没有的话会自动拉取
   */
  width: PropTypes.number,
  /**
   * 没有的话会自动拉取
   */
  height: PropTypes.number,
  /**
   * 图片字节大小(kb为单位)
   */
  sizeKb: PropTypes.number,
  /**
   * 原图字节大小(kb为单位)
   * 如果设置了这个字段,并且有原图url,则显示查看原图按钮
   */
  originSizeKb: PropTypes.number,
  /**
   * 原图url地址
   */
  originUrl: PropTypes.string,
  /**
   * Pass to image props
   */
  props: PropTypes.any,
  /**
   * 初始是否不超高 TODO:
   */
  freeHeight: PropTypes.boolean,
  /**
   * 初始是否不超高 TODO:
   */
  freeWidth: PropTypes.boolean
};
//# sourceMappingURL=image-viewer.type.js.map