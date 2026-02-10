'use client';

import { theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import type React from 'react';
import type { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren): React.ReactElement {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      {children}
    </Content>
  );
}
