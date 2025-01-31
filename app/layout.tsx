import "@radix-ui/themes/styles.css";
import "./theme-config.css"
import "./globals.css";
import type { Metadata } from "next";
import { Container, Theme } from "@radix-ui/themes";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import QueryClientProvider from "./QueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider>
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Theme>
              <NavBar />
              <main className="p-5"></main>
              <Container>{children}</Container>
            </Theme>
          </body>
        </AuthProvider>
      </QueryClientProvider>
    </html>
  );
}
