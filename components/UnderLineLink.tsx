'use client';

import React from 'react';

type UnderlineLinkProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function UnderlineLink({
  children,
  onClick,
  className = '',
}: UnderlineLinkProps) {
  return (
    <span
      onClick={onClick}
      className={`
        text-sm text-gray-600 cursor-pointer relative
        after:absolute after:left-0 after:-bottom-[2px]
        after:h-[1px] after:w-0 after:bg-current
        after:transition-all after:duration-300
        hover:after:w-full
        ${className}
      `}
    >
      {children}
    </span>
  );
}
