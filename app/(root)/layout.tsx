import Footer from "@/components/Footer";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col ">
        <Header />
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
    </div>
  );
}
