import React, { FC, useState, useEffect } from 'react';
import loadableComponent from '@utils/loadable';

interface props1 {
  path: string;
}

const Index: FC<props1> = (props: props1) => {
  const { path } = props;

  useEffect(() => {
    console.log(path);
  })

  const ViewComponent = loadableComponent(() => import(path))
  return <>
    <ViewComponent />
  </>
}

export default Index;