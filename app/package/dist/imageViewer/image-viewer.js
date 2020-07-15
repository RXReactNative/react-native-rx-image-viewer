/**
 * @this image-zoom.component
 * 
 *  
 */
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { View, Text, Image, Animated,
// CameraRoll,
I18nManager, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, UIManager, findNodeHandle } from 'react-native';

import CameraRoll from "@react-native-community/cameraroll";

import RXImageViewerStyle from '../api/image-pan-zoom-style';
import ImageZoom from '../zoom/image-zoom';
import ImageStyles from './image-viewer.style';
import { ImageViewerPropsType, ImageViewerDefaultProps } from './image-viewer.type';

export default class ImageViewer extends React.Component {

  constructor(props) {
    super(props);

    this.resetImageByIndex = (index = 0) => {
      this.imageRefs[index] && this.imageRefs[index].reset();
    };

    this.saveImageSize = (index = 0, imageSizes = [], imageStatus = {}, imageSizesStatus = 'unknow') => {
      // 如果已经 success 了，就不做处理
      if (imageSizes[index] && imageSizesStatus !== 'loading') {
        return;
      }

      imageSizes = imageSizes.slice();
      imageSizes[index] = imageStatus;
      this.setState({ imageSizes });
    };

    this.preloadImage = (index = 0) => {
      let imageSizes = this.state.imageSizes || [];
      let imageSizesLength = imageSizes.length || 0;
      if (index < imageSizesLength) {
        this.loadImage(index + 1);
      }
    };

    this.handleHorizontalOuterRangeOffset = (offsetX = 0) => {
      this.positionXNumber = this.standardPositionX + offsetX;
      this.positionX.setValue(this.positionXNumber);

      const offsetXRTL = !I18nManager.isRTL ? offsetX : -offsetX;

      let currentShowIndex = this.state.currentShowIndex || 0;

      if (offsetXRTL < 0) {
        if (currentShowIndex || 0 < this.props.imageUrls.length - 1) {
          this.loadImage((currentShowIndex || 0) + 1);
        }
      } else if (offsetXRTL > 0) {
        if (currentShowIndex || 0 > 0) {
          this.loadImage((currentShowIndex || 0) - 1);
        }
      }
    };

    this.handleResponderRelease = (vx = 0) => {
      const vxRTL = I18nManager.isRTL ? -vx : vx;
      const isLeftMove = I18nManager.isRTL ? this.positionXNumber - this.standardPositionX < -(this.props.flipThreshold || 0) : this.positionXNumber - this.standardPositionX > (this.props.flipThreshold || 0);
      const isRightMove = I18nManager.isRTL ? this.positionXNumber - this.standardPositionX > (this.props.flipThreshold || 0) : this.positionXNumber - this.standardPositionX < -(this.props.flipThreshold || 0);

      if (vxRTL > 0.7) {
        // 上一张
        this.goBack.call(this);

        // 这里可能没有触发溢出滚动，为了防止图片不被加载，调用加载图片
        if (this.state.currentShowIndex || 0 > 0) {
          this.loadImage((this.state.currentShowIndex || 0) - 1);
        }
        return;
      } else if (vxRTL < -0.7) {
        // 下一张
        this.goNext.call(this);
        if (this.state.currentShowIndex || 0 < this.props.imageUrls.length - 1) {
          this.loadImage((this.state.currentShowIndex || 0) + 1);
        }
        return;
      }

      if (isLeftMove) {
        // 上一张
        this.goBack.call(this);
      } else if (isRightMove) {
        // 下一张
        this.goNext.call(this);
        return;
      } else {
        // 回到之前的位置
        this.resetPosition.call(this);
        return;
      }
    };

    this.goBack = () => {
      if (this.state.currentShowIndex === 0) {
        // 回到之前的位置
        this.resetPosition.call(this);
        return;
      }

      this.positionXNumber = !I18nManager.isRTL ? this.standardPositionX + this.width : this.standardPositionX - this.width;
      this.standardPositionX = this.positionXNumber;
      Animated.timing(this.positionX, {
        toValue: this.positionXNumber,
        duration: this.props.pageAnimateTime
      }).start();

      const nextIndex = (this.state.currentShowIndex || 0) - 1;

      this.setState({
        currentShowIndex: nextIndex
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.currentShowIndex);
        }
      });
    };

    this.goNext = () => {
      if (this.state.currentShowIndex === this.props.imageUrls.length - 1) {
        // 回到之前的位置
        this.resetPosition.call(this);
        return;
      }

      this.positionXNumber = !I18nManager.isRTL ? this.standardPositionX - this.width : this.standardPositionX + this.width;
      this.standardPositionX = this.positionXNumber;
      Animated.timing(this.positionX, {
        toValue: this.positionXNumber,
        duration: this.props.pageAnimateTime
      }).start();

      const nextIndex = (this.state.currentShowIndex || 0) + 1;

      this.setState({
        currentShowIndex: nextIndex
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.currentShowIndex);
        }
      });
    };

    this.handleLongPress = image => {
      //image = type.IImageInfo
      if (this.props.saveToLocalByLongPress) {
        // 出现保存到本地的操作框
        this.setState({ isShowMenu: true });
      }

      if (this.props.onLongPress) {
        this.props.onLongPress(image);
      }
    };

    this.handleClick = () => {
      if (this.props.onClick) {
        this.props.onClick(this.handleCancel, this.state.currentShowIndex);
      }
    };

    this.handleDoubleClick = () => {
      if (this.props.onDoubleClick) {
        this.props.onDoubleClick(this.handleCancel);
      }
    };

    this.handleCancel = () => {
      this.hasLayout = false;
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    };

    this.handleLayout = event => {
      //LayoutChangeEvent
      if (!event) return;
      if (event.nativeEvent.layout.width !== this.width) {
        this.hasLayout = true;

        this.width = event.nativeEvent.layout.width;
        this.height = event.nativeEvent.layout.height;
        this.styles = ImageStyles(this.width, this.height, this.props.backgroundColor || 'transparent');

        // 强制刷新
        this.forceUpdate();
        this.jumpToCurrentImage();
      }
    };

    this.saveToLocal = () => {
      let { onSaveToCamera } = this.props;
      onSaveToCamera = onSaveToCamera || null;

      if (!this.props.onSave) {
        CameraRoll.saveToCameraRoll(this.props.imageUrls[this.state.currentShowIndex || 0].uri);
        onSaveToCamera && onSaveToCamera(this.state.currentShowIndex);
      } else {
        this.props.onSave(this.props.imageUrls[this.state.currentShowIndex || 0].uri);
      }

      this.setState({ isShowMenu: false });
    };

    this.handleLeaveMenu = () => {
      this.setState({ isShowMenu: false });
    };

    this.handleSwipeDown = () => {
      if (this.props.onSwipeDown) {
        this.props.onSwipeDown();
      }
      this.handleCancel();
    };

    this.relativeLocation = jsxElement => {
      let _that = this;
      if (!jsxElement) {
        console.warn('RXImageViewerStyle -> relativeLocation-> jsxElement = null');
        return;
      }
      const handle = findNodeHandle(jsxElement);
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        x = Math.ceil(x);
        y = Math.ceil(y);
        width = Math.ceil(width);
        height = Math.ceil(height);
        pageX = Math.ceil(pageX);
        pageY = Math.ceil(pageY);
        if (!x && !y && !width && !height) return;
        let layout = { x, y, width, height };
        var nativeEvent = { layout };
        var event = { nativeEvent };
        _that && _that.handleLayout && _that.handleLayout(event);
      });
    };

    this.state = {
      imageSizes: []

      // 背景透明度渐变动画
    };this.fadeAnim = new Animated.Value(0);

    // 当前基准位置
    this.standardPositionX = 0;

    // 整体位移，用来切换图片用
    this.positionXNumber = 0;
    this.positionX = new Animated.Value(0);

    this.width = 0;
    this.height = 0;

    let configImageStyles = null;
    try {
      configImageStyles = RXImageViewerStyle.store.imageViewer.ImageStyles;
    } catch (error) {
      configImageStyles = null;
      console.warn('RXImageViewerStyle -> image-viewer.js -> constructor(props) -> configImageStyles error');
    }

    if (configImageStyles) {
      // 可以自定义样式，否则采用默认的样式
      this.styles = configImageStyles;
    } else {
      this.styles = ImageStyles;
    }

    // 是否执行过 layout. fix 安卓不断触发 onLayout 的 bug
    this.hasLayout = false;

    // 记录已加载的图片 index =>  new Map<number, boolean>()
    this.loadedIndex = new Map();

    //new Map<number, any>()
    this.handleLongPressWithIndex = new Map();

    this.imageRefs = [];
  }

  componentWillMount() {
    this.init(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.state.currentShowIndex) {
      this.setState({
        currentShowIndex: nextProps.index
      }, () => {
        // 立刻预加载要看的图
        this.loadImage(nextProps.index || 0);

        this.jumpToCurrentImage();

        // 显示动画
        Animated.timing(this.fadeAnim, {
          toValue: 1,
          duration: 200
        }).start();
      });
    }
  }

  /**
   * props 有变化时执行
   */
  init(nextProps) {
    //type.Props
    if (nextProps.imageUrls.length === 0) {
      // 隐藏时候清空
      this.fadeAnim.setValue(0);
      return this.setState({ imageSizes: [] });
    }

    // 给 imageSizes 塞入空数组
    const imageSizes = []; //type.IImageSize[]
    nextProps.imageUrls.forEach(imageUrl => {
      imageSizes.push({
        width: imageUrl.width || 0,
        height: imageUrl.height || 0,
        status: 'loading'
      });
    });

    this.setState({
      currentShowIndex: nextProps.index,
      imageSizes
    }, () => {
      // 立刻预加载要看的图
      this.loadImage(nextProps.index || 0);

      this.jumpToCurrentImage();

      // 显示动画
      Animated.timing(this.fadeAnim, {
        toValue: 1,
        duration: 200
      }).start();
    });
  }
  /**
   * reset Image scale and position
   */

  /**
   * 调到当前看图位置
   */
  jumpToCurrentImage() {
    // 跳到当前图的位置
    this.positionXNumber = this.width * (this.state.currentShowIndex || 0) * (I18nManager.isRTL ? 1 : -1);
    this.standardPositionX = this.positionXNumber;
    this.positionX.setValue(this.positionXNumber);
  }

  // 保存 imageSize


  /**
   * 加载图片，主要是获取图片长与宽
   */
  loadImage(index = 0) {
    let imageSizes = this.state.imageSizes || [];
    let imageSizesLength = imageSizes.length || 0;
    if (imageSizesLength <= index) return;

    if (this.loadedIndex.has(index)) {
      return;
    }
    this.loadedIndex.set(index, true);

    const image = this.props.imageUrls[index];

    const imageStatus = _extends({}, imageSizes[index]);

    let imageSizesStatus = imageSizes[index].status || 'unknow';

    if (imageSizesStatus === 'success') {
      // 已经加载过就不会加载了
      return;
    }

    let imageSizesWidth = imageSizes[index].width || 0;
    let imageSizesHeight = imageSizes[index].height || 0;

    // 如果已经有宽高了，直接设置为 success
    if (imageSizesWidth > 0 && imageSizesHeight > 0) {
      imageStatus.status = 'success';
      this.saveImageSize(index, imageSizes, imageStatus, imageSizesStatus);
      return;
    }

    // 是否加载完毕了图片大小
    const sizeLoaded = false;
    // 是否加载完毕了图片
    let imageLoaded = false;

    // Tagged success if uri is started with file:, or not set yet(for custom source.uri).
    let imageUrl = image.uri;
    var imageStartsWith = null;
    if (imageUrl && typeof imageUrl === 'string') {
      //本地文件
      if (imageUrl.startsWith(`file:`)) {
        imageLoaded = true;
      } else if (imageUrl.startsWith(`ph:`)) {
        imageLoaded = true;
      } else if (imageUrl.startsWith(`data:image/jpeg;base64,`)) {
        imageLoaded = true;
      }
    }
    if (image && (!imageUrl || imageStartsWith)) {
      imageLoaded = true;
    }

    // 如果已知源图片宽高，直接设置为 success
    if (image && image.width && image.height) {
      if (this.props.enablePreload && imageLoaded === false) {
        Image.prefetch(imageUrl);
      }
      imageStatus.width = image.width;
      imageStatus.height = image.height;
      imageStatus.status = 'success';
      this.saveImageSize(index, imageSizes, imageStatus, imageSizesStatus);
      return;
    }

    Image.getSize(imageUrl, (width = 0, height = 0) => {
      imageStatus.width = width;
      imageStatus.height = height;
      imageStatus.status = 'success';
      this.saveImageSize(index, imageSizes, imageStatus, imageSizesStatus);
    }, () => {
      try {
        // 标签的 <Image /> 
        let props = image.props || {};
        let source = props.source || null;
        var lastSource = source;
        if (!source && imageUrl) {
          lastSource = imageUrl;
        }
        const data = Image.resolveAssetSource(lastSource);
        imageStatus.width = data.width;
        imageStatus.height = data.height;
        imageStatus.status = 'success';
        this.saveImageSize(index, imageSizes, imageStatus, imageSizesStatus);
      } catch (newError) {
        // Give up..
        imageStatus.status = 'fail';
        this.saveImageSize(index, imageSizes, imageStatus, imageSizesStatus);
      }
    });
  }

  /**
   * 预加载图片
   */

  /**
   * 触发溢出水平滚动
   */


  /**
   * 手势结束，但是没有取消浏览大图
   */


  /**
   * 到上一张
   */


  /**
   * 到下一张
   */


  /**
   * 回到原位
   */
  resetPosition() {
    this.positionXNumber = this.standardPositionX;
    Animated.timing(this.positionX, {
      toValue: this.standardPositionX,
      duration: 150
    }).start();
  }

  /**
   * 长按
   */


  /**
   * 单击
   */


  /**
   * 双击
   */


  /**
   * 退出
   */


  /**
   * 完成布局
   */


  /**
   * 获得整体内容
   */
  getContent() {

    // func
    let { loadingRender, renderImage, renderHeader, renderArrowLeft, renderArrowRight, renderIndicator, renderFooter } = this.props;
    loadingRender = loadingRender || null;
    renderImage = renderImage || null;
    renderHeader = renderHeader || null;
    renderArrowLeft = renderArrowLeft || null;
    renderArrowRight = renderArrowRight || null;
    renderIndicator = renderIndicator || null;
    renderFooter = renderFooter || null;

    // 获得屏幕宽高
    const screenWidth = this.width;
    const screenHeight = this.height;

    const ImageElements = this.props.imageUrls.map((image, index) => {
      if ((this.state.currentShowIndex || 0) > index + 1 || (this.state.currentShowIndex || 0) < index - 1) {
        return React.createElement(View, { key: index, style: { width: screenWidth, height: screenHeight } });
      }

      if (!this.handleLongPressWithIndex.has(index)) {
        this.handleLongPressWithIndex.set(index, this.handleLongPress.bind(this, image));
      }

      let imageSizes = this.state.imageSizes || {};

      let width = imageSizes[index] && imageSizes[index].width;
      let height = imageSizes[index] && imageSizes[index].height;
      const imageInfo = imageSizes[index];

      if (!imageInfo || !imageInfo.status) {
        return React.createElement(View, { key: index, style: { width: screenWidth, height: screenHeight } });
      }

      // 如果宽大于屏幕宽度,整体缩放到宽度是屏幕宽度
      if (width > screenWidth) {
        const widthPixel = screenWidth / width;
        width *= widthPixel;
        height *= widthPixel;
      }

      // 如果此时高度还大于屏幕高度,整体缩放到高度是屏幕高度
      if (height > screenHeight) {
        const HeightPixel = screenHeight / height;
        width *= HeightPixel;
        height *= HeightPixel;
      }

      const Wrapper = (_ref) => {
        let { children } = _ref,
            others = _objectWithoutProperties(_ref, ['children']);

        return React.createElement(
          ImageZoom,
          _extends({
            cropWidth: this.width,
            cropHeight: this.height,
            maxOverflow: this.props.maxOverflow,
            horizontalOuterRangeOffset: this.handleHorizontalOuterRangeOffset,
            responderRelease: this.handleResponderRelease,
            onMove: this.props.onMove,
            onLongPress: this.handleLongPressWithIndex.get(index),
            onClick: this.handleClick,
            onDoubleClick: this.handleDoubleClick,
            enableSwipeDown: this.props.enableSwipeDown,
            swipeDownThreshold: this.props.swipeDownThreshold,
            onSwipeDown: this.handleSwipeDown,
            pinchToZoom: this.props.enableImageZoom,
            enableDoubleClickZoom: this.props.enableImageZoom,
            doubleClickInterval: this.props.doubleClickInterval
          }, others),
          children
        );
      };

      switch (imageInfo.status) {
        case 'loading':
          return React.createElement(
            Wrapper,
            {
              key: index,
              style: _extends({}, this.styles.modalContainer, this.styles.loadingContainer),
              imageWidth: screenWidth,
              imageHeight: screenHeight
            },
            React.createElement(
              View,
              { style: this.styles.loadingContainer },
              loadingRender && loadingRender()
            )
          );
        case 'success':
          if (!image.props) {
            image.props = {};
          }

          if (!image.props.style) {
            image.props.style = {};
          }
          image.props.style = _extends({}, this.styles.imageStyle, image.props.style, {
            width,
            height
          });

          if (typeof image.props.source === 'number') {
            // source = require(..), doing nothing
          } else {
            if (!image.props.source) {
              image.props.source = {};
            }
            image.props.source = _extends({
              uri: image.uri
            }, image.props.source);
          }
          if (this.props.enablePreload) {
            this.preloadImage(this.state.currentShowIndex || 0);
          }
          return React.createElement(
            ImageZoom,
            {
              key: index,
              ref: el => this.imageRefs[index] = el,
              cropWidth: this.width,
              cropHeight: this.height,
              maxOverflow: this.props.maxOverflow,
              horizontalOuterRangeOffset: this.handleHorizontalOuterRangeOffset,
              responderRelease: this.handleResponderRelease,
              onMove: this.props.onMove,
              onLongPress: this.handleLongPressWithIndex.get(index),
              onClick: this.handleClick,
              onDoubleClick: this.handleDoubleClick,
              imageWidth: width,
              imageHeight: height,
              enableSwipeDown: this.props.enableSwipeDown,
              swipeDownThreshold: this.props.swipeDownThreshold,
              onSwipeDown: this.handleSwipeDown,
              panToMove: !this.state.isShowMenu,
              pinchToZoom: this.props.enableImageZoom && !this.state.isShowMenu,
              enableDoubleClickZoom: this.props.enableImageZoom && !this.state.isShowMenu,
              doubleClickInterval: this.props.doubleClickInterval
            },
            renderImage && renderImage(image.props)
          );
        case 'fail':
          return React.createElement(
            Wrapper,
            {
              key: index,
              style: this.styles.modalContainer,
              imageWidth: this.props.failImageSource ? this.props.failImageSource.width : screenWidth,
              imageHeight: this.props.failImageSource ? this.props.failImageSource.height : screenHeight
            },
            this.props.failImageSource && renderImage && renderImage({
              source: {
                uri: this.props.failImageSource.uri
              },
              style: {
                width: this.props.failImageSource.width,
                height: this.props.failImageSource.height
              }
            })
          );
      }
    });

    return React.createElement(
      Animated.View,
      { style: { zIndex: 9 } },
      React.createElement(
        Animated.View,
        { style: _extends({}, this.styles.container, { opacity: this.fadeAnim }) },
        renderHeader && renderHeader(this.state.currentShowIndex),
        React.createElement(
          View,
          { style: this.styles.arrowLeftContainer },
          React.createElement(
            TouchableWithoutFeedback,
            { onPress: this.goBack },
            React.createElement(
              View,
              null,
              renderArrowLeft && renderArrowLeft()
            )
          )
        ),
        React.createElement(
          View,
          { style: this.styles.arrowRightContainer },
          React.createElement(
            TouchableWithoutFeedback,
            { onPress: this.goNext },
            React.createElement(
              View,
              null,
              renderArrowRight && renderArrowRight()
            )
          )
        ),
        React.createElement(
          Animated.View,
          {
            style: _extends({}, this.styles.moveBox, {
              transform: [{ translateX: this.positionX }],
              width: this.width * this.props.imageUrls.length
            })
          },
          ImageElements
        ),
        renderIndicator && renderIndicator((this.state.currentShowIndex || 0) + 1, this.props.imageUrls.length),
        this.props.imageUrls[this.state.currentShowIndex || 0] && this.props.imageUrls[this.state.currentShowIndex || 0].originSizeKb && this.props.imageUrls[this.state.currentShowIndex || 0].originUrl && React.createElement(
          View,
          { style: this.styles.watchOrigin },
          React.createElement(
            TouchableOpacity,
            { style: this.styles.watchOriginTouchable },
            React.createElement(
              Text,
              { style: this.styles.watchOriginText },
              '\u67E5\u770B\u539F\u56FE(2M)'
            )
          )
        ),
        React.createElement(
          View,
          { style: [{ bottom: 0, position: 'absolute', zIndex: 9 }, this.props.footerContainerStyle] },
          renderFooter && renderFooter(this.state.currentShowIndex || 0)
        )
      )
    );
  }

  /**
   * 保存当前图片到本地相册
   */


  getMenu() {
    if (!this.state.isShowMenu) {
      return null;
    }

    if (this.props.menus) {
      return React.createElement(
        View,
        { style: this.styles.menuContainer },
        this.props.menus({ cancel: this.handleLeaveMenu, saveToLocal: this.saveToLocal })
      );
    }

    let underlayColor = "#F2F2F2";
    try {
      underlayColor = RXImageViewerStyle.store.imageViewer.underlayColor || "#F2F2F2";
    } catch (error) {
      console.warn('RXImageViewerStyle -> image-viewer.js -> getMenu -> underlayColor error');
    }

    return React.createElement(
      View,
      { style: this.styles.menuContainer },
      React.createElement(View, { style: this.styles.menuShadow }),
      React.createElement(
        View,
        { style: this.styles.menuContent },
        React.createElement(
          TouchableHighlight,
          { underlayColor: underlayColor, onPress: this.saveToLocal, style: this.styles.operateContainer },
          React.createElement(
            Text,
            { style: this.styles.operateText },
            this.props.menuContext.saveToLocal
          )
        ),
        React.createElement(
          TouchableHighlight,
          {
            underlayColor: underlayColor,
            onPress: this.handleLeaveMenu,
            style: this.styles.operateContainer
          },
          React.createElement(
            Text,
            { style: this.styles.operateText },
            this.props.menuContext.cancel
          )
        )
      )
    );
  }

  render() {
    let childs = null; // React.ReactElement<any>

    childs = React.createElement(
      View,
      null,
      this.getContent(),
      this.getMenu()
    );

    return React.createElement(
      View
      // onLayout={this.handleLayout}
      ,
      { ref: e => {
          if (!e) return;this.relativeLocation(e);
        },
        style: _extends({
          flex: 1,
          overflow: 'hidden'
        }, this.props.style)
      },
      childs
    );
  }
}
ImageViewer.defaultProps = _extends({}, ImageViewerPropsType);
ImageViewer.defaultProps = _extends({}, ImageViewerDefaultProps);
//# sourceMappingURL=image-viewer.js.map