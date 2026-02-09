'use client';

import { Button } from 'antd';
import type React from 'react';

function HomePage(): React.ReactElement {
  return (
    <Button
      onClick={() => {
        alert('Hello');
      }}
    >
      Click me
    </Button>
  );
}

export default HomePage;
