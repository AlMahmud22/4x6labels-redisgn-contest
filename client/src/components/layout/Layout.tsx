import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header />
      <main className="flex-grow pt-[140px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
