import "./globals.css";
import localFont from '@next/font/local';

const louis = localFont({ 
  src: '../public/fonts/louis.ttf',
  display: 'swap' // Optional: you can add font-display settings here
});

export const metadata = {
  title: "ham links",
  description: "link page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={louis.className}>{children}</body>
    </html>
  );
}
