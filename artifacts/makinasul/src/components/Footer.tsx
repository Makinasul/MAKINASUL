import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <img 
              src="https://static.wixstatic.com/media/6100f1_50ec06022d2b46aca8e2b77b2c0d3850~mv2.jpg/v1/crop/x_0,y_167,w_960,h_381/fill/w_194,h_97,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Slide1_JPG.jpg" 
              alt="Makinasul" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              Distribuidor, Revendedor e Assistência Técnica Autorizada. Soluções completas para profissionais, indústrias e empresas que dependem de ferramentas de alto desempenho.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <div>
                  <a href="tel:+5551991353737" className="block hover:text-white transition-colors">(51) 99135-3737</a>
                  <a href="tel:+5551983433435" className="block hover:text-white transition-colors">(51) 98343-3435</a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <a href="mailto:contato@makinasul.com.br" className="hover:text-white transition-colors">contato@makinasul.com.br</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Localização</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Av. Sertório, 5601<br />
                  Jardim Lindóia<br />
                  Porto Alegre - RS<br />
                  CEP: 91060-591
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Makinasul. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
