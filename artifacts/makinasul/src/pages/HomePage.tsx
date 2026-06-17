import { useState, useEffect } from "react";
import imgEsmerilhadeiraMakita from "@assets/image_1781624728096.png";
import sealRevendaPro from "@assets/image_1781696340415.png";
import logoMakita from "@assets/image_1781697009322.png";
import logoBosch from "@assets/image_1781697122537.png";
import logoTyrolit from "@assets/image_1781697149751.png";
import logoDremel from "@assets/image_1781697192123.png";
import logoSkil from "@assets/image_1781697210676.png";
import logoDewalt from "@assets/image_1781697225947.png";
import logoStanley from "@assets/image_1781697266058.png";
import logoBlackDecker from "@assets/image_1781697284561.png";
import logoRedescor from "@assets/image_(3)_1781697352793.jpg";
import logoKadesh from "@assets/image_1781697379912.png";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductImage } from "@/components/ProductImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Wrench,
  Settings,
  Box,
  Clock,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Truck,
  Users,
  Phone,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { produtos } from "@/data/produtos";

const HERO_SLIDES = [
  {
    bgFrom: "#1a0509",
    bgTo: "#3d0012",
    accentColor: "#e4003a",
    brand: "Makita",
    brandLines: [] as string[],
    logoImg: logoMakita as string | null,
    title: "Distribuidor e Assistência Técnica Autorizada Makita",
    subtitle: "Ferramentas profissionais de alto desempenho em Porto Alegre e Região Metropolitana.",
  },
  {
    bgFrom: "#00111f",
    bgTo: "#00274a",
    accentColor: "#cc0000",
    brand: "Bosch Professional",
    brandLines: [] as string[],
    logoImg: logoBosch as string | null,
    title: "Ferramentas Bosch Professional",
    subtitle: "Máxima potência e precisão para os profissionais mais exigentes.",
  },
  {
    bgFrom: "#0a0a1a",
    bgTo: "#0d1a2e",
    accentColor: "#00b4d8",
    brand: "Tyrolit",
    brandLines: [] as string[],
    logoImg: logoTyrolit as string | null,
    title: "Abrasivos Tyrolit",
    subtitle: "A linha premium de discos, rebolos e acessórios para corte, desbaste e polimento profissional.",
  },
  {
    bgFrom: "#0d0d0d",
    bgTo: "#1a1a1a",
    accentColor: "#e4003a",
    brand: "Makinasul",
    brandLines: [] as string[],
    logoImg: sealRevendaPro as string | null,
    title: "Revenda Pro Especialista Makita",
    subtitle: "Credenciada como Revenda Pro Especialista Makita em Porto Alegre e Região Metropolitana.",
  },
];

const FEATURED_CODES = [
  "DHP484",
  "DGA519",
  "DHR242",
  "DTD152",
  "DHS680",
  "DJR187",
];

const LOCACAO_ITEMS = [
  {
    title: "Marteletes",
    codigo: "DHR242",
    marca: "Makita",
    categoria: "bateria",
    img: "https://fi.makitamedia.com/images/3_Makita/301_machines/3011_a_GS1/30120_JPG_zoom/DHR242_C2L0.jpg",
  },
  {
    title: "Furadeiras",
    codigo: "DHP487",
    marca: "Makita",
    categoria: "bateria",
    img: "https://fi.makitamedia.com/images/3_Makita/301_machines/3011_a_GS1/30120_JPG_zoom/DHP487_C2L0.jpg",
  },
  {
    title: "Esmerilhadeiras",
    codigo: "GA5030",
    marca: "Makita",
    categoria: "eletricas",
    img: imgEsmerilhadeiraMakita,
  },
  {
    title: "Serras",
    codigo: "DHS680",
    marca: "Makita",
    categoria: "bateria",
    img: "https://fi.makitamedia.com/images/3_Makita/301_machines/3011_a_GS1/30120_JPG_zoom/DHS680_C2L0.jpg",
  },
];

