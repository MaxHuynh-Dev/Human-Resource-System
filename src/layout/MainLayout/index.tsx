import GridDebug from '@Components/GridDebug';
import type { PropsWithChildren } from 'react';
import React from 'react';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <React.Fragment>
      {children}
      <GridDebug />
    </React.Fragment>
  );
}
