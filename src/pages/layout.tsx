import Sidebar from '../components/Sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role: 'ADMIN' | 'USER' = 'ADMIN'; // temporal, luego se obtiene del auth

  return (
    <html lang='es'>
      <body className='flex'>
        <Sidebar role={role} />
        <main className='flex-1 p-8 bg-gray-100 min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
