import { metadataConfig } from '@Constants/metadata';
import HomePage from '@Modules/HomePage';
import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = metadataConfig;

export default function Page(): React.ReactElement {
  return <HomePage />;
}
