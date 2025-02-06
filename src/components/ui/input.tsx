import React from 'react';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${className}`}
      {...props}
    />
  )
);