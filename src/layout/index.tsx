import React, { FC, useState, useEffect } from 'react';
import Nav from "@components/Nav";
import { Button } from 'antd';
import axios from 'axios';
import Loading from '@/components/Loading'
const IndexLayout: FC = (props) => {

  const getList = (): void => {
    console.log('xxxx');
    axios.get('/api/get_mm_asr_text', {
      params: {
        url: 'www.baidu.com',
        start_time: 0,
        end_time: 100
      }
    }).then(res => {
      console.log(res);
    })
  }

  return <>
    <Nav
      mode="horizontal"
      item={[
        { text: '首页', bgColor: '#5b8c00' },
        { text: '关于', bgColor: '#531dab' },
        { text: '设置', bgColor: '#006d75' },
        { text: '我的', bgColor: '#1890ff' }
      ]}
      itemClick={(item, key) => {
        // console.log('item惦记了', item, key)
      }}
      full={false}
    />
    <div className="content">
      <Loading />
    </div>
  </>
}

export default IndexLayout;