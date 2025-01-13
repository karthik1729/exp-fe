import { Open_Sans } from "next/font/google";
import {Sidebar} from "./_components/sidebar";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${openSans.className} antialiased dark:bg-gray-900 dark:text-white h-screen`}
      >
        <div className="container mx-auto flex flex-row h-full">
          <Sidebar />
          <div className="bg-gray-800 flex-1 px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
