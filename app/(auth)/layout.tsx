import Footer from "@/components/Footer";
import Header from "@/components/shared/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
        <Header />
        {children}
        <Footer />
    </div>
  );
}
