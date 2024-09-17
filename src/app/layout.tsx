import React from "react";
import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Jasen's Reddit Clone",
  description: "For kicks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="test">
        {children}
      </body>
    </html>
  );
}