function BrandCard({ img, name, bg, glow, size = "sm" }: {
  img: string; name: string; bg: string; glow: string; size?: "sm" | "lg";
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`border rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 cursor-default ${size === "lg" ? "h-36" : "h-28"}`}
      style={{
        background: bg,
        boxShadow: hovered ? `0 0 32px 8px ${glow}44` : "0 0 0 0 transparent",
        borderColor: hovered ? `${glow}cc` : "hsl(var(--border))",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} alt={name} className={`w-full h-full object-contain ${size === "lg" ? "p-5" : "p-3"}`} />
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = FEATURED_CODES
    .map((code) => produtos.find((p) => p.codigo === code))
    .filter(Boolean) as typeof produtos;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header />
      <main className="flex-grow">

        {/* ── HERO SECTION ── */}
        <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
              style={{ background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgTo} 100%)` }}
            >
              {/* accent glow */}
              <div
                className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10"
                style={{ background: `radial-gradient(ellipse at right, ${slide.accentColor}, transparent 70%)` }}
              />

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">

                    {/* Left: text */}
                    <div className="lg:w-1/2 text-center lg:text-left z-10">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                        style={{ background: slide.accentColor, color: "#fff" }}
                      >
                        {slide.brand}
                      </span>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                        <a href={`https://wa.me/5551983433435?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento de ferramentas ${slide.brand}. Podem me ajudar?`)}`} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="lg"
                            className="h-13 px-7 text-base font-semibold"
                            style={{ background: slide.accentColor, border: "none" }}
                          >
                            Solicitar Orçamento
                          </Button>
                        </a>
                        <Link href="/catalogo">
                          <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 text-white hover:bg-white hover:text-black border-white/30 h-13 px-7 text-base font-semibold"
                          >
                            Ver Catálogo
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Right: brand visual */}
                    <div className="lg:w-1/2 flex items-center justify-center lg:justify-end z-10 overflow-hidden">
                      {slide.logoImg ? (
                        <img
                          src={slide.logoImg}
                          alt={slide.brand}
                          className="w-auto max-w-[400px] lg:max-w-[520px] max-h-[340px] lg:max-h-[500px] object-contain"
                          style={{ filter: "drop-shadow(0 0 80px rgba(255,255,255,0.12))" }}
                        />
                      ) : (
                        <div className="text-right select-none leading-none font-black uppercase tracking-tighter" style={{ color: slide.accentColor }}>
                          {slide.brandLines.map((line, li) => (
                            <div
                              key={li}
                              style={{
                                fontSize: "clamp(5rem, 13vw, 11rem)",
                                opacity: li === 0 ? 0.95 : 0.8,
                                textShadow: `0 0 120px ${slide.accentColor}55`,
                              }}
                            >
                              {line}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
          >
            <ChevronRight size={28} />
          </button>

          <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
            {HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/40 w-2"}`}
              />
            ))}
          </div>
        </section>

        {/* ── NÚMEROS / STATS ── */}
        <section className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center divide-x-0 lg:divide-x divide-white/20">
              <div className="px-4">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Anos de Mercado</div>
              </div>
              <div className="px-4">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Peças Originais</div>
              </div>
              <div className="px-4">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Marcas Líderes</div>
              </div>
              <div className="px-4">
                <div className="text-4xl font-bold mb-2">RS</div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Cobertura Regional</div>
              </div>
              <div className="px-4 col-span-2 md:col-span-1 lg:col-span-1">
                <div className="text-4xl font-bold mb-2">BR</div>
                <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Envio Nacional</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUTOS EM DESTAQUE ── */}
        <section className="py-16 bg-gray-50 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Produtos em Destaque</h2>
                <p className="text-muted-foreground mt-1">Ferramentas Makita selecionadas</p>
              </div>
              <Link href="/catalogo">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shrink-0">
                  Ver Catálogo Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {featuredProducts.map((produto) => (
                <Link key={produto.id} href={`/produto/${produto.id}`}>
                  <div className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-primary/40 transition-all group cursor-pointer">
                    <div className="aspect-square p-3 bg-white">
                      <ProductImage
                        codigo={produto.codigo}
                        marca={produto.marca}
                        categoria={produto.categoria}
                        nome={produto.nome}
                        className="w-full h-full"
                        size="card"
                      />
                    </div>
                    <div className="px-3 py-2.5 border-t border-border">
                      <div className="text-xs font-bold text-primary uppercase tracking-wide">{produto.marca}</div>
                      <div className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {produto.codigo}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nossas Soluções</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Oferecemos um ecossistema completo para garantir a produtividade e o funcionamento contínuo do seu negócio.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Wrench className="w-10 h-10 text-primary" />, title: "Venda de Ferramentas", desc: "Equipamentos de alta performance para uso profissional e industrial." },
                { icon: <Settings className="w-10 h-10 text-primary" />, title: "Assistência Técnica", desc: "Diagnóstico preciso, manutenção especializada e serviços em garantia." },
                { icon: <Box className="w-10 h-10 text-primary" />, title: "Peças e Acessórios", desc: "Estoque de peças originais e ampla linha de acessórios profissionais." },
                { icon: <Clock className="w-10 h-10 text-primary" />, title: "Locação", desc: "Disponibilização de equipamentos para demandas específicas e pontuais." },
              ].map((servico, i) => (
                <Card key={i} className="border-border hover:border-primary/50 transition-colors bg-white shadow-sm">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                      {servico.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{servico.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{servico.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOBRE / EMPRESA ── */}
        <section id="empresa" className="py-20 bg-white border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <img
                  src="https://ferramentaslondrina.com.br/wp-content/uploads/2022/10/makita-pro.png"
                  alt="Oficina técnica especializada Makinasul"
                  className="rounded-lg shadow-lg object-cover w-full h-[500px] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px]"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
                  Nossa História
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Especialistas em produtividade e alto desempenho
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Fundada em Porto Alegre, a Makinasul nasceu com o propósito de oferecer soluções completas para profissionais, indústrias e empresas que dependem de ferramentas e equipamentos de alto desempenho.
                  </p>
                  <p>
                    Ao longo de mais de uma década de atuação, consolidou-se como referência no segmento de ferramentas elétricas e a bateria, unindo atendimento especializado, agilidade e compromisso com a qualidade.
                  </p>
                  <p>
                    Hoje, a Makinasul é representante autorizada Makita e Bosch Professional, com equipe técnica treinada, estoque de peças originais e estrutura preparada para atender Porto Alegre e toda a região metropolitana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARCAS ── */}
        <section id="marcas" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Marcas</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Parcerias estratégicas com os maiores fabricantes do mundo.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row border border-border rounded-2xl overflow-hidden shadow-sm">
              {/* Marcas Autorizadas */}
              <div className="lg:w-1/2 p-8 lg:p-10 lg:border-r border-border">
                <p className="text-xs font-bold uppercase tracking-widest text-primary text-center mb-6">
                  Marcas Autorizadas
                </p>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[
                    { name: "Bosch", img: logoBosch, bg: "#0d0d0d", glow: "#cc0000" },
                    { name: "Skil", img: logoSkil, bg: "#0d0d0d", glow: "#e8001d" },
                    { name: "Dremel", img: logoDremel, bg: "#001f5b", glow: "#4a90e2" },
                  ].map((b) => (
                    <BrandCard key={b.name} img={b.img} name={b.name} bg={b.bg} glow={b.glow} />
                  ))}
                </div>
                <BrandCard img={logoMakita} name="Makita" bg="#0d0d0d" glow="#e4003a" size="lg" />
              </div>

              {/* Marcas Parceiras */}
              <div className="lg:w-1/2 p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary text-center mb-6">
                  Marcas Parceiras
                </p>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {[
                    { name: "DeWalt", img: logoDewalt, bg: "#0d0d0d", glow: "#ffcd00" },
                    { name: "Stanley", img: logoStanley, bg: "#f5c400", glow: "#f5c400" },
                    { name: "Black+Decker", img: logoBlackDecker, bg: "#0d0d0d", glow: "#e07820" },
                  ].map((b) => (
                    <BrandCard key={b.name} img={b.img} name={b.name} bg={b.bg} glow={b.glow} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {[
                    { name: "Redescor", img: logoRedescor, bg: "#ffffff", glow: "#2a7a30" },
                    { name: "Kadesh", img: logoKadesh, bg: "#0d0d0d", glow: "#8b0000" },
                  ].map((b) => (
                    <BrandCard key={b.name} img={b.img} name={b.name} bg={b.bg} glow={b.glow} />
                  ))}
                </div>
                <BrandCard img={logoTyrolit} name="Tyrolit" bg="#0a0a1a" glow="#00b4d8" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ── ASSISTÊNCIA TÉCNICA & POR QUE MAKINASUL ── */}
        <section id="assistencia" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl font-bold mb-6">Assistência Técnica Autorizada</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Estrutura completa e profissionais treinados na fábrica para garantir que sua ferramenta retorne com o desempenho original de fábrica.
                </p>
                <div className="grid gap-6">
                  {[
                    "Diagnóstico Especializado",
                    "Peças Originais",
                    "Garantia dos Serviços",
                    "Equipe Técnica Treinada",
                    "Atendimento Empresarial",
                    "Orçamento Transparente",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                      <span className="font-medium text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Equipe Certificada", icon: <Users className="w-8 h-8 text-white" />, desc: "Técnicos treinados diretamente pelos fabricantes Makita e Bosch." },
                  { title: "Peças Originais", icon: <Settings className="w-8 h-8 text-white" />, desc: "Garantia de durabilidade e segurança no reparo." },
                  { title: "Garantia de Serviço", icon: <ShieldCheck className="w-8 h-8 text-white" />, desc: "Tranquilidade total após a manutenção." },
                  { title: "Estoque Próprio", icon: <Box className="w-8 h-8 text-white" />, desc: "Agilidade no atendimento e reposição." },
                  { title: "Entrega Rápida", icon: <Truck className="w-8 h-8 text-white" />, desc: "Logística eficiente para sua empresa não parar." },
                  { title: "Atendimento Local", icon: <MapPin className="w-8 h-8 text-white" />, desc: "Forte atuação em Porto Alegre e região." },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="bg-primary/80 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCAÇÃO ── */}
        <section id="locacao" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Locação de Equipamentos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reduza custos e tenha sempre a ferramenta ideal para cada etapa da sua obra ou manutenção.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {LOCACAO_ITEMS.map((item, i) => (
                <div key={i} className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-primary/40 cursor-pointer">
                  <div className="aspect-square bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="p-4 border-t border-border bg-gray-900 flex items-center justify-between">
                    <h3 className="text-white font-bold text-base">{item.title}</h3>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded"
                      style={{ background: item.marca === "Makita" ? "#e4003a" : "#005691", color: "#fff" }}
                    >
                      {item.marca}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a href={`https://wa.me/5551983433435?text=${encodeURIComponent('Olá! Gostaria de consultar a disponibilidade de equipamentos para locação.')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Consultar Disponibilidade
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="bg-destructive py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Precisando de ferramentas ou assistência técnica?
            </h2>
            <a href={`https://wa.me/5551983433435?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento de ferramentas ou assistência técnica. Podem me ajudar?')}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-destructive hover:bg-gray-100 h-14 px-10 text-lg font-bold shadow-lg">
                Solicite um orçamento agora mesmo
              </Button>
            </a>
          </div>
        </section>

        {/* ── CONTATO FORM ── */}
        <section id="contato" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 max-w-5xl mx-auto">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Fale Conosco</h2>
                <p className="text-muted-foreground mb-8">
                  Nossa equipe de especialistas está pronta para ajudar você a encontrar a melhor solução para o seu negócio.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Telefones</h4>
                      <p className="text-muted-foreground">(51) 99135-3737</p>
                      <p className="text-muted-foreground">(51) 98343-3435</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <a
                        href="https://wa.me/5551983433435"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        (51) 98343-3435
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Localização</h4>
                      <p className="text-muted-foreground">Porto Alegre, RS</p>
                      <p className="text-muted-foreground">Região Metropolitana</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-6">Envie sua mensagem</h3>
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const fd = new FormData(e.target as HTMLFormElement);
                      const msg = encodeURIComponent(
                        `Nome: ${fd.get("nome")}\nEmail: ${fd.get("email")}\nMensagem: ${fd.get("mensagem")}`
                      );
                      window.open(`https://wa.me/5551983433435?text=${msg}`, "_blank");
                    }}
                  >
                    <div>
                      <Label htmlFor="nome" className="text-sm font-medium">Nome</Label>
                      <Input id="nome" name="nome" placeholder="Seu nome completo" className="mt-1.5" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="seu@email.com" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="mensagem" className="text-sm font-medium">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Descreva o que você precisa..."
                        className="mt-1.5 min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-semibold">
                      Enviar pelo WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
