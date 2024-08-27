// import { Open_Sans } from "next/font/google";
import "./app.css";
import "./globals.css";
import Head from "next/head";

import "@fontsource/open-sans/300.css"; // Light
import "@fontsource/open-sans/400.css"; // Normal
import "@fontsource/open-sans/500.css"; // Medium
import "@fontsource/open-sans/600.css"; // Semi Bold
import "@fontsource/open-sans/700.css"; // Bold
import "@fontsource/open-sans/800.css"; // Extra Bold

// const open_sans = Open_Sans({
//   // weight: ["300", "400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ragib Al Asad | Portfolio",
  description:
    "Ragib Al Asad - Web Developer & Programmer. Explore my projects and contact me for collaborations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="logo_32.png" />
      </Head>
      <body
        // className={open_sans.className}
        style={{ fontFamily: "Open Sans, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
