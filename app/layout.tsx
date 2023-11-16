import "./globals.css";
import { ServerAuthProvider } from "../auth/server-auth-provider";
// import '@mantine/core/styles.css';
import type { Metadata } from 'next'

import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Banking App',
  description: 'New and modern banking application.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        {/* <MantineProvider defaultColorScheme="dark"> */}
          <ServerAuthProvider>{children}</ServerAuthProvider>
        {/* </MantineProvider> */}
      </body>
    </html>
  );
}
