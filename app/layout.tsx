import "./globals.css";
import Navbar from "./components/layouts/navbar";
import Newsletter from "./components/layouts/newsletter";
import Footer from "./components/layouts/footer";
import Faq from "./components/layouts/faq";
import GetInTouch from "./components/layouts/getInTouch";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden max-w-[100vw]">
        <Navbar />
        {children}
        <GetInTouch/>
        <Faq/>
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
