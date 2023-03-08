import React from 'react';

import './Background.css';

export const Background = ({children, className}) => (
  <div className={className}>
    {children}
  </div>
);
