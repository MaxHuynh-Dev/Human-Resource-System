import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

function ConfigThemeProvider({ children }: PropsWithChildren): React.ReactElement {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            groupTitleColor: '#21252B',
            itemColor: '#21252B',
            itemHoverColor: '#21252B',
            itemSelectedColor: '#21252B',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default ConfigThemeProvider;
