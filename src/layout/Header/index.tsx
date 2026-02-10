'use client';

import { useSidebarStore } from '@/stores/sideBarStore';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, theme } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import type React from 'react';

function Header(): React.ReactElement {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { collapsed, setCollapsed } = useSidebarStore();

  return (
    <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </AntdHeader>
  );
}

export default Header;
