import { Layout } from 'antd';
import type React from 'react';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';

export default function WithSidebar({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout>
        <Header />
        <Main>{children}</Main>
      </Layout>
    </Layout>
  );
}
