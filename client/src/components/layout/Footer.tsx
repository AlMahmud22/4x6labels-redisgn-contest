import { Logo } from "@/components/ui/Logo";
import { Facebook, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Logo light />
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              We’re proud to be recognized as one of America’s top online label providers, trusted nationwide for our quality and unmatched pricing of 4x6 thermal roll and fanfold labels—delivering performance, reliability, and value to businesses of all sizes.
            </p>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-300">2814 Mercury Rd.<br />Jacksonville, FL 32207</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-300">Toll Free: (+1) 866-577-9671</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-5 text-blue-500 font-black">F</span>
                <span className="text-slate-300">Fax: (+1) 904-737-9022</span>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-heading font-black text-white mb-8 uppercase tracking-widest text-[11px]">Company Info</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">About Us</a></Link></li>
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">Contact Us</a></Link></li>
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">FAQ's</a></Link></li>
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">Return Policy</a></Link></li>
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">Sitemap</a></Link></li>
              <li><Link href="/"><a className="hover:text-blue-500 transition-colors">Blog</a></Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-heading font-black text-white mb-8 uppercase tracking-widest text-[11px]">Product Categories</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/category/direct-thermal"><a className="hover:text-blue-500 transition-colors">Direct Thermal Labels</a></Link></li>
              <li><Link href="/category/thermal-transfer"><a className="hover:text-blue-500 transition-colors">Thermal Transfer Labels</a></Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-heading font-black text-white mb-4 uppercase tracking-widest text-[11px]">Sign Up for Newsletter</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Subscribe to our newsletter to receive our special email offers and more.
              </p>
            </div>
            
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm outline-none focus:border-blue-500 transition-all text-white font-medium"
              />
              <button className="absolute right-1 top-1 bottom-1 px-6 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all">
                Subscribe
              </button>
            </form>
            <p className="text-[10px] text-slate-500 font-medium">
              By subscribing you accepted our Policy
            </p>
          </div>
        </div>

        {/* Badges & Bottom */}
        <div className="border-t border-white/5 pt-12">
          <div className="flex flex-wrap justify-center gap-12 mb-12 opacity-50">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">🚀</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Fast & free shipping</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">🛡️</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Trusted businesses</span>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">💎</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Premium labels</span>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <p>Copyright © 2026, 4x6Labels | All Right Reserved</p>
            <div className="flex items-center gap-8">
              <span className="text-slate-700 tracking-normal capitalize font-medium">Stay connected:</span>
              <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Facebook
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
