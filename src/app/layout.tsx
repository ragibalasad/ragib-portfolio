import React, { ReactNode } from "react";  // Import React
import { Outfit, Inter, Fira_Code } from "next/font/google"; // Import Google Fonts
import "./app.css";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Define metadata
export const metadata = {
  title: "Ragib Al Asad | Portfolio",
  description:
    "Ragib Al Asad - Web Developer & Programmer. Explore my projects and contact me for collaborations.",
  // TODO: include other metadata like open graph, twitter card, etc.
  icons: {
    icon: "favicon.ico",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${firaCode.variable}`}>
      <head>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#020617" id="theme-color" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme) {
                    document.documentElement.classList.add(savedTheme);
                  } else {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
