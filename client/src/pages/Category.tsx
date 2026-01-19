import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS, CATEGORIES, FILTER_OPTIONS } from "@/lib/data";
import { useState, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";

export default function Category() {
  const [, params] = useRoute("/category/:slug");
  const categorySlug = params?.slug;

  const [priceRange, setPriceRange] = useState([
    FILTER_OPTIONS.priceRange.min,
    FILTER_OPTIONS.priceRange.max
  ]);
  const [selectedPrinters, setSelectedPrinters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  // Find the current category
  const currentCategory = CATEGORIES.find(c => c.id === categorySlug);

  // Filter products by category
  const categoryProducts = useMemo(() => {
    let filtered = categorySlug 
      ? PRODUCTS.filter(p => p.category === categorySlug)
      : PRODUCTS;

    // Apply price range filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply printer compatibility filter
    if (selectedPrinters.length > 0) {
      filtered = filtered.filter(p => 
        p.compatiblePrinters?.some(printer => 
          selectedPrinters.some(selected => 
            printer.toLowerCase().includes(selected.toLowerCase())
          )
        )
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "best-selling":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [categorySlug, priceRange, selectedPrinters, sortBy]);

  const togglePrinter = (printer: string) => {
    setSelectedPrinters(prev => 
      prev.includes(printer) 
        ? prev.filter(p => p !== printer)
        : [...prev, printer]
    );
  };

  return (
    <Layout>
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-slate-400 mb-4">
            <a href="/" className="hover:text-white">Home</a>
            {currentCategory && (
              <>
                <span className="mx-2">/</span>
                <span className="text-white">{currentCategory.name}</span>
              </>
            )}
          </nav>
          <h1 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            {currentCategory ? currentCategory.name : "Shop All Products"}
          </h1>
          <p className="text-slate-300 max-w-3xl text-lg">
            {currentCategory ? currentCategory.description : "Browse our complete collection of premium thermal labels, fanfold stacks, and shipping supplies."}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <Card className="p-6">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Sort by</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-md text-sm p-2 text-slate-700 font-medium focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              >
                {FILTER_OPTIONS.sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">Filter</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Compatible / OEM</h4>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="compatible-yes" defaultChecked disabled />
                    <Label htmlFor="compatible-yes" className="text-sm font-medium text-slate-600">
                      Yes ({categoryProducts.length})
                    </Label>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Printer Compatibility</h4>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {FILTER_OPTIONS.printerBrands.map((brand) => {
                      const count = PRODUCTS.filter(p => 
                        p.category === categorySlug &&
                        p.compatiblePrinters?.some(printer => 
                          printer.toLowerCase().includes(brand.toLowerCase())
                        )
                      ).length;
                      
                      return (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`brand-${brand}`}
                            checked={selectedPrinters.includes(brand)}
                            onCheckedChange={() => togglePrinter(brand)}
                          />
                          <Label 
                            htmlFor={`brand-${brand}`} 
                            className="text-sm font-medium text-slate-600 cursor-pointer hover:text-primary"
                          >
                            {brand} ({count})
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Price Range</h4>
                  <Slider 
                    defaultValue={[FILTER_OPTIONS.priceRange.min, FILTER_OPTIONS.priceRange.max]} 
                    max={FILTER_OPTIONS.priceRange.max} 
                    min={FILTER_OPTIONS.priceRange.min}
                    step={FILTER_OPTIONS.priceRange.step} 
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-slate-500 font-medium">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </Card>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="mb-6">
              <span className="text-lg font-semibold text-slate-700">
                {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
              </span>
            </div>

            {categoryProducts.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-slate-500 text-lg">No products found matching your filters.</p>
                <button 
                  onClick={() => {
                    setPriceRange([FILTER_OPTIONS.priceRange.min, FILTER_OPTIONS.priceRange.max]);
                    setSelectedPrinters([]);
                  }}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
