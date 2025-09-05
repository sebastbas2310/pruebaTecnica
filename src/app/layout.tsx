import WaveBackground from '../components/WaveBackground';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className='relative min-h-screen'>
        <WaveBackground />
        {children}
      </body>
    </html>
  );
}
