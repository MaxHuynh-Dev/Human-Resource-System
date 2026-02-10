'use client';

import { useSidebarStore } from '@/stores/sideBarStore';
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CalendarFilled,
  CalendarOutlined,
  CheckSquareOutlined,
  DollarOutlined,
  FileTextOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Image, Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import './styles.module.css';

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  // insetInlineStart: 0,
  // minWidth: '280px !important',
  // maxWidth: 'auto !important',
  // width: 'max-content !important',
  top: 0,
  // scrollbarWidth: 'thin',
  // scrollbarGutter: 'stable',
  backgroundColor: '#fff',
  paddingBlock: '32px',
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'CÁ NHÂN',
    'group-personal',
    null,
    [
      getItem('Dashboard', 'dashboard', <AppstoreOutlined />),
      getItem('Lịch cá nhân', 'personal-calendar', <CalendarOutlined />),
      getItem('To do list', 'todo-list', <CheckSquareOutlined />),
      getItem('Tài liệu', 'documents', <FileTextOutlined />),
    ],
    'group'
  ),

  getItem(
    'TUYỂN DỤNG',
    'group-recruitment',
    null,
    [
      getItem('Job', 'job', <DollarOutlined />),
      getItem('Quy trình', 'process', <ApartmentOutlined />),
    ],
    'group'
  ),

  getItem(
    'TỔ CHỨC',
    'group-organization',
    null,
    [
      getItem('Nhân viên', 'employees', <UserOutlined />),
      getItem('Request', 'request', <FormOutlined />),
      getItem('Báo cáo', 'reports', <BarChartOutlined />),
      getItem('Kế hoạch sự kiện', 'events', <CalendarFilled />),
    ],
    'group'
  ),
];

function Sidebar(): React.JSX.Element {
  const { collapsed } = useSidebarStore();

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle} width={280}>
      <div className="demo-logo-vertical">
        <Image src="/images/logo/logo.png" alt="logo" />
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        // style={{
        //   height: '100%',
        //   borderRight: 0,
        //   fontWeight: 500,
        // }}
        items={items}
      />
    </Sider>
  );
}

export default Sidebar;
