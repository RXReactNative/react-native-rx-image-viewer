!function(e){function t(t){for(var n,u,i=t[0],l=t[1],f=t[2],s=0,p=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(c&&c(t);p.length;)p.shift()();return a.push.apply(a,f||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={0:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var c=l;a.push([171,1]),r()}({104:function(e){e.exports=JSON.parse('{"a":"App"}')},153:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(1),a=i(o),u=i(r(174));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){return a.default.createElement(u.default,{__source:{fileName:"/Users/srxboys/srxboys/github/RX_React_Native/react-native-image-pan-zoom/App.js",lineNumber:19}})}}]),t}(o.Component);t.default=c},171:function(e,t,r){e.exports=r(172)},172:function(e,t,r){"use strict";r.r(t);var n=r(170),o=r(104),a=r(153),u=r.n(a);n.a.registerComponent(o.a,()=>u.a),n.a.runApplication(o.a,{rootTag:document.getElementById("react-root")})},174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(40),u=r(255),i=r(290),l=(n=i)&&n.__esModule?n:{default:n};var f=(0,u.createStackNavigator)(o({},l.default),{initialRouteName:"index",headerMode:"screen",mode:"card",defaultNavigationOptions:function(){return{gesturesEnabled:!0,headerStyle:{backgroundColor:"#54FF9F",shadowColor:"transparent",shadowOpacity:0,borderBottomWidth:.5,borderBottomColor:"#698B69",elevation:0}}}});t.default=(0,a.createAppContainer)(f)},290:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(291)),o=a(r(292));function a(e){return e&&e.__esModule?e:{default:e}}t.default={index:{screen:n.default},preview:{screen:o.default}}},291:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n="/Users/srxboys/srxboys/github/RX_React_Native/react-native-image-pan-zoom/app/pages/home.js",o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),u=c(a),i=c(r(72)),l=c(r(3)),f=c(r(30));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return u.default.createElement(l.default,{style:{flex:1},__source:{fileName:n,lineNumber:17}},u.default.createElement(i.default,{__source:{fileName:n,lineNumber:18}},"react-native-image-pan-zoom"),u.default.createElement(f.default,{__source:{fileName:n,lineNumber:19}}))}}]),t}(a.Component);t.default=s},292:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o="/Users/srxboys/srxboys/github/RX_React_Native/react-native-image-pan-zoom/app/pages/preview.js",a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),i=d(u),l=d(r(4)),f=d(r(3)),c=d(r(73)),s=d(r(293)),p=d(r(294));function d(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));b.call(r);var n=r.navParams||{},o=n.style||{},a=n.title||"",u=n.index||0,i=n.imageUrls||[];return r.state={style:o,title:a,index:u,imageUrls:i},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"renderNavigationTitle",value:function(){var e=this.state,t=e.index,r=e.imageUrls;return(this.state.title||"预览图片")+"("+(t+1)+"/"+r.length+")"}},{key:"render",value:function(){var e=this,t=this.state,r=t.style,n=t.index,a=t.imageUrls;return i.default.createElement(f.default,{style:[m.container,{style:r}],__source:{fileName:o,lineNumber:113}},i.default.createElement(p.default,{imageUrls:a.map((function(t){return e.packImageUril(t)})),index:n,renderImage:this.renderImage,renderIndicator:this.renderLoading,onChange:function(t){e.setState({index:t})},__source:{fileName:o,lineNumber:114}}))}}]),t}(u.Component);y.propTypes=n({},f.default.propTypes),y.defaultProps=n({},f.default.defaultProps);var b=function(){this.packImageUril=function(e){return e?i.default.isValidElement(e)?e:"string"==typeof e?{uri:e}:e:null},this.renderImage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.source||{},r=e.style||{};return i.default.createElement(c.default,{style:r,source:t,__source:{fileName:o,lineNumber:99}})},this.renderLoading=function(){return i.default.createElement(f.default,{style:{flex:1,marginTop:100,height:200,justifyContent:"center",alignItems:"center"},__source:{fileName:o,lineNumber:104}},i.default.createElement(s.default,{size:"large",__source:{fileName:o,lineNumber:105}}))}};t.default=y;var m=l.default.create({container:{flex:1,backgroundColor:"#a3a3a3"}})},294:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(295);var a=((n=o)&&n.__esModule?n:{default:n}).default.store.otherImageViewr;t.default=a},295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=i(r(1)),u=i(r(3));function i(e){return e&&e.__esModule?e:{default:e}}var l={otherImageViewr:a.default.createElement(u.default,null),imageViewer:{underlayColor:"#F2F2F2",iphonexBottom:50,phoneBottom:40,ImageStyles:null},zoom:{justifyContent:"center",alignItems:"center",overflow:"hidden",backgroundColor:"#B0C4DE",styles:{container:null}}},f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"initApi",value:function(e){if(!e)throw new Error("RXImageViewerStyle -> initApi() -> config=null");n(this.store,e)}},{key:"store",get:function(){return this._store||(this._store=l),this._store}}]),e}();t.default=f}});