import { metadataConfig } from '@/constants/metadata';
import MainLayout from '@/layout/MainLayout';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@Styles/global.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdRegistry>
          <MainLayout>{children}</MainLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
