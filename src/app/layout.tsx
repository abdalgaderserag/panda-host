import type { Metadata } from "next";
// import { Cairo, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

// const cairo = Cairo({
//   weight: ["300", "400", "500", "700", "800"],
//   subsets: ["latin"],
// });

// const sora = Sora({
//   weight: ["300", "400", "500", "700", "800"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Panda Host",
  description: "the best hosting provider in the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
