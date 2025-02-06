import React from 'react';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full border rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${className}`}
      {...props}
    />
  )
);