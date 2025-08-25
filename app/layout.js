export const metadata = {
  title: 'Skeuomorphic Showcase',
  description: 'A soft, tactile skeuomorphic UI demo built with Next.js + Tailwind CSS.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
