import './globals.css';

export const metadata = {
  title: 'a little blue birthday — for Eis♡',
  description: 'a small interactive birthday journey made especially for Eis♡.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
