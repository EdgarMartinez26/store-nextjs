import Footer from "@/components/Footer";
import Header from "@/components/shared/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-linear-to-br from-black via-gray-900 to-black">
        <Header />
        {children}
        <Footer />
    </div>
  );
}
