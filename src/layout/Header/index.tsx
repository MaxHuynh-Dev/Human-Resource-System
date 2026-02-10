'use client';

import { BellOutlined, DownOutlined, MailOutlined, SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Flex, Input, Space, theme } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import type React from 'react';

const userMenuItems: MenuProps['items'] = [
  {
    key: 'profile',
    label: 'Hồ sơ',
  },
  {
    key: 'settings',
    label: 'Cài đặt',
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    label: 'Đăng xuất',
  },
];

function Header(): React.ReactElement {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const headerStyle: React.CSSProperties = {
    padding: '24px',
    height: 'auto',
    background: colorBgContainer,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #f0f0f0',
  };

  return (
    <AntdHeader style={headerStyle}>
      <div style={{ flex: 1, maxWidth: '400px' }}>
        <Input
          placeholder="Tìm kiếm"
          prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
          style={{
            borderRadius: '8px',
            backgroundColor: '#fafafa',
            border: 'none',
          }}
          size="large"
        />
      </div>

      <Space size="large" align="center">
        <div
          style={{
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MailOutlined
            style={{
              fontSize: 24,
              color: '#595959',
              cursor: 'pointer',
            }}
          />
        </div>

        <div
          style={{
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <Badge dot status="error">
            <BellOutlined
              style={{
                fontSize: 24,
                color: '#595959',
                cursor: 'pointer',
              }}
            />
          </Badge> */}
          <BellOutlined
            style={{
              fontSize: 24,
              color: '#595959',
              cursor: 'pointer',
            }}
          />
        </div>

        <Dropdown menu={{ items: userMenuItems }} trigger={['click']}>
          <Flex align="center" justify="center" gap={4} style={{ cursor: 'pointer' }}>
            <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" size={32} />
            <DownOutlined style={{ fontSize: '12px', color: '#595959' }} />
          </Flex>
        </Dropdown>
      </Space>
    </AntdHeader>
  );
}

export default Header;
