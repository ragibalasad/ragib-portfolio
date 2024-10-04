import React, { ReactNode } from "react";  // Import React
import "./app.css";
import "./globals.css";
import "@fontsource/open-sans/300.css"; // Light
import "@fontsource/open-sans/400.css"; // Normal
import "@fontsource/open-sans/500.css"; // Medium
import "@fontsource/open-sans/600.css"; // Semi Bold
import "@fontsource/open-sans/700.css"; // Bold
import "@fontsource/open-sans/800.css"; // Extra Bold

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
    <html lang="en">
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
      <body style={{ fontFamily: "Open Sans, sans-serif" }}>{children}</body>
    </html>
  );
}
