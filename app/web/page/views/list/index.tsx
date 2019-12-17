import React, { Component } from 'react';
import { Tabs } from 'antd';

import { TabProps } from '../../../typings/type';
import './index.css';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
// import MobXApp from '../mobx';


const TabPane = Tabs.TabPane;
const tabItemClick = (key) => {
  console.log('tab click', key);
};
// https://github.com/gaearon/react-hot-loader/issues/525
// must export, not export default
@inject("infoStore")
@observer
export class Tab extends Component<TabProps, any> {
  constructor (props) {
    console.log(props, 's')
    super(props);
  }
  render() {
    console.log(this.props, 'props')
    let { infoStore } = this.props
    return <div>
      <div className="tab">
        <h1>{infoStore.info.message.text}</h1>
        <Tabs defaultActiveKey="1" onChange={tabItemClick}>
          <TabPane tab="MobX" key="1">
          Content of Tab Pane 1
            {/* <MobXApp /> */}
            </TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs> 
      </div>
    </div>;
  }
}