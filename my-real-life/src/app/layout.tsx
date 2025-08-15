import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Real Life App",
  description: "A web app that helps you manage your real life",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
