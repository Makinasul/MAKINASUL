import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { produtos, categorias } from "@/data/produtos";
import { ProductImage } from "@/components/ProductImage";
import NotFound from "@/pages/not-found";

export default function ProductPage() {
  const [match, params] = useRoute("/produto/:id");
  
  if (!match || !params?.id) return <NotFound />;

  const produto = produtos.find(p => p.id === params.id);
  
  if (!produto) return <NotFound />;

  const categoria = categorias.find(c => c.id === produto.categoria);
  const categoriaLabel = categoria ? categoria.label : produto.categoria;

  return (
    <div className="min-h-screen flex flex-col pt-24 bg-background">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-muted-foreground mb-8">
          <Link href="/catalogo" className="hover:text-primary transition-colors">
            Catálogo
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href={`/catalogo?cat=${produto.categoria}`} className="hover:text-primary transition-colors">
            {categoriaLabel}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-foreground font-medium">{produto.nome}</span>
        </div>

        <Link href="/catalogo" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao catálogo
        </Link>

        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-border min-h-[400px] overflow-hidden">
              <ProductImage
                codigo={produto.codigo}
                marca={produto.marca}
                categoria={produto.categoria}
                nome={produto.nome}
                className="w-full h-full min-h-[400px]"
                size="detail"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
              <div className="inline-block bg-gray-100 text-gray-600 font-bold px-3 py-1 rounded text-xs mb-4 w-max uppercase tracking-widest">
                Ref: {produto.codigo}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {produto.nome}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {produto.descricao}
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-8">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Preço</span>
                <div className="text-2xl font-bold text-foreground mt-1">Sob consulta</div>
              </div>

              <div className="space-y-8 flex-grow">
                {produto.especificacoes && produto.especificacoes.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 border-b pb-2">Especificações Técnicas</h3>
                    <ul className="space-y-2">
                      {produto.especificacoes.map((spec, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <span className="w-2 h-2 rounded-full bg-primary mt-1.5 mr-3 shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {produto.vantagens && produto.vantagens.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 border-b pb-2">Vantagens</h3>
                    <ul className="space-y-3">
                      {produto.vantagens.map((vantagem, i) => (
                        <li key={i} className="flex items-start text-foreground font-medium text-sm">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                          {vantagem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-10 pt-6 border-t border-border">
                <a 
                  href={`https://wa.me/5551983433435?text=${encodeURIComponent(`Olá! Gostaria de solicitar uma cotação para o produto *${produto.marca} ${produto.nome}* (Cód: ${produto.codigo}). Podem me ajudar?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 text-lg shadow-md">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Solicitar Cotação pelo WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
