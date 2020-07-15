/**
 * 
 */

import RXImageViewerStyle from '../api/image-pan-zoom-style';
import { Platform, Dimensions } from "react-native";
const isWeb = Platform.OS === 'web';
const window = Dimensions.get("window");
const IsIPhoneX = Platform.OS === "ios" &&
((window.height === 812 && window.width === 375) ||
  (window.height === 375 && window.width === 812) ||
  (window.height === 414 && window.width === 896) ||
  (window.height === 896 && window.width === 414))

const _IsIPhoneX = IsIPhoneX && !isWeb;
let inPhonexBottom = 40;
try {
  if (_IsIPhoneX) {
    inPhonexBottom = RXImageViewerStyle.store.imageViewer.iphonexBottom;
  }
  else {
    inPhonexBottom = RXImageViewerStyle.store.imageViewer.phoneBottom;
  }
} catch (error) {
  inPhonexBottom = 40;
  console.warn('RXImageViewerStyle -> image-viewer.style.js -> inPhonexBottom setter error');
}


export default (
  width = 0,
  height = 0,
  backgroundColor = 'white'
) => {
  return {
    modalContainer: { backgroundColor, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    watchOrigin: { position: 'absolute', width, bottom: 20, justifyContent: 'center', alignItems: 'center' },
    watchOriginTouchable: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 30,
      borderColor: 'white',
      borderWidth: 0.5,
      backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    watchOriginText: { color: 'white', backgroundColor: 'transparent' },
    imageStyle: {},
    container: { backgroundColor }, // 多图浏览需要调整整体位置的盒子
    moveBox: { flexDirection: 'row', alignItems: 'center' },
    menuContainer: { position: 'absolute', width, height, left: 0, bottom: 0, zIndex: 12 },
    menuShadow: {
      position: 'absolute',
      width,
      height,
      backgroundColor: 'black',
      left: 0,
      bottom: 0,
      opacity: 0.2,
      zIndex: 10
    },
    menuContent: { position: 'absolute', width, left: 0, bottom: 0, zIndex: 11 },
    operateContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: inPhonexBottom,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1
    },
    operateText: { color: '#333' },
    loadingTouchable: { width, height },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    arrowLeftContainer: { position: 'absolute', top: 0, bottom: 0, left: 0, justifyContent: 'center', zIndex: 13 },
    arrowRightContainer: { position: 'absolute', top: 0, bottom: 0, right: 0, justifyContent: 'center', zIndex: 13 }
  };
};

export const simpleStyle = {
  count: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 38,
    zIndex: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  countText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 0,
      height: 0.5
    },
    textShadowRadius: 0
  }
};