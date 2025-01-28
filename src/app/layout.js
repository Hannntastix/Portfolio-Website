import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: "Raihan's Portfolio",
  description: "Get To Know About Me",
  icons : "/assets/Logo.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Raihan's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={poppins.variable}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
