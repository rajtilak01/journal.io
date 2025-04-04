import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/theme-provider";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Toaster } from "react-hot-toast";
import { LoadingProvider } from "./context/LoadingContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Journal.io - Your Personal Journal",
  description: "A secure and private journaling application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ColorSchemeScript />
          <Providers>
            <MantineProvider defaultColorScheme="dark">
              <Toaster
                position="top-center"
                toastOptions={{
                  success: {
                    style: {
                      background: "green",
                    },
                  },
                  error: {
                    style: {
                      background: "red",
                    },
                  },
                }}
              />
              <LoadingProvider>
                {children}
              </LoadingProvider>
            </MantineProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
