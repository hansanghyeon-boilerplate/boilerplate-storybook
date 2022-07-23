import React from 'react';
import clsx from 'clsx';
import style from './ComponentName.module.scss';

type ComponentNameProps = {
  children: React.ReactNode;
  className?: string;
  withFoundationBackground?: boolean;
};
export const ComponentName = ({
  children,
  className,
  withFoundationBackground = false,
}: ComponentNameProps) => {
  return (
    <h1
      className={clsx(style['imweb-storybook-component-name'], className, {
        'monday-storybook-component-name--foundation': withFoundationBackground,
      })}
    >
      {children}
    </h1>
  );
};

export default ComponentName;
