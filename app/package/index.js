/**
 * @this image-viewer
 * 
 * @flow 
 * 
 * 修改源码：`v2.2.26` (npm 发布的`名字`和 GitHub上的`名字`，不同哦！ 可别看错了)
 * NPM.js: react-native-image-zoom-viewer
 * gitHub: https://github.com/ascoders/react-native-image-viewer
 * 
 * ------------------------------------------------------------
 * ------------------------------------------------------------
 * * 主要改动：
 * 1、ts/tsx => js  __>__ ts `!`(强制解析) 更换 || 语法 
 * 2、方法:  onLayout => UIManager, findNodeHandle
 * 3、提取方法 saveImageSize(不在成为`loadImage`内部的const方法)，并 给方法设定参数列表
 * 4、提取 type / style => js
 * ------------------------------------------------------------
 */
import RXImageViewerStyle from './dist/api/image-pan-zoom-style'
import RXImageViewer from "./dist/imageViewer/image-viewer"

import RXImageZoom from './dist/zoom/image-zoom';

export default RXImageViewer
export {
  RXImageViewerStyle,
  RXImageViewer, 

  RXImageZoom,
}
