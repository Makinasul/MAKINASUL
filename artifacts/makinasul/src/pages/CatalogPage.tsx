import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronRight, MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { produtos, categorias } from "@/data/produtos";
import { ProductImage } from "@/components/ProductImage";

export default function CatalogPage() {
  const [location] = useLocation();
  const [search, setSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);

  // Parse category from URL query string manually
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    const sub = params.get("sub");
    
    if (cat) {
      setActiveCategory(cat);
      setExpandedCategory(cat);
    }
    if (sub) {
      setActiveSubcategory(sub);
    }
  }, [location]);

  const updateUrl = (cat: string | null, sub: string | null) => {
    const url = new URL(window.location.href);
    if (cat) url.searchParams.set("cat", cat);
    else url.searchParams.delete("cat");
    
    if (sub) url.searchParams.set("sub", sub);
    else url.searchParams.delete("sub");
    
    window.history.pushState({}, "", url);
  };

  const handleCategoryToggle = (catId: string) => {
    if (expandedCategory === catId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(catId);
    }
  };

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setActiveSubcategory(null);
    setExpandedCategory(catId);
    setSearch("");
    updateUrl(catId, null);
  };

  const handleSubcategoryClick = (catId: string, subId: string) => {
    setActiveCategory(catId);
    setActiveSubcategory(subId);
    setExpandedCategory(catId);
    setSearch("");
    updateUrl(catId, subId);
  };

  const clearSelection = () => {
    setActiveCategory(null);
    setActiveSubcategory(null);
    setSearch("");
    updateUrl(null, null);
  };

  const goBackToCategory = () => {
    setActiveSubcategory(null);
    updateUrl(activeCategory, null);
  };

  const filteredProdutos = useMemo(() => {
    let result = produtos;

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.nome.toLowerCase().includes(q) ||
        p.codigo.toLowerCase().includes(q) ||
        p.marca.toLowerCase().includes(q) ||
        p.descricao.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    } else {
      if (activeSubcategory) {
        result = result.filter(p => p.subcategoria === activeSubcategory);
      } else if (activeCategory) {
        result = result.filter(p => p.categoria === activeCategory);
      } else {
        // No search and no category selected -> Empty results to show initial state
        result = [];
      }
    }
    
    return result;
  }, [search, activeCategory, activeSubcategory]);

  const activeCategoryData = activeCategory ? categorias.find(c => c.id === activeCategory) : null;
  const activeSubcategoryData = activeSubcategory ? activeCategoryData?.subcategorias.find(s => s.id === activeSubcategory) : null;

  // Show landing state when nothing is selected and no search
  const isLandingState = !activeCategory && !activeSubcategory && !search.trim();

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Catálogo de Produtos</h1>
          <p className="text-muted-foreground max-w-3xl">
            Navegue por nossa linha completa de ferramentas, equipamentos e acessórios profissionais.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-[300px] shrink-0 overflow-y-auto max-h-[calc(100vh-8rem)] sticky top-24 pb-8 no-scrollbar bg-white rounded-xl border border-border shadow-sm p-4">
            <h3 className="font-semibold text-foreground mb-4 px-2">Categorias</h3>
            
            <div className="space-y-1">
              <button
                onClick={clearSelection}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  !activeCategory && !activeSubcategory && !search.trim() ? "bg-primary/10 text-primary" : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                Início do Catálogo
              </button>
              
              {categorias.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <div
                    className={`group flex items-center justify-between w-full px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                      expandedCategory === cat.id || activeCategory === cat.id ? "bg-primary/10" : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleCategoryClick(cat.id)}
                    onMouseEnter={() => setExpandedCategory(cat.id)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold shrink-0">
                        {cat.numero.toString().padStart(2, '0')}
                      </span>
                      <span className={`text-sm font-medium ${activeCategory === cat.id ? "text-primary" : "text-foreground"}`}>
                        {cat.label}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleCategoryToggle(cat.id); }}
                      className="p-1 rounded-full hover:bg-black/5"
                    >
                      <ChevronRight 
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${expandedCategory === cat.id ? "rotate-90" : ""}`} 
                      />
                    </button>
                  </div>
                  
                  {expandedCategory === cat.id && (
                    <div className="pl-12 space-y-1 pb-2">
                      <button
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeCategory === cat.id && !activeSubcategory ? "bg-primary text-white font-medium shadow-sm" : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        Ver todos em {cat.label}
                      </button>
                      {cat.subcategorias.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleSubcategoryClick(cat.id, sub.id)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                            activeSubcategory === sub.id ? "bg-primary text-white font-medium shadow-sm" : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 min-w-0">
            {/* Search Bar - Always Visible */}
            <div className="bg-white p-4 md:p-6 rounded-xl border border-border shadow-sm mb-6">
              <div className="relative max-w-3xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Buscar ferramentas, códigos, marcas, ex: 'parafusadeira 18v'..." 
                  className="pl-12 h-14 text-base bg-gray-50 border-gray-200 focus-visible:ring-primary"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              
              {search.trim() && filteredProdutos.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">{filteredProdutos.length} produtos encontrados</span>
                </div>
              )}
            </div>

            {/* Breadcrumb / Back Button */}
            {!search.trim() && activeCategory && (
              <div className="mb-6 flex items-center gap-4">
                {activeSubcategory ? (
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 pl-2" onClick={goBackToCategory}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para {activeCategoryData?.label}
                  </Button>
                ) : (
                  <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 pl-2" onClick={clearSelection}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Início
                  </Button>
                )}
                <div className="h-6 w-px bg-border"></div>
                <h2 className="text-xl font-bold text-foreground">
                  {activeSubcategoryData ? activeSubcategoryData.label : activeCategoryData?.label}
                </h2>
              </div>
            )}

            {/* Content Area */}
            {isLandingState ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categorias.map((cat) => {
                  const productCount = produtos.filter(p => p.categoria === cat.id).length;
                  return (
                    <Card 
                      key={cat.id} 
                      className="cursor-pointer hover:shadow-md transition-all hover:border-primary/50 group"
                      onClick={() => handleCategoryClick(cat.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">
                            {cat.numero.toString().padStart(2, '0')}
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{cat.label}</h3>
                        <p className="text-sm text-muted-foreground">{productCount} produtos disponíveis</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : filteredProdutos.length === 0 ? (
              <div className="bg-white p-16 text-center rounded-xl border border-border">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Nenhum produto encontrado</h3>
                <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">
                  Não encontramos produtos para "{search}" na categoria selecionada.
                </p>
                <Button onClick={clearSelection}>
                  Limpar busca e filtros
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProdutos.map((produto) => {
                  const subLabel = categorias
                    .find(c => c.id === produto.categoria)?.subcategorias
                    .find(s => s.id === produto.subcategoria)?.label || produto.subcategoria;

                  return (
                    <Card key={produto.id} className="overflow-hidden hover:shadow-md transition-shadow bg-white flex flex-col">
                      <div className="relative aspect-video border-b border-border overflow-hidden">
                        <ProductImage
                          codigo={produto.codigo}
                          marca={produto.marca}
                          categoria={produto.categoria}
                          nome={produto.nome}
                          className="w-full h-full"
                          size="card"
                        />
                        {search.trim() && (
                          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-medium text-gray-700 shadow-sm border border-gray-200 z-10">
                            {subLabel}
                          </div>
                        )}
                      </div>
                      <CardContent className="p-5 flex-grow flex flex-col">
                        <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                          {produto.marca} • {produto.codigo}
                        </div>
                        <h3 className="font-bold text-foreground text-lg leading-tight mb-2">
                          {produto.nome}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {produto.descricao}
                        </p>
                        
                        <div className="mt-auto space-y-3 pt-2">
                          <Link href={`/produto/${produto.id}`}>
                            <Button variant="outline" className="w-full">
                              Ver Detalhes
                            </Button>
                          </Link>
                          <a 
                            href={`https://wa.me/5551983433435?text=${encodeURIComponent(`Olá! Gostaria de solicitar cotação do produto *${produto.marca} ${produto.nome}* (Cód: ${produto.codigo}). Podem me ajudar?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Solicitar Cotação
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
