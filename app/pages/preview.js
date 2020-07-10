/**
 *  @this 图片预览
 * 
 * @flow
 * 
 * app使用这个，，h5/web 使用微信的库
 * 
 * ----------------------
 * 
 
Simplest usage  NO.1 .
	imageUrls =  {
		uri: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
		props: {
			// headers: ...
			// footers: ...
			// style: {...}
		},
	}

Simplest usage  NO.2 .
	imageUrls =  {
		uri: ',
		props: {
			// headers: ...
			// style: {...}
			// source: {{uri: 'fp:///xx/xx.png'}} //iOS <Photos/Photos.h>系统库 导出的路径
			// source: {{uri: 'file:///xx/xx.png'}} //手机本地图片路径，拍照
			source: require('./img.png') //工程中 目录名
		},
	}

Simplest usage  NO.3 .
	imageUrls =  {
		// You can pass props to <Image />. 
		//程序内部获取 Image 的 source中的图片资源而已，和上面没什么不同
	}
*
*/

'use strict'
import React, { Component } from "react";
import {
  StyleSheet,
	View,
	Image,
	ActivityIndicator
} from 'react-native';

import RXImageViewer from '../package';

export default class Preview extends Component {
  static propTypes = {
		...View.propTypes,
  }

  static defaultProps = {
		...View.defaultProps,
  }

  constructor(props){
    super(props);

    let navParams = this.navParams || {};
    let style = navParams.style || {};
    let title = navParams.title || '';
    let index = navParams.index || 0;
    let imageUrls = navParams.imageUrls || [];
    this.state = {
      style, title, index, imageUrls,
    }
  }
  
  renderNavigationTitle() {
    const { index, imageUrls} = this.state;
    let title = this.state.title || '预览图片';
    return title + '('+(index+1)+'/'+imageUrls.length+')';
  }

	packImageUril = (e) => {
		if(!e) return null;
		//组件
		if(React.isValidElement(e)) return e; 

		//网络图片地址
		if(typeof e === 'string') {
			return { uri: e }
		}

		// Map support= {uri: '', width: 0, height: 0}
		// 必须要有uri => {uri: ''}
		return e;
	}


	renderImage = (e={}) => {
		let source = e.source || {};
		let style = e.style || {};
		return <Image style={style} source={source} />
	}

	renderLoading = (currentIndex=0, allSize=0) => {
		return(
			<View style={{flex: 1, marginTop: 100, height: 200, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator  size='large' />
			</View>
		)
	}

	render(){
    const { style, index, imageUrls } = this.state;
		return(
			<View style={[styles.container, { style }]}>
				<RXImageViewer
          imageUrls={imageUrls.map(e => {
						return this.packImageUril(e);
          })}
					index={index}
					renderImage={this.renderImage}
          renderIndicator={this.renderLoading}
          onChange={(index)=>{this.setState({ index }) }}
        />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#a3a3a3',
  },
});