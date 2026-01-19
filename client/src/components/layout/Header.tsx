import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Phone, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Direct Thermal Labels",
      slug: "direct-thermal",
      items: [
        { name: "1\" Core", desc: "For Desktop Printers" },
        { name: "3\" Core", desc: "Industrial Rolls" },
        { name: "Fanfold", desc: "No core stacks" }
      ]
    },
    {
      title: "Thermal Transfer Labels",
      slug: "thermal-transfer",
      items: [
        { name: "3\" Core", desc: "For Industrial Printers" },
        { name: "Fanfold", desc: "Large volume stacks" },
        { name: "Ribbons", desc: "Resin & Wax" }
      ]
    }
  ];

  return (
    <div className="w-full z-50 flex flex-col fixed top-0 left-0 right-0">
      {/* Top Bar */}
      <div className="bg-slate-950 text-white py-3 px-6 flex justify-between items-center text-xs font-black uppercase tracking-[0.2em] border-b border-white/5">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-blue-400 transition-colors">866-577-9671</span>
          </div>
          <span className="hidden lg:inline text-white/30 hover:text-white transition-colors cursor-default">Premium Logistics Infrastructure</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-black uppercase tracking-widest text-white">4x6 Labels Info</button>
          <button className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-black uppercase tracking-widest text-white">Blog</button>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-black uppercase tracking-widest text-white">
              <User className="w-4 h-4" />
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full transition-all duration-700 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3" : "bg-white py-6"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          <Logo className="shrink-0 transition-transform duration-500 hover:scale-105" />
          
          {/* Main Navigation - Top Center Mega Menu */}
          <nav className="hidden xl:flex flex-1 justify-center min-w-0">
            <NavigationMenu className="max-w-full">
              <NavigationMenuList className="flex-wrap justify-center gap-2">
                {menuItems.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    <NavigationMenuTrigger 
                      onClick={() => setLocation(`/category/${menu.slug}`)}
                      className="bg-transparent text-xs font-black uppercase tracking-widest h-11 px-5 hover:bg-slate-50 transition-all rounded-full border border-transparent hover:border-slate-100 data-[state=open]:bg-slate-50 data-[state=open]:border-slate-100 whitespace-nowrap cursor-pointer"
                    >
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[600px] max-w-[90vw] gap-4 p-6 md:grid-cols-3 bg-white shadow-2xl rounded-3xl border border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                        {menu.items.map((item) => (
                          <li key={item.name} className="group">
                            <NavigationMenuLink asChild>
                              <Link href={`/category/${menu.slug}`}>
                                <a className="block p-4 rounded-2xl hover:bg-blue-50 transition-all duration-300">
                                  <div className="text-xs font-black uppercase tracking-widest text-slate-950 mb-1 group-hover:text-blue-600 transition-colors">{item.name}</div>
                                  <p className="text-[10px] font-bold text-slate-400 leading-tight uppercase group-hover:text-blue-400 transition-colors">{item.desc}</p>
                                </a>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <div className="hidden sm:flex items-center bg-slate-50 rounded-full px-5 h-11 border border-slate-100 focus-within:border-blue-500 focus-within:bg-white transition-all duration-500">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-xs font-black text-slate-900 w-28 lg:w-36 placeholder:text-slate-400 uppercase tracking-widest"
              />
            </div>

            <Button variant="outline" className="h-11 px-5 rounded-full border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all flex items-center gap-2 md:gap-3 group shadow-sm">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-slate-950 group-hover:text-blue-600 transition-all group-hover:rotate-12" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-lg">0</span>
              </div>
              <div className="hidden xs:flex flex-col items-start leading-none">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400">Cart</span>
                <span className="text-xs font-black text-slate-950 group-hover:text-blue-600">$0.00</span>
              </div>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
