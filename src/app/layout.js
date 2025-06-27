import { Cabin } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const cabin = Cabin({
  weight: ["400", "500", "600", "700"], // Include the weights you want
  subsets: ["latin"],
  variable: "--font-cabin",
});

export const metadata = {
  title: "Big",
  description: "Bstl Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cabin.variable}>
        <Header />
        <main className="content-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
