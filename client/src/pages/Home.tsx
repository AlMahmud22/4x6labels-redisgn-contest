import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/lib/data";
import { Truck, ShieldCheck, DollarSign, Zap, ArrowRight, Package, Shield, Activity, Cpu, ChevronRight, Plus, Minus, Search, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [activeFaqs, setActiveFaqs] = useState<number[]>([]);

  const bulletinItems = [
    { icon: <Truck className="w-4 h-4" />, text: "Free Shipping: Enjoy free delivery on all orders – no hidden fees!" },
    { icon: <ShieldCheck className="w-4 h-4" />, text: "Top Rated: Durable, smudge-proof labels built to withstand extreme conditions" },
    { icon: <DollarSign className="w-4 h-4" />, text: "Low Price Guarantee: We'll beat any advertised price by 5%" },
    { icon: <Zap className="w-4 h-4" />, text: "Fast Shipping: Most orders deliver in 1 to 4 days" }
  ];

  const brands = [
    { name: "McDonalds", logo: "/images/mcD.png" },
    { name: "Dunkin Donuts", logo: "/images/dunkindonuts.png" },
    { name: "US Food Service", logo: "/images/usfoodservice.png" },
    { name: "Subway", logo: "/images/subway.png" },
    { name: "Grainger", logo: "/images/grainger.png" },
    { name: "Boeing", logo: "/images/boeing.png" },
    { name: "US Postal Service", logo: "/images/united states postal service.png" },
    { name: "Sysco", logo: "/images/sysco.png" },
    { name: "HP", logo: "/images/hp.png" },
    { name: "INTUIT", logo: "/images/intuit.png" },
    { name: "The Home Depot", logo: "/images/the home depot.png" }
  ];

  const faqs = [
    { q: "Can I use 4x6 labels for USPS?", a: "Yes, our 4x6 labels are perfectly sized and compatible with USPS Priority Mail and other postal services." },
    { q: "Can I print 4x6 labels on a regular printer?", a: "While we offer labels for inkjet and laser printers, thermal labels require a dedicated thermal printer for best results and to eliminate ink costs." },
    { q: "What are 4x6 labels used for?", a: "They are primarily used for shipping labels, but are also excellent for inventory tags, barcode labels, and retail pricing." },
    { q: "How long do 4X6 thermal labels last?", a: "Standard direct thermal labels are ideal for short-term use (up to a year), while thermal transfer labels can last significantly longer in harsh environments." },
    { q: "What is the difference between direct thermal and thermal transfer?", a: "Direct thermal uses heat-sensitive paper and no ribbon, while thermal transfer uses a thermal ribbon for more durable, long-lasting prints." },
    { q: "Are your labels compatible with Zebra and Rollo printers?", a: "Yes, our labels are 100% compatible with Zebra, Rollo, Dymo, and all major thermal printer brands." },
    { q: "How fast is shipping?", a: "Most orders are processed same-day and deliver within 1 to 4 business days nationwide." },
    { q: "Do you offer bulk discounts?", a: "Absolutely! We offer tiered pricing for large volume orders. Contact our sales team for a custom quote." }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const expandAll = () => setActiveFaqs(faqs.map((_, i) => i));
  const collapseAll = () => setActiveFaqs([]);

  return (
    <Layout>
      <Hero />
      
      {/* 3. News Bulletin Carousel / Banner */}
      <div className="bg-blue-600 text-white py-4 relative overflow-hidden whitespace-nowrap border-y border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-20 px-10"
        >
          {[...bulletinItems, ...bulletinItems].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Intro Section - Reliable labels */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block"
            >
              Efficiency & Precision
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 text-slate-950 leading-none"
            >
              Reliable thermal printer shipping labels for everyday business needs
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-500 font-bold leading-relaxed mb-8"
            >
              At 4x6Labels.com, we help warehouses, e-commerce sellers, fulfillment teams, and small businesses stay organized with dependable labeling supplies — designed specifically to deliver crisp prints, fast application, and long-lasting performance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section with SVG Icons */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Fast & Free Shipping",
                description: "Get your labels delivered quickly with free shipping on all orders",
                icon: "/images/Fast_Free_Shipping.svg"
              },
              {
                title: "Premium Quality Labels",
                description: "Industrial-grade materials designed for durability and performance",
                icon: "/images/Premium_Labels.svg"
              },
              {
                title: "Bulk Discounts Available",
                description: "Save more when you buy in larger quantities with our volume pricing",
                icon: "/images/Prices_Bulks_Discounts_1.svg"
              },
              {
                title: "Trusted by Businesses",
                description: "Join thousands of companies who rely on our labels daily",
                icon: "/images/Trusted_Business.svg"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tighter text-slate-950 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 font-bold leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Carousel Section */}
      <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Performance Hardware</span>
              <h2 className="font-heading font-black text-4xl lg:text-6xl tracking-tighter uppercase leading-none">High Volume <br /> Essentials</h2>
            </div>
            <div className="flex gap-4 mb-4">
               <button className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors">
                 <ChevronRight className="w-5 h-5 rotate-180" />
               </button>
               <button className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x">
             {PRODUCTS.map((p, i) => (
               <motion.div 
                 key={p.id} 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.8 }}
                 className="w-[320px] flex-shrink-0 snap-center"
               >
                  <ProductCard product={p} />
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Featured Categories - Minimalist Industrial Style */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-16 max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              System Selection
            </motion.span>
            <h2 className="font-heading font-black text-4xl lg:text-6xl tracking-tighter uppercase mb-6 text-slate-950 leading-none">
              Featured <br /> Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              whileHover={{ y: -10, scale: 1.01 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-slate-950 transition-all duration-700 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="font-heading font-black text-3xl mb-4 group-hover:text-white transition-colors tracking-tighter uppercase">Direct Thermal Labels</h3>
                <p className="text-slate-600 group-hover:text-slate-400 mb-10 font-bold leading-relaxed text-base max-w-sm">
                  No ink, no ribbon – just sharp, fade-resistant prints for short-term use. Ideal for warehouses, retail, and shipping labels.
                </p>
                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 font-black text-[10px] uppercase tracking-widest px-8 h-14">Shop Now</Button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/5 group-hover:bg-blue-600/10 rounded-full blur-3xl transition-colors duration-700"></div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10, scale: 1.01 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-slate-950 transition-all duration-700 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="font-heading font-black text-3xl mb-4 group-hover:text-white transition-colors tracking-tighter uppercase">Thermal Transfer Labels</h3>
                <p className="text-slate-600 group-hover:text-slate-400 mb-10 font-bold leading-relaxed text-base max-w-sm">
                  Designed for long-lasting durability, these labels use a ribbon for precise, smudge-resistant prints; perfect for industrial applications.
                </p>
                <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-500 font-black text-[10px] uppercase tracking-widest px-8 h-14">Shop Now</Button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-600/5 group-hover:bg-indigo-600/10 rounded-full blur-3xl transition-colors duration-700"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Brand Logos - Infinite Marquee */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-2"
          >
            Institutional Trust
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-black uppercase tracking-tighter text-slate-950"
          >
            More than 1,000+ companies work with us
          </motion.h3>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 py-4 px-12 group-hover:[animation-play-state:paused]"
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default">
                 <img src={brand.logo} alt={brand.name} className="h-12 w-auto object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Characteristic Section - Detailed labels Types */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
             transition={{ duration: 20, repeat: Infinity }}
             className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[150px]" 
           />
           <motion.div 
             animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
             transition={{ duration: 25, repeat: Infinity }}
             className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[150px]" 
           />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block"
            >
              Engineered for Performance
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6"
            >
              Types of Labels <br /> We Offer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lg text-slate-400 font-bold max-w-2xl leading-relaxed"
            >
              Choosing the right 4X6 thermal labels is essential for efficient shipping, inventory tracking, and product labeling. Here’s a closer look at our high-quality options:
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Shipping Labels", 
                desc: "Perfect for departments compatible with Zebra, Rollo, Dymo. Clear, smudge-proof printing for packing slips and logistics.",
                icon: <Truck className="w-8 h-8" />
              },
              { 
                title: "Direct Thermal", 
                desc: "No ink or toner required. Relies on heat-sensitive paper for crisp, readable prints for temporary labeling.",
                icon: <Zap className="w-8 h-8" />
              },
              { 
                title: "Inkjet & Laser", 
                desc: "High-resolution prints for branding, custom designs, and barcodes. Allows for full-color printing.",
                icon: <Activity className="w-8 h-8" />
              },
              { 
                title: "Label Paper", 
                desc: "Multiple finishes including matte, glossy, and weather-resistant for inventory tags and customized labels.",
                icon: <Package className="w-8 h-8" />
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all group perspective-1000"
              >
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform origin-left duration-500">{feature.icon}</div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 font-bold leading-relaxed text-sm group-hover:text-slate-200 transition-colors">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section - Waterproof, Built for Speed */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase text-slate-950 mb-10 leading-none">
                Built for Speed, Clarity & <br /> Compatibility
              </h2>
              <div className="space-y-10">
                {[
                  { title: "Instant Batching", desc: "Our 4x6 labels produce clear barcodes and legible text every time. They load easily and reduce waste by eliminating ink requirements.", icon: <Zap className="w-7 h-7" /> },
                  { title: "Waterproof Protection", desc: "Rain, condensation, and rough handling won’t stop our labels. Designed for outdoor exposure and freezer storage.", icon: <ShieldCheck className="w-7 h-7" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.15) }}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-950 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase tracking-tighter text-slate-950 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-slate-500 font-bold leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[2.5rem] overflow-hidden bg-slate-100 aspect-square flex items-center justify-center group shadow-xl max-w-sm mx-auto"
            >
               <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
               <div className="text-center p-12 relative z-10 w-full overflow-hidden">
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <Package className="w-20 h-20 text-slate-950 mx-auto mb-6 group-hover:scale-105 transition-transform" />
                 </motion.div>
                 <h3 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-none">High-Volume <br /> Optimized</h3>
                 <p className="text-slate-500 font-bold text-sm leading-tight px-4">Simplified ordering for ten packages or thousands per day.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="order-2 lg:order-1"
             >
               <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Our Specialization</span>
               <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-slate-950 mb-8 leading-none">About 4x6Labels.com</h2>
               <p className="text-lg text-slate-500 font-bold leading-relaxed mb-10">
                 At 4X6 Labels, we specialize in high-quality 4X6 thermal labels built for efficiency, durability, and precision. Whether you’re a small business or a large enterprise, we offer:
               </p>
               <ul className="grid sm:grid-cols-1 gap-5 mb-10">
                 {[
                   "Bulk discounts for cost-effective labeling",
                   "Industry-leading customer service",
                   "Premium labels designed to last"
                 ].map((text, i) => (
                   <motion.li 
                     key={i} 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.4 + (i * 0.1) }}
                     className="flex items-center gap-4 text-base font-black text-slate-950 group cursor-default"
                   >
                     <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                       <Plus className="w-3 h-3 stroke-[3]" />
                     </div>
                     {text}
                   </motion.li>
                 ))}
               </ul>
               <Button size="lg" className="h-14 px-10 rounded-full bg-slate-950 font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors duration-500 shadow-lg">Learn More</Button>
             </motion.div>
             <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
                {[
                  { label: "100%", sub: "Compatible", color: "text-blue-600" },
                  { label: "FAST", sub: "Delivery", color: "text-slate-950" },
                  { label: "SECURE", sub: "Payments", color: "text-slate-950" },
                  { label: "BULK", sub: "Discounts", color: "text-blue-600" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 text-center ${i % 2 !== 0 ? 'translate-y-8' : ''} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-default overflow-hidden`}
                  >
                     <div className={`text-3xl font-black ${item.color} mb-1 tracking-tighter group-hover:scale-105 transition-transform`}>{item.label}</div>
                     <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-colors">{item.sub}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Common Queries</span>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-slate-950 leading-none mb-10">Frequently Asked <br /> Questions</h2>
              <p className="text-lg text-slate-500 font-bold leading-relaxed max-w-lg mb-10">
                Find answers to common questions about our industrial labels and logistical supplies.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Button size="lg" className="rounded-full bg-slate-950 h-14 px-10 font-black text-[10px] uppercase tracking-widest shadow-lg">Contact Support</Button>
                <button 
                  onClick={activeFaqs.length === faqs.length ? collapseAll : expandAll}
                  className="text-[9px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {activeFaqs.length === faqs.length ? "Collapse All" : "Expand All Answers"}
                </button>
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-[1.5rem] border border-slate-200 overflow-hidden transition-all hover:border-blue-500 hover:shadow-lg group">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full p-6 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-black uppercase tracking-tighter text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">{faq.q}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0 ml-4">
                      {activeFaqs.includes(i) ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaqs.includes(i) && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-slate-500 font-bold leading-relaxed text-sm">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section - Enhanced Glow Style */}
      <section className="bg-slate-950 py-32 relative overflow-hidden group">
        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)] pointer-events-none opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading font-black text-6xl lg:text-[100px] tracking-tighter mb-12 uppercase leading-[0.8] mix-blend-difference"
            style={{ 
              color: "white",
              textShadow: "0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)"
            }}
          >
            SCALE YOUR <br /> WORKFLOW.
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-slate-950 font-black py-6 px-16 rounded-full text-xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest active:scale-95 group-hover:text-blue-600">Shop Now</button>
            <button className="bg-transparent border-2 border-white/20 text-white font-black py-6 px-16 rounded-full text-xl hover:bg-white/10 transition-all uppercase tracking-widest active:scale-95">Bulk Quote</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
