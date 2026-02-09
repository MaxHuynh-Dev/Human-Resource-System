import cn from 'classnames';
import type React from 'react';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className?: string;
};

export const Container = ({ children, className }: Props): React.JSX.Element => {
  return (
    <div className={cn('w-full mx-auto px-5 md:px-8 lg:px-[50px]', className)}>
      {children}
    </div>
  );
};

export const GridContainer = ({ children, className }: Props): React.JSX.Element => {
  return (
    <div className={cn('grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-5 lg:gap-x-6 w-full', className)}>
      {children}
    </div>
  );
};
