import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'antd';

const EntryIndex:FC<RouteComponentProps> = (props: RouteComponentProps) => {
  console.log(props);
  return <div>
    后台首页页面
    <Button onClick={ () => props.history.push("/login") }>点击我</Button>
  </div>
}

export default withRouter(EntryIndex);
