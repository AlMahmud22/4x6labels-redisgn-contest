import { Link } from "wouter";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice: number | null;
    rating: number;
    reviews: number;
    image: string | null;
    tag: string | null;
    specs: string[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <a className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-square bg-slate-100 overflow-hidden flex items-center justify-center">
          {product.tag && (
            <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10">
              {product.tag}
            </div>
          )}
          {product.image ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full p-8 flex items-center justify-center"
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 rounded-lg"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-white/50 border-2 border-slate-300 flex items-center justify-center">
                  <div className="w-12 h-10 border-3 border-slate-400 rounded-sm"></div>
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product Image</p>
              </div>
            </motion.div>
          )}
          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/5 to-transparent">
             <Button className="w-full shadow-lg" size="sm">
               Add to Cart
             </Button>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2 flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? "fill-current" : "text-slate-200"}`} />
              ))}
            </div>
            <span className="text-xs text-slate-400">({product.reviews})</span>
          </div>
          
          <h3 className="font-heading font-bold text-slate-800 text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {product.specs.slice(0, 2).map((spec, i) => (
              <span key={i} className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-sm border border-slate-200">
                {spec}
              </span>
            ))}
          </div>
          
          <div className="mt-auto flex items-end justify-between">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
              <span className="text-xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
