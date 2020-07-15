
import RXImageViewerStyle from '../api/image-pan-zoom-style';

const container = {
  justifyContent: RXImageViewerStyle.store.zoom.justifyContent,
  alignItems: RXImageViewerStyle.store.zoom.alignItems,
  overflow: RXImageViewerStyle.store.zoom.overflow,
  backgroundColor: RXImageViewerStyle.store.zoom.backgroundColor // fix 0.36 bug, see: https://github.com/facebook/react-native/issues/10782
};

export default {
  container
};
//# sourceMappingURL=image-zoom.style.js.map