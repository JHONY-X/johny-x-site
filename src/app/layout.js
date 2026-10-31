import './globals.css';

export const metadata = {
  title: 'Ermias Dereje Portfolio',
  description: 'Software Engineering Student & Web Security Enthusiast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-bg text-text antialiased">
      <body className="flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
