import { Montserrat, Open_Sans } from "next/font/google";
import "./app.css";
import "./globals.css";
import Head from "next/head";

const font = Open_Sans({
  // weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
