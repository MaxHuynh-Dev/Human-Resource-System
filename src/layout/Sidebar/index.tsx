'use client';

import { useSidebarStore } from '@/stores/sideBarStore';
import {
  ApartmentOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  CoffeeOutlined,
  DollarOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  FileTextOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Flex, Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import Link from 'next/link';
import React, { Activity } from 'react';
import './styles.module.css';
const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  // minWidth: '280px !important',
  // maxWidth: 'auto !important',
  // width: 'max-content !important',
  top: 0,
  // scrollbarWidth: 'thin',
  // scrollbarGutter: 'stable',
  backgroundColor: '#fff',
  paddingBlock: '32px',
};

type MenuItem = Required<MenuProps>['items'][number] & {
  href?: string;
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  href?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label: href ? <Link href={href}>{label}</Link> : label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'CÁ NHÂN',
    'group-personal',
    null,
    [
      getItem('Dashboard', 'dashboard', <AppstoreOutlined />, undefined, undefined, '/dashboard'),
      getItem(
        'Lịch cá nhân',
        'personal-calendar',
        <CalendarOutlined />,
        undefined,
        undefined,
        '/personal-calendar'
      ),
      getItem(
        'To do list',
        'todo-list',
        <CheckSquareOutlined />,
        undefined,
        undefined,
        '/todo-list'
      ),
      getItem('Tài liệu', 'documents', <FileTextOutlined />, undefined, undefined, '/documents'),
    ],
    'group'
  ),

  getItem(
    'TUYỂN DỤNG',
    'group-recruitment',
    null,
    [
      getItem('Job', 'job', <DollarOutlined />, undefined, undefined, '/job'),
      getItem('Quy trình', 'process', <ApartmentOutlined />, undefined, undefined, '/process'),
    ],
    'group'
  ),

  getItem(
    'TỔ CHỨC',
    'group-organization',
    null,
    [
      getItem('Nhân viên', 'employees', <UserOutlined />, undefined, undefined, '/employees'),
      getItem('Request', 'request', <FormOutlined />, undefined, undefined, '/request'),
      getItem('Báo cáo', 'reports', <BarChartOutlined />, undefined, undefined, '/reports'),
      getItem('Kế hoạch sự kiện', 'events', <CoffeeOutlined />, undefined, undefined, '/events'),
    ],
    'group'
  ),
];

function Sidebar(): React.JSX.Element {
  const { collapsed, setCollapsed } = useSidebarStore();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={siderStyle}
      width={280}
      theme="light"
    >
      <Flex
        align="center"
        justify={collapsed ? 'center' : 'space-between'}
        style={{ paddingInline: 16 }}
      >
        <Activity name="logo" mode={!collapsed ? 'visible' : 'hidden'}>
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            height={26}
            width={146}
            style={{ flexShrink: 0 }}
          />
        </Activity>

        <Button
          type="text"
          icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          style={{
            borderRadius: '50%',
            fontSize: 14,
            width: 24,
            backgroundColor: '#FAFAFA',
            height: 24,
          }}
        />
      </Flex>

      <Menu
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        style={{
          marginTop: 24,
        }}
        items={items}
      />
    </Sider>
  );
}

export default Sidebar;
