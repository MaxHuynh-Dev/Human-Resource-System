import GridDebug from '@Components/GridDebug';
import ConfigThemeProvider from '@Layout/Theme';
import { App } from 'antd';
import type { PropsWithChildren } from 'react';
import React from 'react';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <ConfigThemeProvider>
      <App>{children}</App>
      <GridDebug />
    </ConfigThemeProvider>
  );
}
