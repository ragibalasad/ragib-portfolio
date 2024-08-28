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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Open Sans, sans-serif" }}>{children}</body>
    </html>
  );
}
