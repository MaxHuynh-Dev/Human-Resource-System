'use client';

import Text from '@/components/Typo';
import { Button } from '@/components/ui/button';
import type React from 'react';
import { useEffect, useRef } from 'react';

function HomePage(): React.ReactElement {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log(buttonRef.current);
  }, []);

  return (
    <>
      <Text Comp={'p'} size={18} color="white">
        Hello
      </Text>
      <Button
        onClick={() => {
          alert('Hello');
        }}
        ref={buttonRef}
      >
        Click me
      </Button>
    </>
  );
}

export default HomePage;
