'use client';

import '@/app/styles/globals.css';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useServerInsertedHTML(() => {
    return <>{styledComponentsStyleSheet.getStyleElement()}</>;
  });

  return isClient ? children : <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}
