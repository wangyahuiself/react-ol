//olMap.js
import React from 'react';
import {Input, Icon, message} from 'antd';
import styles from './style.less';


class MapDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      location: {
        latitude: 0,
        longitude: 0,
      },
    }
  }
  render() {
    return <div id="map">
      我是一个插件
    </div>
  }
}

export default MapDemo;

