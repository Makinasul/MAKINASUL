import { useState } from "react";
import {
  Drill, Hammer, Scissors, Leaf, Droplets, Package,
  Wrench, Zap, Settings, CircleDot, Layers
} from "lucide-react";
import { imagensProdutos } from "@/data/produtos";

interface ProductImageProps {
  codigo: string;
  marca: string;
  categoria: string;
  nome: string;
  className?: string;
  size?: "card" | "detail";
}

const BRAND_CONFIG: Record<string, { bg: string; text: string; accent: string }> = {
  Makita:          { bg: "#e4003a", text: "#ffffff", accent: "#b0002e" },
  Bosch:           { bg: "#005691", text: "#ffffff", accent: "#003d6b" },
  Skil:            { bg: "#ee2520", text: "#ffffff", accent: "#b51b18" },
  Dremel:          { bg: "#1a1a1a", text: "#ffffff", accent: "#00a651" },
  DeWalt:          { bg: "#febd00", text: "#1a1a1a", accent: "#d9a100" },
  Stanley:         { bg: "#f7b500", text: "#1a1a1a", accent: "#d9a100" },
  "Black+Decker":  { bg: "#e8640c", text: "#ffffff", accent: "#c0520a" },
  Tyrolit:         { bg: "#cc0000", text: "#ffffff", accent: "#990000" },
  Bracol:          { bg: "#004b87", text: "#ffffff", accent: "#003666" },
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  bateria:    <Drill className="w-full h-full" />,
  eletricas:  <Drill className="w-full h-full" />,
  marteletes: <Hammer className="w-full h-full" />,
  corte:      <Scissors className="w-full h-full" />,
  marcenaria: <Wrench className="w-full h-full" />,
  acabamento: <Settings className="w-full h-full" />,
  jardim:     <Leaf className="w-full h-full" />,
  limpeza:    <Droplets className="w-full h-full" />,
  acessorios: <Package className="w-full h-full" />,
  abrasivos:  <CircleDot className="w-full h-full" />,
};

function getMakitaUrls(codigo: string): string[] {
  const c = codigo.toLowerCase();
  return [
    `https://fi.makitamedia.com/images/3_Makita/301_machines/3011_a_GS1/30120_JPG_zoom/${codigo}_C2L0.jpg`,
    `https://www.makita.co.uk/media/catalog/product/${c[0]}/${c[1]}/${c}.jpg`,
    `https://www.makita.co.uk/media/catalog/product/${c[0]}/${c[1]}/${c}z.jpg`,
    `https://www.makita.de/media/catalog/product/${c[0]}/${c[1]}/${c}.jpg`,
  ];
}

function getBoschUrl(codigo: string): string {
  const c = codigo.replace(/\s+/g, "").toLowerCase();
  return `https://www.bosch-professional.com/binary/ocsmedia/adaptiv/500x500/p-${c}-01.jpg`;
}

function getProductUrls(codigo: string, marca: string): string[] {
  if (imagensProdutos[codigo]) {
    if (marca === "Makita") {
      return [imagensProdutos[codigo], ...getMakitaUrls(codigo)];
    }
    return [imagensProdutos[codigo]];
  }

  if (marca === "Makita") {
    return getMakitaUrls(codigo);
  }
  if (marca === "Bosch") {
    return [getBoschUrl(codigo)];
  }
  return [];
}

function BrandFallback({
  codigo,
  marca,
  categoria,
  size,
}: {
  codigo: string;
  marca: string;
  categoria: string;
  nome: string;
  size: "card" | "detail";
}) {
  const config = BRAND_CONFIG[marca] ?? { bg: "#374151", text: "#ffffff", accent: "#1f2937" };
  const icon = CATEGORY_ICONS[categoria] ?? <Layers className="w-full h-full" />;
  const iconSize = size === "detail" ? "w-24 h-24" : "w-16 h-16";
  const nameSize = size === "detail" ? "text-2xl" : "text-xl";
  const codeSize = size === "detail" ? "text-sm" : "text-xs";

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 select-none"
      style={{ background: `linear-gradient(135deg, ${config.bg} 0%, ${config.accent} 100%)` }}
    >
      <div className={`${iconSize} opacity-20`} style={{ color: config.text }}>
        {icon}
      </div>
      <div className="text-center px-4">
        <div
          className={`${nameSize} font-black tracking-widest uppercase`}
          style={{ color: config.text }}
        >
          {marca}
        </div>
        <div
          className={`${codeSize} font-mono mt-1 opacity-75`}
          style={{ color: config.text }}
        >
          {codigo}
        </div>
      </div>
    </div>
  );
}

export function ProductImage({ codigo, marca, categoria, nome, className = "", size = "card" }: ProductImageProps) {
  const urls = getProductUrls(codigo, marca);
  const [urlIndex, setUrlIndex] = useState(0);
  const [failed, setFailed] = useState(urls.length === 0);

  const handleError = () => {
    const next = urlIndex + 1;
    if (next < urls.length) {
      setUrlIndex(next);
    } else {
      setFailed(true);
    }
  };

  if (failed || urls.length === 0) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <BrandFallback
          codigo={codigo}
          marca={marca}
          categoria={categoria}
          nome={nome}
          size={size}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        key={urls[urlIndex]}
        src={urls[urlIndex]}
        alt={nome}
        onError={handleError}
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain p-4 bg-white"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10" aria-hidden>
        <BrandFallback
          codigo={codigo}
          marca={marca}
          categoria={categoria}
          nome={nome}
          size={size}
        />
      </div>
    </div>
  );
}
