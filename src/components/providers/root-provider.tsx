'use client';
import { NextUIProvider } from '@nextui-org/react';
import { TRPCReactProvider } from '~/trpc/react';

export function Providers({ children }: { children: React.ReactNode; }) {
  return (
    <TRPCReactProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </TRPCReactProvider>
  );
}