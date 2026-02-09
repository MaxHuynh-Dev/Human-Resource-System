'use client';

import { Container, GridContainer } from '@Components/Container';
import type React from 'react';
import { Activity, useCallback, useEffect, useState } from 'react';

const GridColumn = (): React.ReactElement => (
  <div className="col-span-1">
    <div className="bg-[#ff6b4c]/30 h-screen relative before:content-[''] before:absolute before:h-full before:left-0 before:w-px before:bg-[#ff6b4c]/30 after:content-[''] after:absolute after:h-full after:right-0 after:w-px after:bg-[#ff6b4c]/30" />
  </div>
);

export default function GridDebug(): React.ReactElement {
  const [isGrid, setIsGrid] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem('isGrid');
      return storedValue === 'true';
    }
    return false;
  });

  const handleKeyDown: (ev: KeyboardEvent) => void = useCallback(
    (ev: KeyboardEvent) => {
      const isShift = ev.shiftKey;
      const key = ev.key.toLowerCase();
      if (isShift && key === 'g') {
        const nextValue = !isGrid;
        localStorage.setItem('isGrid', String(nextValue));
        setIsGrid(nextValue);
      }
    },
    [isGrid]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Activity mode={isGrid ? 'visible' : 'hidden'} name="Grid Debug">
      <div className="h-full pointer-events-none fixed w-full top-0 left-1/2 -translate-x-1/2 z-[99999999999]">
        <Container>
          <GridContainer>
            {Array.from({ length: 12 }).map((_, index) => (
              <GridColumn key={`grid-column-${index.toString()}`} />
            ))}
          </GridContainer>
        </Container>
      </div>
    </Activity>
  );
}
