import "./globals.css";
import Header from "@/src/components/layout/Header/Header";
import Footer from "@/src/components/layout/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">
        <Header />
        <main className="h-[calc(100vh-80px)] overflow-y-auto">
          {children}
        </main>{" "}
        <Footer />
      </body>
    </html>
  );
}
