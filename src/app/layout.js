import { Poppins } from "next/font/google";
import "./app.css";
import "./globals.css";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ragib Al Asad | Portfolio",
  description: "Ragib Al Asad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="logo_32.png" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
