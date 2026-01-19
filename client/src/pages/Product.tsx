import { Layout } from "@/components/layout/Layout";
import { PRODUCTS, VOLUME_DISCOUNTS, POLICIES } from "@/lib/data";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Truck, ShieldCheck, ArrowRight, Minus, Plus, Check } from "lucide-react";
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Product() {
  const [, params] = useRoute("/product/:id");
  const product = PRODUCTS.find(p => p.id === params?.id) || PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  
  // Get all media items (images and video)
  const allImages = product.images || (product.image ? [product.image] : []);
  const hasVideo = !!product.video;
  
  // Calculate price based on quantity and volume discounts
  const getCurrentPrice = () => {
    const tier = [...VOLUME_DISCOUNTS].reverse().find(t => quantity >= t.quantity) || VOLUME_DISCOUNTS[0];
    return product.price * (1 - tier.discount);
  };
  
  const getCurrentDiscount = () => {
    const tier = [...VOLUME_DISCOUNTS].reverse().find(t => quantity >= t.quantity) || VOLUME_DISCOUNTS[0];
    return tier.discount;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 aspect-square p-8 flex items-center justify-center relative overflow-hidden group">
               {showVideo && hasVideo ? (
                 <video 
                   controls 
                   autoPlay
                   className="w-full h-full object-contain"
                   src={product.video}
                 >
                   Your browser does not support the video tag.
                 </video>
               ) : allImages.length > 0 ? (
                 <img 
                   src={allImages[selectedImage]} 
                   alt={product.name}
                   className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                 />
               ) : (
                 <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg">
                   <div className="text-center">
                     <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-white/50 border-4 border-slate-200 flex items-center justify-center">
                       <div className="w-20 h-16 border-4 border-slate-300 rounded"></div>
                     </div>
                     <p className="text-sm font-bold text-slate-300 uppercase tracking-wider">Product Image</p>
                   </div>
                 </div>
               )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {allImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    setSelectedImage(idx);
                    setShowVideo(false);
                  }}
                  className={`aspect-square bg-white rounded-lg border p-2 cursor-pointer hover:border-primary transition-colors ${
                    selectedImage === idx && !showVideo ? 'border-primary' : 'border-slate-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply opacity-70 hover:opacity-100" />
                </div>
              ))}
              {hasVideo && (
                <div 
                  onClick={() => setShowVideo(true)}
                  className={`aspect-square bg-white rounded-lg border p-2 cursor-pointer hover:border-primary transition-colors relative ${
                    showVideo ? 'border-primary' : 'border-slate-100'
                  }`}
                >
                  <video 
                    src={product.video}
                    className="w-full h-full object-contain"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {product.tag && (
              <div className="inline-block mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  {product.tag}
                </span>
              </div>
            )}
            
            {/* Product Code */}
            {product.specifications.find(s => s.label === "Product Code") && (
              <div className="mb-3">
                <span className="text-slate-500 text-sm">
                  Product Code: <span className="font-bold text-slate-700">{product.specifications.find(s => s.label === "Product Code")?.value}</span>
                </span>
              </div>
            )}
            
            <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-current" : "text-slate-200"}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-slate-500 border-l border-slate-200 pl-4">{product.reviews} Verified Reviews</span>
            </div>

            <div className="flex items-end gap-3 mb-2">
              <span className="text-4xl font-bold text-slate-900">${getCurrentPrice().toFixed(2)}</span>
              <span className="text-sm text-slate-500 mb-2">/ Case</span>
              {product.originalPrice && (
                <span className="text-xl text-slate-400 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            
            {getCurrentDiscount() > 0 && (
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                  Save {(getCurrentDiscount() * 100).toFixed(0)}% on this order
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity Pricing Table */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Bulk Pricing
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-2 px-3 font-bold text-slate-700">Quantity</th>
                      <th className="text-right py-2 px-3 font-bold text-slate-700">Price</th>
                      <th className="text-right py-2 px-3 font-bold text-slate-700">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VOLUME_DISCOUNTS.map((tier) => (
                      <tr 
                        key={tier.quantity}
                        className={`border-b border-slate-100 ${
                          quantity >= tier.quantity ? 'bg-blue-50' : ''
                        }`}
                      >
                        <td className="py-2 px-3 font-medium">{tier.label.split(' - ')[0]}</td>
                        <td className="text-right py-2 px-3 font-bold">
                          ${(product.price * (1 - tier.discount)).toFixed(2)} / Case
                        </td>
                        <td className="text-right py-2 px-3 text-green-600 font-bold">
                          {tier.discount > 0 ? `Save ${(tier.discount * 100).toFixed(0)}%` : '-'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <div className="flex items-center border-2 border-slate-300 rounded-lg h-14 w-full sm:w-40">
                 <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center hover:bg-slate-100 text-slate-700 font-bold"
                 >
                   <Minus className="w-5 h-5" />
                 </button>
                 <div className="flex-grow text-center font-bold text-slate-900 text-lg">{quantity}</div>
                 <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center hover:bg-slate-100 text-slate-700 font-bold"
                 >
                   <Plus className="w-5 h-5" />
                 </button>
               </div>
               <Button size="lg" className="flex-grow h-14 text-base font-bold shadow-lg shadow-primary/20">
                 Add to Cart - ${(getCurrentPrice() * quantity).toFixed(2)}
               </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                 <Truck className="w-6 h-6 text-green-600 flex-shrink-0" />
                 <div>
                   <div className="font-bold text-green-900 text-sm">Free Shipping</div>
                   <div className="text-xs text-green-700">On all orders</div>
                 </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                 <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                 <div>
                   <div className="font-bold text-blue-900 text-sm">30-Day Guarantee</div>
                   <div className="text-xs text-blue-700">Money back</div>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">
               <div className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-600" />
                 <span className="font-medium">Ships within 24 hours</span>
               </div>
               <div className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-600" />
                 <span className="font-medium">In stock and ready to ship</span>
               </div>
               <div className="flex items-center gap-3">
                 <Check className="w-5 h-5 text-green-600" />
                 <span className="font-medium">Secure checkout</span>
               </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-slate-200 rounded-none h-auto p-0 mb-8">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-6 text-base">Description</TabsTrigger>
              <TabsTrigger value="specs" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-6 text-base">Specifications</TabsTrigger>
              <TabsTrigger value="compatibility" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-6 text-base">Compatibility</TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-4 px-6 text-base">
                Reviews ({product.customerReviews?.length || 0})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {product.description} {product.longDescription}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <Check className="w-4 h-4 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specs">
              <div className="border rounded-lg overflow-hidden">
                {product.specifications.map((spec, i) => (
                  <div key={i} className={`flex justify-between p-4 ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                    <span className="font-medium text-slate-600">{spec.label}</span>
                    <span className="font-bold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="compatibility">
              {product.compatiblePrinters ? (
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Compatible Printers</h4>
                  <p className="text-blue-800 mb-4">
                    These labels are designed to work perfectly with most major desktop thermal printers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.compatiblePrinters.map((brand) => (
                      <span key={brand} className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <p className="text-slate-600">
                    This product does not require printer compatibility information.
                  </p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="reviews">
              {product.customerReviews && product.customerReviews.length > 0 ? (
                <div className="space-y-6">
                  {/* Reviews Summary */}
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="text-center">
                        <div className="text-5xl font-black text-slate-900 mb-2">{product.rating}</div>
                        <div className="flex items-center gap-1 text-yellow-400 mb-2 justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? "fill-current" : "text-slate-300"}`} />
                          ))}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">Based on {product.reviews} reviews</div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-700 text-lg font-medium mb-4">
                          {product.reviews} customers have reviewed this product
                        </p>
                        <div className="text-sm text-slate-600">
                          {Math.round((product.customerReviews.filter(r => r.rating === 5).length / product.customerReviews.length) * 100)}% of reviewers recommend this product
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {product.customerReviews.map((review) => (
                      <div key={review.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-bold text-slate-900">{review.author}</span>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                  <Check className="w-3 h-3" />
                                  Verified Purchase
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1 text-yellow-400 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-slate-300"}`} />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-slate-500">{review.date}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2">{review.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 p-12 rounded-xl border border-slate-200 text-center">
                  <p className="text-slate-600 text-lg">No reviews yet. Be the first to review this product!</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
