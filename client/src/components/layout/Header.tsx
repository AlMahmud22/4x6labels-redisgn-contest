import { Link, useLocation } from "wouter";
import { Search, ShoppingCart, User, Phone, ChevronDown, Package } from "lucide-react";
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
      featured: true,
      description: "No ribbon required - heat-sensitive paper for crisp prints",
      items: [
        { 
          name: "1\" Core", 
          desc: "For Desktop Printers",
          image: "/images/submenus/direct-thermal/1'' core for desktop printers.jpg",
          features: ["Rollo Compatible", "Zebra Compatible", "250-1000 Labels"]
        },
        { 
          name: "3\" Core", 
          desc: "Industrial Roll Format",
          image: "/images/submenus/direct-thermal/3'' core.jpg",
          features: ["High Capacity", "1000+ Labels", "Bulk Orders"]
        },
        { 
          name: "Fanfold", 
          desc: "Continuous Feed Stacks",
          image: "/images/submenus/direct-thermal/Fanfold.jpg",
          features: ["No Core", "4000 Labels", "Space Saving"]
        }
      ]
    },
    {
      title: "Thermal Transfer Labels",
      slug: "thermal-transfer",
      featured: true,
      description: "Durable ribbon-based printing for harsh environments",
      items: [
        { 
          name: "3\" Core", 
          desc: "For Industrial Printers",
          image: "/images/submenus/thermal-transfer/TT-3-core-with-ribbon.jpg",
          features: ["Long Lasting", "Fade Resistant", "Chemical Proof"]
        },
        { 
          name: "Fanfold", 
          desc: "Continuous Feed Format",
          image: "/images/submenus/thermal-transfer/Thermal-Transfer-Fanfold-Labels.jpg",
          features: ["High Volume", "Easy Loading", "4000+ Labels"]
        },
        { 
          name: "Ribbons", 
          desc: "Wax & Resin Options",
          image: "/images/submenus/thermal-transfer/TT-Ribbons-2.jpg",
          features: ["Multiple Types", "Compatible", "Bulk Available"]
        }
      ]
    },
    {
      title: "Inkjet Labels",
      slug: "inkjet",
      featured: false,
      description: "Full-color printing capability for branding",
      items: [
        { 
          name: "Rolls", 
          desc: "Continuous Roll Format",
          image: "/images/submenus/inkjet/1-core_88226013-ea16-4f2f-a24c-e68e206eed78.jpg",
          features: ["1\" Core", "Color Printing", "Glossy & Matte"]
        },
        { 
          name: "Sheets", 
          desc: "Standard Sheet Format",
          image: "/images/submenus/inkjet/Inkjet-Labels-Sheets.jpg",
          features: ["Letter Size", "Easy Peeling", "Multi-Purpose"]
        }
      ]
    },
    {
      title: "Other Sizes",
      slug: "other-sizes",
      items: []
    },
    {
      title: "4x6 Labels Info",
      slug: "info",
      items: []
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
          <span className="hidden lg:inline text-white/50 hover:text-white transition-colors cursor-default">Premium Logistics Infrastructure</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline text-blue-400 font-black animate-pulse">FREE SHIPPING</span>
          <button className="hover:text-blue-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-black uppercase tracking-widest text-white">Blog</button>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <button className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-transparent border-none p-0 cursor-pointer text-xs font-black uppercase tracking-widest text-white">
              <User className="w-4 h-4" />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full transition-all duration-700 ${isScrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl py-3" : "bg-white py-6"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
          <Logo className="shrink-0 transition-transform duration-500 hover:scale-105" />
          
          {/* Main Navigation - Premium Uber Mega Menu */}
          <nav className="hidden xl:flex flex-1 justify-center min-w-0">
            <NavigationMenu className="max-w-full">
              <NavigationMenuList className="flex-wrap justify-center gap-2">
                {menuItems.map((menu) => (
                  <NavigationMenuItem key={menu.title}>
                    {menu.items.length === 0 ? (
                      <button
                        onClick={() => menu.slug && setLocation(`/category/${menu.slug}`)}
                        className="bg-transparent text-xs font-black uppercase tracking-widest h-11 px-5 hover:bg-slate-50 transition-all rounded-full border border-transparent hover:border-slate-100 whitespace-nowrap cursor-pointer"
                      >
                        {menu.title}
                      </button>
                    ) : (
                      <>
                        <NavigationMenuTrigger 
                          onClick={() => menu.slug && setLocation(`/category/${menu.slug}`)}
                          className="bg-transparent text-xs font-black uppercase tracking-widest h-11 px-5 hover:bg-slate-50 transition-all rounded-full border border-transparent hover:border-slate-100 data-[state=open]:bg-slate-50 data-[state=open]:border-slate-100 whitespace-nowrap cursor-pointer"
                        >
                          {menu.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-[800px] max-w-[90vw] p-8 bg-gradient-to-br from-white to-slate-50 shadow-2xl rounded-3xl border border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                            {/* Category Header */}
                            {menu.description && (
                              <div className="mb-6 pb-6 border-b border-slate-200">
                                <h3 className="text-lg font-black uppercase tracking-tighter text-slate-950 mb-2">
                                  {menu.title}
                                </h3>
                                <p className="text-xs text-slate-500 font-bold">
                                  {menu.description}
                                </p>
                              </div>
                            )}
                            
                            {/* Premium Grid Layout */}
                            <div className="grid md:grid-cols-3 gap-6">
                              {menu.items.map((item) => (
                                <NavigationMenuLink key={item.name} asChild>
                                  <Link href={menu.slug ? `/category/${menu.slug}` : "#"}>
                                    <a className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-500 hover:-translate-y-1">
                                      {/* Image Section */}
                                      <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                                        {item.image ? (
                                          <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                          />
                                        ) : (
                                          <div className="w-full h-full flex items-center justify-center">
                                            <Package className="w-16 h-16 text-slate-300" />
                                          </div>
                                        )}
                                        {/* Overlay Badge */}
                                        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-wider shadow-lg">
                                          New
                                        </div>
                                      </div>
                                      
                                      {/* Content Section */}
                                      <div className="p-4">
                                        <h4 className="text-sm font-black uppercase tracking-wider text-slate-950 mb-1 group-hover:text-blue-600 transition-colors">
                                          {item.name}
                                        </h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 group-hover:text-blue-400 transition-colors">
                                          {item.desc}
                                        </p>
                                        
                                        {/* Features List */}
                                        {item.features && item.features.length > 0 && (
                                          <ul className="space-y-1">
                                            {item.features.map((feature, idx) => (
                                              <li key={idx} className="flex items-center gap-2 text-[9px] text-slate-500 font-bold">
                                                <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                                                {feature}
                                              </li>
                                            ))}
                                          </ul>
                                        )}
                                      </div>
                                      
                                      {/* CTA Footer */}
                                      <div className="px-4 pb-4">
                                        <div className="text-[9px] font-black uppercase tracking-wider text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                                          Shop Now
                                          <ChevronDown className="w-3 h-3 -rotate-90 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                      </div>
                                    </a>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                            
                            {/* Bottom CTA */}
                            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between">
                              <div className="text-xs text-slate-500 font-bold">
                                Need help choosing? <span className="text-blue-600 font-black cursor-pointer hover:underline">Contact us</span>
                              </div>
                              <button 
                                onClick={() => menu.slug && setLocation(`/category/${menu.slug}`)}
                                className="text-[10px] font-black uppercase tracking-wider text-slate-950 hover:text-blue-600 transition-colors px-4 py-2 rounded-full border border-slate-200 hover:border-blue-200 hover:bg-blue-50"
                              >
                                View All {menu.title}
                              </button>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
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
