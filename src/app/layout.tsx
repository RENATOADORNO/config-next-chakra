'use client'

import { poppins } from '@fonts';
import { ReactNode } from 'react';
import Providers from './providers';
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '../theme/index';
import Head from './head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.variable} suppressHydrationWarning>
      <Head />
      <body suppressHydrationWarning>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
