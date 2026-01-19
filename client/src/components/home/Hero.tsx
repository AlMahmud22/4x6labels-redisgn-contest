import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { damping: 20, stiffness: 100, restDelta: 0.001 };
  
  // Split effect variables - Adjusted thresholds
  const leftMove = useSpring(useTransform(scrollYProgress, [0.6, 1], [0, -500]), springConfig);
  const rightMove = useSpring(useTransform(scrollYProgress, [0.6, 1], [0, 500]), springConfig);
  const contentOpacity = useTransform(scrollYProgress, [0.7, 0.9], [1, 0]);
  const splitOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  const features = [
    "Compatible with Rollo, Zebra, Dymo",
    "Water & Grease Resistant",
    "BPA Free & Eco-Friendly"
  ];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-slate-950 text-white min-h-[120vh] flex items-start">
      {/* Background with split grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Column - Text Content */}
          <motion.div 
            style={{ x: leftMove, opacity: splitOpacity }}
            className="flex flex-col gap-10 will-change-transform"
          >
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 bg-blue-500/10 backdrop-blur-2xl border border-blue-500/30 rounded-full px-5 py-2 w-fit"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)] animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-200">Industrial Specification</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-heading font-black text-6xl sm:text-7xl lg:text-[10rem] leading-[0.8] tracking-tighter text-white"
              >
                LABELS THAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400">
                  NEVER FAIL.
                </span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl text-slate-300 max-w-xl leading-relaxed font-bold"
            >
              Industrial-grade thermal shipping labels designed for high-volume fulfillment. 
              Crystal clear print quality and ultra-strong adhesive.
            </motion.p>

            <motion.ul className="grid sm:grid-cols-1 gap-6">
              {features.map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-5 text-lg font-black text-white group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 stroke-[4]" />
                  </div>
                  <span className="tracking-tight">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-wrap gap-6 pt-10">
              <Button size="lg" className="h-20 px-14 text-xl font-black rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_30px_60px_rgba(37,99,235,0.3)] hover:-translate-y-2 transition-all group border-none">
                Shop Collection
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-14 text-xl font-black rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-xl hover:-translate-y-2 transition-all">
                View Supplies
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Visual Mockup */}
          <motion.div 
            style={{ x: rightMove, opacity: splitOpacity }}
            className="relative hidden lg:flex justify-center items-center will-change-transform"
          >
            <div className="relative group perspective-2000">
               <div className="absolute -inset-20 bg-blue-500 rounded-full blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
               
               <motion.div 
                  animate={{ 
                    y: [0, -40, 0],
                    rotateY: [-5, 5, -5]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white rounded-[3.5rem] shadow-[0_80px_160px_rgba(0,0,0,0.4)] p-8 border border-white/50 w-[500px] overflow-hidden transform-gpu"
               >
                  <div className="aspect-[4/6] rounded-[2.5rem] flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden">
                     <div className="w-full h-full p-12 flex flex-col gap-8 relative z-10">
                        <div className="flex justify-between items-start">
                          <div className="w-28 h-28 bg-slate-950 rounded-3xl flex items-center justify-center text-white font-mono text-xl shadow-2xl">
                            QR
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-black uppercase text-slate-400 tracking-[0.2em] mb-2">Priority Mail</p>
                            <p className="text-6xl font-black text-slate-950 leading-none tracking-tighter">4x6</p>
                          </div>
                        </div>
                        <div className="w-full h-1 bg-slate-200 rounded-full opacity-50"></div>
                        <div className="space-y-6">
                           <div className="h-7 bg-slate-200 rounded-full w-full"></div>
                           <div className="h-7 bg-slate-200 rounded-full w-5/6"></div>
                           <div className="h-7 bg-slate-200 rounded-full w-4/6"></div>
                        </div>
                        <div className="mt-auto h-24 bg-slate-950 rounded-3xl w-full flex items-center justify-center overflow-hidden">
                           <div className="w-[85%] h-12 bg-white/10 rounded-xl animate-pulse"></div>
                        </div>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out"></div>
                  </div>
               </motion.div>
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-20 top-1/4 bg-white/95 backdrop-blur-3xl p-8 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-white/50 flex items-center gap-6 z-20"
               >
                  <div className="bg-green-500 w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-2xl shadow-green-500/30">
                    <Check className="w-7 h-7 stroke-[4]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Validation</p>
                    <p className="font-black text-slate-950 text-2xl tracking-tight">Industrial Grade</p>
                  </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -left-20 bottom-1/4 bg-white/95 backdrop-blur-3xl p-8 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-white/50 flex items-center gap-6 z-20"
               >
                  <div className="bg-blue-600 w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <Zap className="w-7 h-7 fill-white stroke-none" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Performance</p>
                    <p className="font-black text-slate-950 text-2xl tracking-tight">Instant Grip</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bounce indicators on bottom when scroll triggers split */}
      <motion.div 
        style={{ opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1]) }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-blue-500 flex gap-4"
      >
        <motion.div animate={{ x: [-20, 20, -20] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowRight className="w-12 h-12 rotate-180 opacity-20" />
        </motion.div>
        <motion.div animate={{ x: [20, -20, 20] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowRight className="w-12 h-12 opacity-20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
