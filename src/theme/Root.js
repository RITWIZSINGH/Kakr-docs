import React from 'react';
import ConsentManager from '@site/src/components/ConsentBanner';

export default function Root({children}) {
  return (
    <>
      {children}
      <ConsentManager />
    </>
  );
}