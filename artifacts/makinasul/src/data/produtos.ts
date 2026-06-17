export interface Produto {
  id: string;
  codigo: string;
  nome: string;
  marca: string;
  categoria: string;
  subcategoria: string;
  descricao: string;
  especificacoes: string[];
  vantagens: string[];
  tags: string[];
  imagem: string;
}

// ------------------------------------------------------------------
// CDN helpers
// ------------------------------------------------------------------
const mkImg = (model: string) =>
  `https://fi.makitamedia.com/images/3_Makita/301_machines/3011_a_GS1/30120_JPG_zoom/${model}_C2L0.jpg`;

const bsImg = (article: string) =>
  `https://media.bosch-pt.com/image/upload/f_auto,q_auto/v1/product-master/full/${article}_001.jpg`;

// ------------------------------------------------------------------
// imagensProdutos — mapeamento código → URL de imagem real
// ------------------------------------------------------------------
export const imagensProdutos: Record<string, string> = {

  // ── MAKITA – Furadeiras / Parafusadeiras a Bateria ──────────────
  "DHP482":  "https://storagesitemakita.blob.core.windows.net/arquivos/DHP482%20001027839.jpg",
  "DHP484":  mkImg("DHP484"),
  "DHP486":  "https://storagesitemakita.blob.core.windows.net/arquivos/DHP486%20004044518.jpg",
  "DHP487":  "https://storagesitemakita.blob.core.windows.net/arquivos/DHP487%20001061248.jpg",
  "DDF453":  mkImg("DDF453"),
  "DDF484":  "https://storagesitemakita.blob.core.windows.net/arquivos/DDF484%20001025021.jpg",
  "DHP453":  mkImg("DHP453"),

  // ── BOSCH – Furadeiras / Parafusadeiras a Bateria ───────────────
  "GSB 18V-55":    bsImg("06019H5370"),
  "GSB 185-LI":    bsImg("06019H1K00"),
  "GSR 18V-55":    bsImg("06019H5260"),
  "GSR 180-LI":    bsImg("06019F8105"),
  "GSB 18V-21":    bsImg("06019H4060"),
  "GSR 18V-28":    bsImg("06019H4100"),
  "GSB 18V-150 C": bsImg("06019G0100"),

  // ── MAKITA – Chaves / Parafusadeiras de Impacto a Bateria ───────
  "DTD152":  mkImg("DTD152"),
  "DTD154":  mkImg("DTD154"),
  "DTW285":  mkImg("DTW285"),
  "DTW300":  mkImg("DTW300"),
  "DTD171":  mkImg("DTD171"),
  "DTW700":  mkImg("DTW700"),
  "DTW1001": mkImg("DTW1001"),

  // ── BOSCH – Chaves de Impacto a Bateria ─────────────────────────
  "GDX 18V-200":   bsImg("06019G4200"),
  "GDX 180-LI":    bsImg("06019G4100"),
  "GDS 18V-300":   bsImg("06019D7200"),
  "GDS 18V-400":   bsImg("06019D7100"),
  "GDS 18V-1000":  bsImg("0601D7C100"),
  "GDS 18V-1050 H":bsImg("0601D7C200"),
  "GDX 18V-EC":    bsImg("06019B9101"),

  // ── MAKITA – Serras a Bateria ────────────────────────────────────
  "DHS680":  mkImg("DHS680"),
  "DHS782":  mkImg("DHS782"),
  "DHS660":  mkImg("DHS660"),
  "DJR187":  mkImg("DJR187"),
  "DJR189":  mkImg("DJR189"),
  "DJR147":  mkImg("DJR147"),
  "DLS600":  mkImg("DLS600"),
  "DLS714":  mkImg("DLS714"),
  "DSP600":  mkImg("DSP600"),
  "DSP180":  mkImg("DSP180"),

  // ── BOSCH – Serras a Bateria ─────────────────────────────────────
  "GKS 18V-57":  bsImg("06016A2200"),
  "GKS 18V-68":  bsImg("06016A2100"),
  "GKS 185-LI":  bsImg("06016D0200"),
  "GST 18V-LI":  bsImg("06015A5100"),
  "GST 185-LI":  bsImg("06015A0100"),
  "GCM 18V-305": bsImg("0601B44100"),
  "GSA 18V-LI":  bsImg("06016A0100"),
  "GSA 18V-28":  bsImg("06016A0101"),
  "GSA 18V-LI C":bsImg("06016A0102"),

  // ── MAKITA – Esmerilhadeiras / Politrizes a Bateria ─────────────
  "DGA452":  mkImg("DGA452"),
  "DGA454":  mkImg("DGA454"),
  "DGA456":  mkImg("DGA456"),
  "DGA516":  mkImg("DGA516"),
  "DGA519":  mkImg("DGA519"),
  "DGA700":  mkImg("DGA700"),
  "DGA900":  mkImg("DGA900"),

  // ── BOSCH – Esmerilhadeiras a Bateria ────────────────────────────
  "GWS 18V-10":     bsImg("06019J4000"),
  "GWS 18-125 V-LI":bsImg("06019F2300"),
  "GWS 180-LI":     bsImg("06019H4500"),
  "GWS 18V-15 SC":  bsImg("06019H6200"),
  "GWS 185-LI":     bsImg("06019J8100"),
  "GWS 18V-125 SC": bsImg("06019H6100"),
  "GWX 18V-10 SC":  bsImg("06019J4002"),

  // ── MAKITA – Furadeiras de Impacto / Marteletes a Bateria ───────
  "DHR171":  mkImg("DHR171"),
  "DHR183":  mkImg("DHR183"),
  "DHR202":  mkImg("DHR202"),
  "DHR242":  mkImg("DHR242"),
  "DHR243":  mkImg("DHR243"),
  "DHR263":  mkImg("DHR263"),

  // ── BOSCH – Marteletes a Bateria ─────────────────────────────────
  "GBH 18V-20":      bsImg("06112A1200"),
  "GBH 18V-21":      bsImg("06112A6100"),
  "GBH 18V-26":      bsImg("0611909000"),
  "GBH 36 V-LI Plus":bsImg("0611907000"),

  // ── MAKITA – Multiferramentas a Bateria ─────────────────────────
  "DTM50":  mkImg("DTM50"),
  "DTM51":  mkImg("DTM51"),
  "DTM52":  mkImg("DTM52"),
  "DTM53":  mkImg("DTM53"),
  "DTM54":  mkImg("DTM54"),
  "DBO180": mkImg("DBO180"),

  // ── BOSCH – Multiferramentas a Bateria ───────────────────────────
  "GOP 18V-28":  bsImg("06018B6001"),
  "GOP 185-LI":  bsImg("06018G0020"),
  "GOP 18V-EC":  bsImg("06018B6000"),
  "GOP 12V-28":  bsImg("06018B5001"),
  "GOS 18V-LI":  bsImg("06019C4000"),
  "GVB 18V-70":  bsImg("06019H3000"),
  "GOP 10.8V-28":bsImg("06018B5000"),

  // ── MAKITA – Aspiradores / Sopradores a Bateria ─────────────────
  "DUB185":  mkImg("DUB185"),
  "DUB186":  mkImg("DUB186"),
  "DUB362":  mkImg("DUB362"),
  "DUB148":  mkImg("DUB148"),
  "DCL180":  mkImg("DCL180"),
  "DCL184":  mkImg("DCL184"),
  "DCL500":  mkImg("DCL500"),
  "DVC350":  mkImg("DVC350"),
  "DVC861":  mkImg("DVC861"),

  // ── BOSCH – Aspiradores / Sopradores a Bateria ───────────────────
  "GAS 18V-10 L":        bsImg("06019C6100"),
  "GAS 18V-LI":          bsImg("06019C6002"),
  "GAS 18V-1":           bsImg("06019C6001"),
  "GBL 18V-120":         bsImg("06019F5100"),
  "GBL 18V-120 D":       bsImg("06019F5101"),
  "GHG 180 LI":          bsImg("0601229000"),
  "GAS 18V-Li Professional": bsImg("06019C6002"),

  // ── MAKITA – Baterias 18V LXT ────────────────────────────────────
  "BL1815N": mkImg("BL1815N"),
  "BL1830B": mkImg("BL1830B"),
  "BL1840B": mkImg("BL1840B"),
  "BL1850B": mkImg("BL1850B"),
  "BL1860B": mkImg("BL1860B"),
  "DC18RC":  mkImg("DC18RC"),
  "DC18RD":  mkImg("DC18RD"),
  "DC18SF":  mkImg("DC18SF"),

  // ── MAKITA – Baterias 40V XGT ────────────────────────────────────
  "BL4020":  mkImg("BL4020"),
  "BL4025":  mkImg("BL4025"),
  "BL4040":  mkImg("BL4040"),
  "BL4050F": mkImg("BL4050F"),
  "BL4080F": mkImg("BL4080F"),
  "DC40RA":  mkImg("DC40RA"),
  "DC40RB":  mkImg("DC40RB"),

  // ── MAKITA – Baterias 12V / 14.4V ───────────────────────────────
  "BL1015":  mkImg("BL1015"),
  "BL1021B": mkImg("BL1021B"),
  "BL1041B": mkImg("BL1041B"),
  "DC10SB":  mkImg("DC10SB"),
  "BL1415":  mkImg("BL1415"),
  "BL1430B": mkImg("BL1430B"),
  "BL1460B": mkImg("BL1460B"),

  // ── BOSCH – Baterias 18V ─────────────────────────────────────────
  "GBA 18V 2.0Ah":      bsImg("1600Z00036"),
  "GBA 18V 3.0Ah":      bsImg("1600Z00038"),
  "GBA 18V 4.0Ah":      bsImg("1600Z00039"),
  "GBA 18V 5.0Ah":      bsImg("1600A002U5"),
  "GBA 18V 6.0Ah":      bsImg("1600A004ZN"),
  "GAL 1830 W":         bsImg("1600A003NG"),
  "GAL 18V-20":         bsImg("1600A019QB"),
  "GAL 18V-40":         bsImg("1600A019R2"),
  "GAL 18V-80":         bsImg("1600A011A9"),
  "GAL 18V-160 C":      bsImg("1600A019S4"),
  "GAL 1880 CV":        bsImg("1600A005B4"),
  "ProCORE18V 4.0Ah":   bsImg("1600A016GB"),
  "ProCORE18V 5.5Ah":   bsImg("1600A016GK"),
  "ProCORE18V 8.0Ah":   bsImg("1600A016GN"),
  "ProCORE18V 12.0Ah":  bsImg("1600A016GQ"),
  "BHZUB1830":          bsImg("1600A01L3D"),

  // ── BOSCH – Baterias 12V ─────────────────────────────────────────
  "GBA 12V 2.0Ah":  bsImg("1600A016BH"),
  "GBA 12V 3.0Ah":  bsImg("1600A00X79"),
  "GBA 12V 6.0Ah":  bsImg("1600A00X7H"),
  "GBA 10.8V 2.0Ah":bsImg("1600A016BH"),
  "GBA 10.8V 4.0Ah":bsImg("1600A00X7H"),
  "GAL 12V-20":     bsImg("1600A005B3"),
  "GAL 12V-40":     bsImg("1600A019R3"),

  // ── MAKITA – Furadeiras Elétricas (fio) ─────────────────────────
  "HP1630":  mkImg("HP1630"),
  "HP1631":  "https://fi.makitamedia.com/images/3_Makita/301_machines/3011_a_GS1/30120_JPG_zoom/HP1631_C2L0.jpg",
  "HP1641":  mkImg("HP1641"),
  "HP1801":  mkImg("HP1801"),
  "HP2010N": mkImg("HP2010N"),
  "HP2051F": mkImg("HP2051F"),
  "HP2071":  mkImg("HP2071"),
  "HP0300":  mkImg("HP0300"),
  "M0801B":  mkImg("M0801B"),

  // ── BOSCH – Furadeiras Elétricas ─────────────────────────────────
  "GSB 10 RE":   bsImg("06013768H0"),
  "GSB 13 RE":   bsImg("06013869J0"),
  "GSB 16 RE":   bsImg("0601218801"),
  "GSB 21-2 RE": bsImg("0601194800"),
  "GSR 6-25 TE": bsImg("06010F2101"),
  "GSR 6-45 TE": bsImg("0601460201"),
  "GSB 550":     bsImg("06013A4170"),
  "GSB 600 RE":  bsImg("06013A4200"),
  "GSB 750 RE":  bsImg("06013A0700"),

  // ── MAKITA – Esmerilhadeiras Elétricas ───────────────────────────
  "GA4530":  mkImg("GA4530"),
  "GA5030":  mkImg("GA5030"),
  "GA6030":  mkImg("GA6030"),
  "GA7020":  mkImg("GA7020"),
  "GA9020":  mkImg("GA9020"),
  "9557HN":  mkImg("9557HN"),
  "9558HN":  mkImg("9558HN"),

  // ── BOSCH – Esmerilhadeiras Elétricas ────────────────────────────
  "GWS 700":        bsImg("0601388D06"),
  "GWS 750":        bsImg("0601394001"),
  "GWS 850 C":      bsImg("0601378C00"),   // corrigido: removido zero extra (era 0601378C900)
  "GWS 7-125":      bsImg("0601388108"),
  "GWS 9-125":      bsImg("0601396102"),
  "GWS 13-125 CI":  bsImg("06013880F0"),
  "GWS 2000":       bsImg("06013890F0"),

  // ── MAKITA – Serras Elétricas ────────────────────────────────────
  "HS7600":  mkImg("HS7600"),
  "HS7601":  mkImg("HS7601"),
  "HS6601":  mkImg("HS6601"),
  "HS7100":  mkImg("HS7100"),
  "5008M":   mkImg("5008M"),
  "5007MG":  mkImg("5007MG"),
  "LS1040":  mkImg("LS1040"),
  "LS1018L": mkImg("LS1018L"),
  "LS1016L": mkImg("LS1016L"),
  "LS1013":  mkImg("LS1013"),
  "LS1216L": mkImg("LS1216L"),
  "LS0815":  mkImg("LS0815"),
  "LS0714":  mkImg("LS0714"),
  "MT230":   mkImg("MT230"),

  // ── BOSCH – Serras Elétricas ─────────────────────────────────────
  "GKS 190":    bsImg("0601623000"),
  "GKS 65 GCE": bsImg("0601668900"),
  "GKS 85":     bsImg("0601622903"),
  "GKS 600":    bsImg("0601535300"),
  "GKS 7 1/4":  bsImg("0601519000"),
  "GKS 24 V":   bsImg("0601575900"),
  "CS 10":      bsImg("0601535300"),
  "GCM 10 S":   bsImg("0601B20500"),
  "GCM 12 GDL": bsImg("0601B39100"),
  "GCM 10 MX":  bsImg("0601B29100"),
  "GCM 305":    bsImg("0601B30510"),
  "GCM 8 SJL":  bsImg("0601B19201"),
  "GTS 10 J":   bsImg("0601B30500"),
  "PTS 10":     bsImg("0603B03400"),

  // ── MAKITA – Lixadeiras Elétricas ───────────────────────────────
  "BO4556":  mkImg("BO4556"),
  "BO4557":  mkImg("BO4557"),
  "BO5030":  mkImg("BO5030"),
  "BO5031":  mkImg("BO5031"),
  "BO6030":  mkImg("BO6030"),
  "BO6040":  mkImg("BO6040"),
  "BO3710":  mkImg("BO3710"),
  "9911":    mkImg("9911"),
  "9903":    mkImg("9903"),
  "9404":    mkImg("9404"),
  "9032":    mkImg("9032"),
  "9033":    mkImg("9033"),
  "9924DB":  mkImg("9924DB"),
  "9401":    mkImg("9401"),

  // ── BOSCH – Lixadeiras Elétricas ─────────────────────────────────
  "GSS 140":      bsImg("0601292H00"),
  "GSS 23 AE":    bsImg("0601070400"),
  "GEX 125-1 AE": bsImg("0601387500"),
  "GEX 150 AC":   bsImg("06013875H0"),
  "GEX 18V-125 Q":bsImg("06018B8100"),
  "GBS 75 AE":    bsImg("0601274703"),
  "GBS 600":      bsImg("060127A100"),
  "PBS 75 A":     bsImg("0603CBC400"),
  "PBS 75 AE":    bsImg("0603CBC400"),
  "GOS 18V-28":   bsImg("06019E4100"),

  // ── MAKITA – Plainas Elétricas ───────────────────────────────────
  "KP0800":  mkImg("KP0800"),
  "KP0810":  mkImg("KP0810"),
  "KP0810C": mkImg("KP0810C"),
  "KP180":   mkImg("KP180"),
  "KP0800K": mkImg("KP0800K"),
  "1901":    mkImg("1901"),
  "1911B":   mkImg("1911B"),
  "1912B":   mkImg("1912B"),
  "2012NB":  mkImg("2012NB"),
  "2030":    mkImg("2030"),
  "1806B":   mkImg("1806B"),

  // ── BOSCH – Plainas Elétricas ────────────────────────────────────
  "GHO 26-82 D": bsImg("0601594003"),
  "GHO 40-82 C": bsImg("0601595103"),
  "GHO 10-82":   bsImg("0601590108"),
  "GHO 12V-20":  bsImg("0601590703"),
  "GHO 15-82":   bsImg("0601594002"),
  "GHO 16-82":   bsImg("0601594105"),
  "PHO 3-82":    bsImg("0601271101"),

  // ── MAKITA – Marteletes SDS-Plus ─────────────────────────────────
  "HR2470":  mkImg("HR2470"),
  "HR2630":  mkImg("HR2630"),
  "HR2641":  mkImg("HR2641"),
  "HR2811F": mkImg("HR2811F"),
  "HR3000C": mkImg("HR3000C"),

  // ── BOSCH – Marteletes SDS-Plus ──────────────────────────────────
  "GBH 2-26 DRE": bsImg("0611253708"),
  "GBH 2-28 DFV": bsImg("0611267600"),
  "GBH 3-28 DRE": bsImg("0611320703"),
  "GBH 4-32 DFR": bsImg("0611332100"),
  "GBH 5-40 DCE": bsImg("0611264000"),
  "GBH 2-26 F":   bsImg("0611256700"),

  // ── MAKITA – Marteletes SDS-Max ──────────────────────────────────
  "HR4013C":  mkImg("HR4013C"),
  "HR4013":   mkImg("HR4013"),
  "HR4511C":  mkImg("HR4511C"),
  "HR5001C":  mkImg("HR5001C"),
  "HR5211C":  mkImg("HR5211C"),
  "HM0860C":  mkImg("HM0860C"),
  "HM1214C":  mkImg("HM1214C"),

  // ── BOSCH – Marteletes SDS-Max ───────────────────────────────────
  "GBH 5-40 DE":  bsImg("0611269000"),
  "GBH 7-46 DE":  bsImg("0611262900"),
  "GBH 8-45 DV":  bsImg("0611265000"),
  "GBH 11 DE":    bsImg("0611245708"),
  "GBH 12-52 DV": bsImg("0611266000"),
  "GBH 10 DC":    bsImg("0611233700"),
  "GBH 45 DV":    bsImg("0611270000"),

  // ── MAKITA – Demolidores ─────────────────────────────────────────
  "HM0810T":  mkImg("HM0810T"),
  "HM0870C":  mkImg("HM0870C"),
  "HM1100C":  mkImg("HM1100C"),
  "HM1203C":  mkImg("HM1203C"),
  "HM1307CB": mkImg("HM1307CB"),
  "HM1400":   mkImg("HM1400"),
  "HM1812":   mkImg("HM1812"),

  // ── BOSCH – Demolidores ──────────────────────────────────────────
  "GSH 5 E":   bsImg("0611321000"),
  "GSH 5 CE":  bsImg("0611338720"),
  "GSH 7 VC":  bsImg("0611322003"),
  "GSH 11 E":  bsImg("0611316708"),
  "GSH 11 VC": bsImg("0611316803"),
  "GSH 16-30": bsImg("0611335000"),
  "GSH 27 VC": bsImg("0611338500"),

  // ── MAKITA – Multiferramentas Elétricas ─────────────────────────
  "TM3010C":  mkImg("TM3010C"),

  // ── BOSCH – Multiferramentas Elétricas ───────────────────────────
  "GOP 30-28":   bsImg("0601237002"),
  "PMF 10.8 LI": bsImg("0603101100"),

  // ── MAKITA – Tupias / Fresadoras ────────────────────────────────
  "RP0900":   mkImg("RP0900"),
  "RP1110C":  mkImg("RP1110C"),
  "RP1800":   mkImg("RP1800"),
  "RP1800F":  mkImg("RP1800F"),
  "RP2301":   mkImg("RP2301"),
  "RP2301FC": mkImg("RP2301FC"),
  "RT0700C":  mkImg("RT0700C"),

  // ── BOSCH – Tupias ───────────────────────────────────────────────
  "GOF 130":     bsImg("060160A001"),
  "GOF 1250 CE": bsImg("0601626001"),
  "GOF 1600 CE": bsImg("0601624001"),
  "GKF 12V-8":   bsImg("0601607000"),
  "GKF 600":     bsImg("0601608001"),
  "POF 1400 ACE":bsImg("0603267001"),
  "POF 1200 AE": bsImg("0603264208"),

  // ── MAKITA – Serras de Imersão ───────────────────────────────────
  "SP6000":   mkImg("SP6000"),
  "SP6000J":  mkImg("SP6000J"),
  "SP6000J1": mkImg("SP6000J1"),
  "SP6000K1": mkImg("SP6000K1"),

  // ── BOSCH – Serras de Imersão ────────────────────────────────────
  "GKT 55 GCE":   bsImg("0601675001"),
  "GKT 66":       bsImg("0601675100"),
  "GKT 18V-52 GC":bsImg("06016B2000"),
  "GKS 18V-57 G": bsImg("06016A2250"),
  "GKS 68 BCG":   bsImg("06016B2100"),
  "GKT 55 BCE":   bsImg("0601675050"),

  // ── MAKITA – Serras Sabre ────────────────────────────────────────
  "JR3050T":  mkImg("JR3050T"),
  "JR3060T":  mkImg("JR3060T"),
  "JR3070CT": mkImg("JR3070CT"),
  "JR140D":   mkImg("JR140D"),

  // ── BOSCH – Serras Sabre ─────────────────────────────────────────
  "GSA 1200 E":  bsImg("0611013001"),
  "GSA 1300 PCE":bsImg("0611013100"),
  "GSA 1100 E":  bsImg("0611013000"),
  "GSA 900 E":   bsImg("0611012804"),

  // ── MAKITA – Serras de Fita ──────────────────────────────────────
  "LB900F":   mkImg("LB900F"),
  "LB1200F":  mkImg("LB1200F"),
  "LB1201FL": mkImg("LB1201FL"),
  "2106":     mkImg("2106"),
  "2107F":    mkImg("2107F"),
  "ML140":    mkImg("ML140"),

  // ── BOSCH – Serras de Fita ───────────────────────────────────────
  "GCB 18V-LI": bsImg("06012A4100"),
  "GCB 35 VE":  bsImg("06012A4000"),
  "GCB 35 VE-N":bsImg("06012A4020"),
  "BS 170 E":   bsImg("06013C5000"),
  "BS 175 E":   bsImg("06013C5020"),

  // ── MAKITA – Serra Mármore ───────────────────────────────────────
  "4100KB":   mkImg("4100KB"),
  "4100NH":   mkImg("4100NH"),
  "4101RH":   mkImg("4101RH"),
  "4114S":    mkImg("4114S"),
  "9557PBX1": mkImg("9557PBX1"),
  "SG180":    mkImg("SG180"),

  // ── BOSCH – Serra Mármore ─────────────────────────────────────────
  "GDC 14":     bsImg("0601B38001"),
  "GDC 54":     bsImg("0601B38100"),
  "GDC 150":    bsImg("0601B38200"),
  "GDC 14-16":  bsImg("0601B38000"),
  "GCD 12 JL":  bsImg("0601B37001"),
  "GCS 10 J":   bsImg("0601B30050"),
  "GMC 14":     bsImg("0601B13500"),

  // ── MAKITA – Grampeadores / Pinadores ───────────────────────────
  "AF353":    mkImg("AF353"),
  "AF505":    mkImg("AF505"),
  "BST110":   mkImg("BST110"),
  "DST112":   mkImg("DST112"),
  "DST112ZJ": mkImg("DST112ZJ"),
  "DST113":   mkImg("DST113"),
  "DST221":   mkImg("DST221"),

  // ── BOSCH – Grampeadores ─────────────────────────────────────────
  "GCN90-30 DG":bsImg("0601D42100"),
  "GCN 45-15":  bsImg("0601D44100"),
  "GSK 64":     bsImg("0601490000"),
  "GSK 18V-LI": bsImg("0601490H00"),

  // ── MAKITA – Lavadoras de Pressão ───────────────────────────────
  "HW110":  mkImg("HW110"),
  "HW111":  mkImg("HW111"),
  "HW112":  mkImg("HW112"),
  "HW140":  mkImg("HW140"),
  "HW151":  mkImg("HW151"),
  "HW160":  mkImg("HW160"),
  "HW1300": mkImg("HW1300"),

  // ── BOSCH – Lavadoras de Pressão ─────────────────────────────────
  "UniversalAquatak 125": bsImg("06008A7B00"),
  "EasyAquatak 100":      bsImg("06008A7801"),
  "EasyAquatak 110":      bsImg("06008A7F00"),
  "AdvancedAquatak 130":  bsImg("06008A7C00"),

  // ── MAKITA – Aspiradores Industriais ────────────────────────────
  "440":      mkImg("440"),
  "4430D":    mkImg("4430D"),
  "VC2510":   mkImg("VC2510"),
  "VC2512L":  mkImg("VC2512L"),
  "VC3000L":  mkImg("VC3000L"),
  "VC3012L":  mkImg("VC3012L"),
  "VC3210LX": mkImg("VC3210LX"),
  "VC4210L":  mkImg("VC4210L"),
  "VC4510L":  mkImg("VC4510L"),

  // ── BOSCH – Aspiradores ──────────────────────────────────────────
  "GAS 15 L":     bsImg("0601233008"),
  "GAS 20 L SFC": bsImg("06019E5100"),
  "GAS 25 L SFC": bsImg("06019E5200"),
  "GAS 35 L SFC": bsImg("06019E5300"),

  // ── MAKITA – Jardim a Bateria ────────────────────────────────────
  "DUR192":  mkImg("DUR192"),
  "DUR368":  mkImg("DUR368"),
  "DUC122":  mkImg("DUC122"),
  "DUC256":  mkImg("DUC256"),
  "DUC353":  mkImg("DUC353"),
  "DUN461":  mkImg("DUN461"),
  "DUN600":  mkImg("DUN600"),
  "DLM380":  mkImg("DLM380"),
  "DLX2131J":mkImg("DLX2131J"),
  "DLX2221J":mkImg("DLX2221J"),
  "DLX6068": mkImg("DLX6068"),

  // ── MAKITA – Jardim Elétrico ─────────────────────────────────────
  "UC4041A":  mkImg("UC4041A"),
  "UC4051A":  mkImg("UC4051A"),
  "EA4300":   mkImg("EA4300"),
  "EA5000P":  mkImg("EA5000P"),
  "EA6100P":  mkImg("EA6100P"),
  "ELM3320X": mkImg("ELM3320X"),
  "ELM3322X": mkImg("ELM3322X"),
  "ELM3800":  mkImg("ELM3800"),
  "ELM4621":  mkImg("ELM4621"),
  "EM2600L":  mkImg("EM2600L"),
  "EM3300L":  mkImg("EM3300L"),
  "EM4350L":  mkImg("EM4350L"),
  "EX2650LH": mkImg("EX2650LH"),
  "EX2750":   mkImg("EX2750"),
  "EBH7650":  mkImg("EBH7650"),
  "EBH8510":  mkImg("EBH8510"),
  "EBH9500":  mkImg("EBH9500"),
  "UB1100":   mkImg("UB1100"),
  "UB1103":   mkImg("UB1103"),
  "UH4861":   mkImg("UH4861"),
  "UH5261":   mkImg("UH5261"),
  "UH6261":   mkImg("UH6261"),
  "UH6570":   mkImg("UH6570"),
  "UH7580":   mkImg("UH7580"),

  // ── BOSCH – Jardim ───────────────────────────────────────────────
  "AdvancedLeafBlower 18V-40":bsImg("06008A9402"),
  "UniversalHedgePole 18V":   bsImg("06008B3000"),
  "GGS 18V-LI":               bsImg("0601229200"),
  "AHS 45-26":  bsImg("0600847A00"),
  "AHS 55-26":  bsImg("0600847C00"),
  "AHS 45-16":  bsImg("0600847G00"),
  "AKE 30-19 S":bsImg("0600837D00"),
  "AKE 35-19 S":bsImg("0600837G00"),
  "ART 23-18 LI":bsImg("06008A9001"),
  "ART 26-18 LI":bsImg("06008A9B00"),
  "AFS 23-37":   bsImg("0600806100"),
  "UniversalChain 18":bsImg("06008B3100"),

  // ── MAKITA – Kits ────────────────────────────────────────────────
  "DK0116G201":  mkImg("DK0116G201"),
  "DK0158G201":  mkImg("DK0158G201"),
  "DK18027":     mkImg("DK18027"),

  // ── BOSCH – Kits ─────────────────────────────────────────────────
  "GSB/GSR 18V-55 Set": bsImg("06019H5370"),
  "ProKit 18V":         bsImg("06019H5260"),

  // ── Armazenagem Makita ───────────────────────────────────────────
  "832319-3": mkImg("832319-3"),
  "832366-0": mkImg("832366-0"),
  "821551-8": mkImg("821551-8"),
  "821701-4": mkImg("821701-4"),
  "191A12-7": mkImg("191A12-7"),
  "P-71928":  mkImg("P-71928"),
  "824980-0": mkImg("824980-0"),

  // ── Armazenagem Bosch ────────────────────────────────────────────
  "SystemBox L": bsImg("1600A007SF"),
  "SystemBox M": bsImg("1600A007SE"),
  "SystemBox S": bsImg("1600A00FN7"),
  "L-BOXX 238":  bsImg("1600A013HZ"),
  "L-BOXX 272":  bsImg("1600A013J0"),
  "L-BOXX 374":  bsImg("1600A013J9"),
};

// ------------------------------------------------------------------
// VANTAGENS ESPECÍFICAS POR SUBCATEGORIA
// ------------------------------------------------------------------
export const vantagensPorSubcategoria: Record<string, { makita: string[]; bosch: string[] }> = {

  "bat-furadeiras-parafusadeiras": {
    makita: [
      "Motor brushless que entrega até 50% mais vida útil e eficiência energética",
      "Sistema LXT 18V totalmente compatível com mais de 250 ferramentas Makita",
      "Embreagem de torque de 21 posições para controle preciso do aperto",
      "Modo martelo + parafusar em um único equipamento compacto",
      "Construção resistente a poeira e respingos para uso em canteiro de obras",
    ],
    bosch: [
      "Motor EC Brushless de alto rendimento com maior autonomia de bateria",
      "Sistema Bosch 18V totalmente compatível com toda a linha Professional",
      "KickBack Control que desliga automaticamente em reação brusca",
      "LED integrado ilumina a área de trabalho com 25 s de delay",
      "Grip ergonômico antiderrapante para trabalho prolongado sem fadiga",
    ],
  },

  "bat-chaves-impacto": {
    makita: [
      "Alto torque de até 1.000 N·m para aperto e desaperto de fixações pesadas",
      "Modo de impacto em 3 estágios — selecione a força certa para cada fixação",
      "Compacidade ideal para acesso a locais estreitos e trabalho em altura",
      "Compatível com encaixe 1/4\", 3/8\" ou 1/2\" conforme o modelo",
      "Proteção eletrônica contra sobrecarga, supercorrente e superaquecimento",
    ],
    bosch: [
      "Torque de impacto de até 1.050 N·m — ideal para instalações estruturais",
      "Impacto triplo Bosch para máxima força em parafusos de alta resistência",
      "Corpo ultra-compacto que não obstrui a visão durante o aperto",
      "Compatível com todo o ecossistema 18V Bosch Professional",
      "Proteção KickBack Control para segurança em situações de bloqueio",
    ],
  },

  "bat-serras": {
    makita: [
      "Plataforma LXT 18V com corte preciso em madeira, alumínio e compostos",
      "Sistema Anti-restart que evita acionamento acidental ao religar a bateria",
      "Guia laser para traço exato em cada corte",
      "Motor brushless de alta eficiência entrega mais cortes por carga",
      "Base biselável para cortes em ângulo de até 50°",
    ],
    bosch: [
      "Plataforma 18V Bosch Professional — intercambiável com toda a linha",
      "Proteção Kickback Stop interrompe imediatamente em caso de bloqueio",
      "Guia paralelo incluso para cortes repetitivos com precisão milimétrica",
      "Disco compatível com guia em trilho (modelos GKT) para marcenaria profissional",
      "Indicador de carga integrado para monitoramento da bateria em uso",
    ],
  },

  "bat-esmerilhadeiras": {
    makita: [
      "Velocidade variável por gatilho para corte em diferentes materiais",
      "Sistema de trava do disco (paddle switch) que evita partidas acidentais",
      "Proteção de travamento Anti-restart ao reinserir a bateria",
      "Disco de 4,5\", 5\" ou 7\" conforme o modelo, para desbaste pesado",
      "Compatível com discos de corte, desbaste e polimento Makita",
    ],
    bosch: [
      "Constant Electronic mantém a rotação constante mesmo sob carga",
      "Sistema Bosch BITURBO para desempenho de esmerilhadeira elétrica com bateria",
      "Proteção Overload Protection evita paradas imprevistas em trabalho pesado",
      "Troca rápida de disco sem ferramenta (modelos com SDS ou X-LOCK)",
      "Proteção Restart Protection — só liga com gatilho liberado",
    ],
  },

  "bat-furadeiras-impacto": {
    makita: [
      "Sistema SDS-Plus para troca de broca sem extratores ou chaves",
      "Função de martelete + rotação + somente martelete em um único equipamento",
      "Motor brushless que entrega força equivalente à versão elétrica com fio",
      "Vibração reduzida com sistema AVT (Anti-Vibration Technology)",
      "Indicador de nível de bateria integrado no corpo da ferramenta",
    ],
    bosch: [
      "Pneumática de pistão único para perfuração precisa em concreto e alvenaria",
      "Sistema SDS-Plus ou SDS-Max com engate automático seguro",
      "Proteção KickBack Control que desliga instantaneamente em travamentos",
      "Modos: perfuração com impacto, somente rotação e somente martelete",
      "Compatível com toda a linha de brocas e ponteiros SDS Bosch Professional",
    ],
  },

  "bat-multiferramentas": {
    makita: [
      "Sistema OIS — compatível com todos os acessórios multimarcas do mercado",
      "Ampla amplitude de oscilação para acabamentos rápidos e precisos",
      "Controle eletrônico de velocidade em 5 etapas para cada tipo de aplicação",
      "Corpo compacto para trabalho em cantos, frestas e locais de difícil acesso",
      "Mais de 40 acessórios Makita disponíveis: lâminas, raspadores, lixas e ponteiros",
    ],
    bosch: [
      "Sistema Starlock MAX para travamento mais rígido e transferência máxima de torque",
      "Electronic Motor Control mantém a velocidade constante sob carga",
      "Quick-Clamp para troca de acessórios com apenas um toque, sem chave",
      "Compatível com Starlock, Starlock Plus e Starlock Max — toda a família",
      "LED integrado ilumina a superfície de trabalho em áreas escuras",
    ],
  },

  "bat-aspiradores-sopradores": {
    makita: [
      "Fluxo de ar de até 4,5 m³/min para limpeza rápida de pó de obra",
      "Compatível com sacos coletores laváveis — economia e sustentabilidade",
      "Velocidade variável por gatilho para controle na remoção de resíduos finos",
      "Construção robusta selada contra poeira para uso em ambientes de construção",
      "Sistema de filtragem Cyclonic que preserva a sucção mesmo com o saco cheio",
    ],
    bosch: [
      "Fluxo de ar de até 4,8 m³/min com coletor de 10 L intercambiável",
      "Filtro de tecido de alta eficiência que captura partículas de até 10 mícrons",
      "Compatível com o sistema Bluetooth de aspiração automática (modelos D)",
      "Bocal articulado de 360° para alcance em todas as direções",
      "Classificação L/M/H para uso em ambientes com diferentes classes de poeira",
    ],
  },

  "ac-baterias-carregadores": {
    makita: [
      "Células de Li-ion premium com proteção integrada contra sobrecarga e calor",
      "Comunicação entre bateria e ferramenta para proteção eletrônica inteligente",
      "Carregador rápido DC18RC carrega uma bateria 3,0 Ah em apenas 22 minutos",
      "Indicador de carga com 3 LEDs para monitoramento instantâneo",
      "Compatível com toda a linha 18V LXT Makita — mais de 250 ferramentas",
    ],
    bosch: [
      "Tecnologia CoolPack 2.0 — resfriamento que dobra a vida útil da bateria",
      "BMS (Battery Management System) com proteção contra 3 modos de falha",
      "GAL 18V-160 C carrega qualquer bateria 18V em tempo recorde",
      "ProCORE18V com células compactas de alta densidade para máxima durabilidade",
      "Compatible com todo o ecossistema 18V Bosch Professional desde 2011",
    ],
  },

  "el-furadeiras-parafusadeiras": {
    makita: [
      "Motor de alta potência com partida suave para prolongar a vida útil",
      "Empunhadura auxiliar incluída para maior controle em perfurações pesadas",
      "Mandril com auto-trava para troca rápida de broca sem chave",
      "Velocidade variável por gatilho com trava de velocidade contínua",
      "Construção blindada contra poeira para uso intenso em canteiro de obras",
    ],
    bosch: [
      "Motor electrónico de alto rendimento com mais de 80% de eficiência",
      "Clutch de segurança que protege contra travamentos bruscos",
      "Mandril de 13 mm com trava automática para troca rápida sem chave",
      "Velocidade variável e reversão de marcha para parafusar e desparafusar",
      "GSB 21-2 RE: potência de 1.100 W para as perfurações mais exigentes",
    ],
  },

  "el-esmerilhadeiras": {
    makita: [
      "Motor de indução blindado para máxima durabilidade em trabalho contínuo",
      "Proteção Anti-restart ao religar após queda de energia",
      "Proteção eletrônica de sobrecarga que preserva o motor em uso pesado",
      "Disco de 4,5\" a 9\" conforme o modelo — corte, desbaste e polimento",
      "Empunhadura lateralmente posicionável para trabalho em ambas as mãos",
    ],
    bosch: [
      "Constant Electronic mantém a rotação exata independente da carga",
      "Proteção de reinicialização que impede a partida acidental após corte de energia",
      "Anel de proteção metálico do eixo para maior resistência em queda",
      "Troca rápida de disco sem ferramenta nos modelos com X-LOCK",
      "Potência de até 2.000 W nos modelos mais robustos para desbaste intensivo",
    ],
  },

  "el-serras": {
    makita: [
      "Motor de alta potência para corte limpo em madeira maciça e compensados",
      "Base de alumínio fundido extremamente resistente a impactos",
      "Sistema de guia em paralelo para cortes retos e repetitivos",
      "Profundidade e ângulo de corte reguláveis com escalas claras e travas seguras",
      "Extrator de pó integrado compatível com aspiradores industriais Makita",
    ],
    bosch: [
      "Sistema de corte a laser para traços perfeitos em peças nobres",
      "Proteção da lâmina com retração automática (serras de bancada GTS/GCM)",
      "Mesa extensível com roldanas para manuseio seguro de peças longas",
      "Soft-start que elimina o repuxo inicial na partida",
      "Compatível com guias em trilho Bosch para máxima precisão em marcenaria",
    ],
  },

  "el-lixadeiras": {
    makita: [
      "Placa de lixamento em borracha que acompanha irregularidades da superfície",
      "Sistema de coleta de pó que captura até 90% do material removido",
      "Velocidade variável para madeira maciça, tinta, verniz e metal",
      "Movimento orbital aleatório que elimina marcas circulares na madeira",
      "Compatível com lixas de 1/4\", 1/3\" ou formato específico conforme o modelo",
    ],
    bosch: [
      "Constant Electronic mantém a velocidade de lixamento constante sob pressão",
      "Microfilter garante coleta eficiente de pó sem obstrução da lixadeira",
      "Absorção vibratória que reduz a fadiga nas mãos em sessões longas",
      "Gancho e laço para lixas padrão — sem precisar de lixas Bosch exclusivas",
      "Bolsa de pó de alta capacidade para longos períodos de trabalho sem interrupção",
    ],
  },

  "el-plainas": {
    makita: [
      "Lâminas reversíveis de alta qualidade — dois gumes por jogo de lâminas",
      "Profundidade de corte regulável de 0 a 2 mm com precisão de décimos",
      "Mesa traseira de alumínio com guia para rebaixos em bordas e frestas",
      "Motor potente com alto número de cortes por minuto para acabamento fino",
      "Sistema de extração de lascas para manter o ambiente de trabalho limpo",
    ],
    bosch: [
      "Lâminas de aço HSS de longa durabilidade para plainar madeiras duras",
      "Velocidade de avanço constante com Constant Electronic",
      "Profundidade do corte ajustável com botão de precisão e escala de leitura clara",
      "Mesa de base plana tratada para deslizamento suave sobre a peça",
      "Paralelas e topes reguláveis inclusos para frestos com largura definida",
    ],
  },

  "mart-sds-plus": {
    makita: [
      "Sistema SDS-Plus com encaixe automático — troca de ponteiro em 3 segundos",
      "AVT (Anti-Vibration Technology) reduz vibração em até 55% versus modelos anteriores",
      "Pneumática de pistão único de alta eficiência para perfuração em concreto armado",
      "Modo: rotação + martelete / somente rotação / somente martelete",
      "Potência de até 2,9 J de energia de impacto para perfurar paredes resistentes",
    ],
    bosch: [
      "Vite pneumático de pistão único — tecnologia que nasceu na Bosch em 1932",
      "Proteção KickBack Control: parada instantânea ao detectar bloqueio da broca",
      "Troca SDS-Plus sem extrator — segura e travada até destravamento manual",
      "Rotação constante por Electronic Motor Control mesmo sob carga pesada",
      "3 modos operacionais claramente identificados para perfurar, bater e cavar",
    ],
  },

  "mart-sds-max": {
    makita: [
      "SDS-Max para brocas a partir de 20 mm de diâmetro em concreto pesado",
      "AVT Makita reduz a vibração transmitida ao operador para uso prolongado",
      "Energia de impacto de até 11,5 J para rompimento de concreto reforçado",
      "Escovas de carvão de fácil acesso para manutenção rápida em obra",
      "Empunhadura de duas mãos com amortecimento que absorve o choque residual",
    ],
    bosch: [
      "Energia de impacto de até 12,5 J para perfuração em concreto de alta resistência",
      "SDS-Max com 4 ranhuras para maior transmissão de força sem folgas",
      "Proteção de sobrecarga que preserva o motor em regime de trabalho intenso",
      "Empunhadura traseira com absorção de vibração para turnos de trabalho exigentes",
      "Compatível com toda a linha de brocas SDS-Max e ponteiros Bosch Professional",
    ],
  },

  "mart-demolidores": {
    makita: [
      "Energia de impacto de até 68 J para demolição de pisos, calçadas e estruturas",
      "Modo FIXTEC para troca de ponteiros sem ferramentas auxiliares",
      "Motor de indução blindado para trabalho contínuo em demolições de longa duração",
      "Controle de energia de impacto em 10 estágios para uso em diferentes materiais",
      "Cabo rotacionável em 360° para máxima ergonomia em todas as posições de trabalho",
    ],
    bosch: [
      "Potência de 1.700 W a 1.900 W para demolição eficiente em qualquer estrutura",
      "SDS-Max com trava de posição de ponteiro em 12 posições diferentes",
      "Proteção eletrônica de sobrecarga para uso contínuo em obra pesada",
      "Empunhadura lateral D-Handle posicionável para perfurações verticais e horizontais",
      "Compatível com toda a linha de ponteiros e talhadeiras SDS-Max Bosch",
    ],
  },

  "mart-rotativos": {
    makita: [
      "Sistema de amortecimento de vibração que reduz o esforço no punho do operador",
      "Indicador de desgaste de carvão embutido no corpo da ferramenta",
      "Potência comprovada para perfuração em tijolo, pedra, cerâmica e concreto",
      "Seletor de modo (rotação + impacto / só rotação) para uso versátil",
      "Makita DHR: bateria LXT 18V com desempenho comparável ao elétrico 220V",
    ],
    bosch: [
      "Mecanismo de impacto eletropneumático para perfuração mais rápida e precisa",
      "3 modos de trabalho selecionáveis por rotação do seletor principal",
      "Punho lateral giratório que adapta a pegada à posição de trabalho",
      "Compacidade e baixo peso para trabalho em teto e paredes verticais",
      "Bosch GBH 18V-26: bateria 18V com desempenho equivalente ao modelo elétrico GBH 2-26",
    ],
  },

  "corte-circular": {
    makita: [
      "Disco de 185 mm ou 210 mm para corte de tábuas largas e vigas",
      "Base em alumínio fundido com guia de corte paralelo de alta precisão",
      "Proteção inferior do disco com retração automática por mola",
      "Motor blindado contra poeira para uso extensivo em serraria e obras",
      "Profundidade e ângulo de corte reguláveis com escalas graduadas de fácil leitura",
    ],
    bosch: [
      "Motor de alto rendimento de até 1.200 W para cortes rápidos em madeiras duras",
      "Guia em trilho compatível com o sistema Bosch para cortes de precisão profissional",
      "Proteção Restart Prevention — não aciona com o interruptor pressionado antes de ligar",
      "Coleta de pó integrada compatível com aspiradores industriais Bosch",
      "Sistema de ajuste da base com alavanca de travamento rápida e segura",
    ],
  },

  "corte-esquadria-bancada": {
    makita: [
      "Corte de esquadria em dois planos simultâneos (compound miter) para molduras",
      "Mesa extensível com roldanas para suportar peças longas com segurança",
      "Laser integrado para marcar exatamente a linha de corte antes de serrar",
      "Motor silencioso com proteção AVT para uso em ambientes fechados",
      "Inclinação dupla (bevel esquerdo/direito) para cortes de carpintaria avançados",
    ],
    bosch: [
      "Motor de alto torque com partida suave para cortes limpos em madeira nobre",
      "Proteção Soft-Start que elimina o repuxo e preserva o fio do disco",
      "Mesa GTS 10 J removível e portátil — transporte fácil para obra",
      "Sistema de dobramento compacto da GCM 12 GDL para armazenagem em espaço mínimo",
      "Guia de corte em ângulo com escala digital nos modelos GCM avançados",
    ],
  },

  "corte-sabre": {
    makita: [
      "Movimento pendular ajustável em 4 estágios para corte agressivo ou preciso",
      "Fixação sem chave (tool-less) para troca de lâmina em 3 segundos",
      "Curso de 32 mm para corte rápido em vigas e tubos de grande espessura",
      "Corpo em posição de pistola para uso horizontal e vertical",
      "Velocidade variável por gatilho para controle em materiais diferentes",
    ],
    bosch: [
      "Sistema SDS Bosch de troca de lâmina sem ferramenta e sem contato com o gume",
      "Electronic Motor Control mantém a velocidade de corte constante sob carga",
      "Curso ajustável de modo pendular para máxima agressividade em demolição",
      "Corpo compacto para cortes em locais de difícil acesso",
      "Compatível com toda a linha de lâminas Bosch T-shank — mais de 100 opções",
    ],
  },

  "marc-tupias": {
    makita: [
      "Velocidade variável entre 10.000 e 30.000 RPM para diferentes fresas e materiais",
      "Sistema de ajuste de profundidade com rosca e trava para cortes repetíveis",
      "Base transparente que mantém a visão da linha de fresa durante o trabalho",
      "Compatível com fresas de haste 6 mm, 8 mm e 12 mm",
      "RT0700C: tupia compacta com 710 W ideal para marcenaria fina e bordas",
    ],
    bosch: [
      "Sistema de profundidade micro-ajustável com escala de 1/10 mm",
      "Partida suave e controle eletrônico de rotação por Constant Electronic",
      "Base articulável em 4 posições para trabalho com e sem mesa de router",
      "Pinça automática de fresa com chave única para troca rápida",
      "GOF 1600 CE: potência de 1.600 W para faceamento de painéis em grande escala",
    ],
  },

  "marc-imersao": {
    makita: [
      "Corte com guia em trilho para precisão de 0,1 mm em painéis de MDF e MDP",
      "Sistema de anti-estilhaço das bordas para acabamento profissional",
      "Proteção anti-retrocesso que trava a lâmina se travar durante o corte",
      "Profundidade de corte de até 56 mm para cortar placas duplas",
      "DSP180: versão a bateria 18V para mobilidade total em canteiro de obras",
    ],
    bosch: [
      "Sistema Bosch FSN (trilho Festool-compatível) para cortes longos e retos",
      "Proteção Kickback Stop que detecta e reage a travamentos em menos de 0,1 s",
      "Extração de pó com eficiência de 96% diretamente no ponto de corte",
      "GKT 18V-52 GC: sem fio e com trilho Bosch — liberdade e precisão em um só equipamento",
      "Escala de bisel de 0° a 47° para biselos precisos em móveis e carpintaria",
    ],
  },

  "marc-lixadeiras-cinta": {
    makita: [
      "Velocidade de cinta variável para lixamento fino (120) ou agressivo (40)",
      "Rolete dianteiro articulado para lixamento de bordas sem sair da peça",
      "Moldura de alumínio de alta resistência que não empenha sob pressão",
      "Extração de pó por bolsa coletora lateral de alta capacidade",
      "Compatível com cintas padrão 76x533 mm ou 75x457 mm conforme o modelo",
    ],
    bosch: [
      "Tensão automática da cinta que compensa o desgaste e mantém tração constante",
      "Constant Electronic para velocidade de cinta uniforme em toda a extensão da peça",
      "Sistema de lixamento em borda por rolete central ajustável para perfis côncavos",
      "Alça superior ergonômica para uso horizontal e guia de borda vertical",
      "Coleta de pó integrada captura 90% do material para um ambiente mais limpo",
    ],
  },

  "limp-lavadoras": {
    makita: [
      "Pressão de 100 a 160 bar para limpeza de veículos, calçadas e maquinários",
      "Lança de pistola com gatilho de travamento para uso prolongado sem esforço",
      "Motor de indução de baixa manutenção — sem escovas de carvão para desgastar",
      "Pistola em plástico resistente a impactos com bico regulável de jato",
      "Acessórios opcionais: escova rotativa, lanças de diferentes comprimentos",
    ],
    bosch: [
      "Pressão máxima de 130 bar com fluxo de até 480 L/h para uso doméstico e semi-profissional",
      "Bocal VarioJet ajustável de 0° a 90° sem necessidade de troca de acessórios",
      "Mangueira de alta pressão de 8 m para alcance amplo sem deslocar o equipamento",
      "Motor com proteção automática por termostato que desliga em caso de aquecimento",
      "AdvancedAquatak 130: versão compacta com 130 bar, ideal para pequenas obras e residências",
    ],
  },

  "limp-aspiradores-industriais": {
    makita: [
      "Capacidade de tanque de 12 a 30 litros para trabalho contínuo em obra pesada",
      "Sistema de filtragem em 3 estágios que retém partículas de até 1 micrômetro",
      "Motor de alta sucção com proteção automática contra obstrução",
      "Compatível com encaixe automático de aspiração nas ferramentas Makita",
      "Rodízios robustos de 360° para movimentação fácil no canteiro de obras",
    ],
    bosch: [
      "Sistema semi-automático de limpeza de filtro por impulso de ar reversível",
      "Capacidade de até 35 L (GAS 35) para sessões longas de obra sem esvaziar",
      "Compatível com o sistema de ligar/desligar automático com ferramentas Bosch",
      "Filtro HEPA opcional para uso em obras com risco de partículas nocivas",
      "Rodas e alça de transporte para deslocamento em pisos irregulares de obra",
    ],
  },
};

// ------------------------------------------------------------------
// Helper para buscar vantagens por subcategoria
// ------------------------------------------------------------------
export function getVantagens(subcategoria: string, marca: string): string[] {
  const entry = vantagensPorSubcategoria[subcategoria];
  if (!entry) {
    if (marca === "Makita") return [
      "Motor de alto desempenho com tecnologia brushless",
      "Compatível com o sistema Makita LXT 18V",
      "Construção robusta para uso profissional contínuo",
      "Ergonomia avançada para reduzir a fadiga do operador",
      "Garantia de fábrica Makita com suporte técnico nacional",
    ];
    return [
      "Motor EC Brushless de alta eficiência Bosch",
      "Compatível com o ecossistema 18V Bosch Professional",
      "Proteção eletrônica multicamadas para maior durabilidade",
      "Design ergonômico premiado com foco no operador",
      "Garantia Bosch com rede de assistência técnica no Brasil",
    ];
  }
  return marca === "Makita" ? entry.makita : entry.bosch;
}

// ------------------------------------------------------------------
// generateProducts
// ------------------------------------------------------------------
export const generateProducts = (
  categoria: string,
  subcategoria: string,
  makitaModels: string[],
  boschModels: string[],
  baseDescMakita: string,
  baseDescBosch: string,
  tags: string[],
  boschBrand: string = "Bosch"
): Produto[] => {
  const result: Produto[] = [];

  makitaModels.forEach(model => {
    result.push({
      id: `makita-${model.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${subcategoria}`,
      codigo: model,
      nome: `Makita ${model}`,
      marca: "Makita",
      categoria,
      subcategoria,
      descricao: `${baseDescMakita} ${model}`,
      especificacoes: ["Alta durabilidade", "Uso profissional", "Tecnologia Makita"],
      vantagens: getVantagens(subcategoria, "Makita"),
      tags: ["makita", ...tags],
      imagem: imagensProdutos[model] || "",
    });
  });

  boschModels.forEach(model => {
    result.push({
      id: `${boschBrand.toLowerCase()}-${model.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${subcategoria}`,
      codigo: model,
      nome: `${boschBrand} ${model}`,
      marca: boschBrand,
      categoria,
      subcategoria,
      descricao: `${baseDescBosch} ${model}`,
      especificacoes: ["Alta durabilidade", "Uso profissional", `Tecnologia ${boschBrand}`],
      vantagens: getVantagens(subcategoria, boschBrand),
      tags: [boschBrand.toLowerCase(), ...tags],
      imagem: imagensProdutos[model] || "",
    });
  });

  return result;
};

// ------------------------------------------------------------------
// CARROSSEL
// ------------------------------------------------------------------
export const carrosselItems = [
  {
    marca: "Makita",
    titulo: "DHP487 — Furadeira/Parafusadeira 18V LXT",
    subtitulo: "Motor brushless de alto desempenho. Compatível com mais de 250 ferramentas LXT.",
    imagem: imagensProdutos["DHP487"],
    cor: "#E2001A",
    categoria: "bat-furadeiras-parafusadeiras",
  },
  {
    marca: "Bosch",
    titulo: "GSB 18V-55 — Furadeira de Impacto 18V",
    subtitulo: "Motor EC Brushless com KickBack Control. Até 55 Nm de torque.",
    imagem: imagensProdutos["GSB 18V-55"],
    cor: "#007BC0",
    categoria: "bat-furadeiras-parafusadeiras",
  },
  {
    marca: "Makita",
    titulo: "DGA454 — Esmerilhadeira Angular 18V",
    subtitulo: "Disco de 115 mm. Motor brushless silencioso e de longa duração.",
    imagem: imagensProdutos["DGA454"],
    cor: "#E2001A",
    categoria: "bat-esmerilhadeiras",
  },
  {
    marca: "Bosch",
    titulo: "GWS 18V-10 — Esmerilhadeira Angular 18V",
    subtitulo: "Constant Electronic. Disco 125 mm. Proteção Restart Prevention.",
    imagem: imagensProdutos["GWS 18V-10"],
    cor: "#007BC0",
    categoria: "bat-esmerilhadeiras",
  },
  {
    marca: "Makita",
    titulo: "DHR243 — Martelete SDS-Plus 18V",
    subtitulo: "AVT Anti-Vibration. 2,0 J de energia de impacto. 3 modos de operação.",
    imagem: imagensProdutos["DHR243"],
    cor: "#E2001A",
    categoria: "bat-furadeiras-impacto",
  },
  {
    marca: "Bosch",
    titulo: "GBH 18V-26 — Martelete SDS-Plus 18V",
    subtitulo: "2,6 J de impacto. KickBack Control. Desempenho de elétrico com bateria.",
    imagem: imagensProdutos["GBH 18V-26"],
    cor: "#007BC0",
    categoria: "bat-furadeiras-impacto",
  },
];

// ------------------------------------------------------------------
// Interfaces de navegação
// ------------------------------------------------------------------
export interface Subcategoria {
  id: string;
  label: string;
}

export interface Categoria {
  id: string;
  numero: number;
  label: string;
  subcategorias: Subcategoria[];
}

// ------------------------------------------------------------------
// CATEGORIAS
// ------------------------------------------------------------------
export const categorias: Categoria[] = [
  {
    id: "bateria",
    numero: 1,
    label: "Ferramentas a Bateria",
    subcategorias: [
      { id: "bat-furadeiras-parafusadeiras", label: "Furadeiras e Parafusadeiras" },
      { id: "bat-chaves-impacto", label: "Chaves e Parafusadeiras de Impacto" },
      { id: "bat-serras", label: "Serras" },
      { id: "bat-esmerilhadeiras", label: "Esmerilhadeiras" },
      { id: "bat-furadeiras-impacto", label: "Marteletes" },
      { id: "bat-multiferramentas", label: "Multiferramentas" },
      { id: "bat-aspiradores-sopradores", label: "Aspiradores e Sopradores" },
    ],
  },
  {
    id: "eletricas",
    numero: 2,
    label: "Ferramentas Elétricas",
    subcategorias: [
      { id: "el-furadeiras-parafusadeiras", label: "Furadeiras e Parafusadeiras" },
      { id: "el-esmerilhadeiras", label: "Esmerilhadeiras" },
      { id: "el-serras", label: "Serras Circulares e de Esquadria" },
      { id: "el-lixadeiras", label: "Lixadeiras" },
      { id: "el-plainas", label: "Plainas" },
    ],
  },
  {
    id: "marteletes",
    numero: 3,
    label: "Marteletes e Demolidores",
    subcategorias: [
      { id: "mart-sds-plus", label: "Marteletes SDS-Plus" },
      { id: "mart-sds-max", label: "Marteletes SDS-Max" },
      { id: "mart-demolidores", label: "Demolidores" },
    ],
  },
  {
    id: "corte",
    numero: 4,
    label: "Ferramentas de Corte",
    subcategorias: [
      { id: "corte-circular", label: "Serras Circulares" },
      { id: "corte-esquadria-bancada", label: "Serras de Esquadria e Bancada" },
      { id: "corte-sabre", label: "Serras Sabre" },
      { id: "corte-fita", label: "Serras de Fita" },
      { id: "corte-marmore", label: "Serras Mármore" },
    ],
  },
  {
    id: "marcenaria",
    numero: 5,
    label: "Marcenaria",
    subcategorias: [
      { id: "marc-tupias", label: "Tupias e Fresadoras" },
      { id: "marc-imersao", label: "Serras de Imersão" },
      { id: "marc-lixadeiras-cinta", label: "Lixadeiras de Cinta" },
      { id: "marc-grampeadores", label: "Grampeadores e Pinadores" },
    ],
  },
  {
    id: "limpeza",
    numero: 6,
    label: "Limpeza e Aspiração",
    subcategorias: [
      { id: "limp-lavadoras", label: "Lavadoras de Alta Pressão" },
      { id: "limp-aspiradores-industriais", label: "Aspiradores Industriais" },
    ],
  },
  {
    id: "jardim",
    numero: 7,
    label: "Jardim",
    subcategorias: [
      { id: "jard-bateria", label: "Ferramentas a Bateria" },
      { id: "jard-eletricas", label: "Ferramentas Elétricas e a Combustão" },
    ],
  },
  {
    id: "acessorios",
    numero: 8,
    label: "Acessórios e Baterias",
    subcategorias: [
      { id: "ac-baterias-carregadores", label: "Baterias e Carregadores" },
      { id: "ac-kits-armazenagem", label: "Kits e Armazenagem" },
    ],
  },
];

// ------------------------------------------------------------------
// PRODUTOS — gerados via generateProducts
// ------------------------------------------------------------------
export const produtos: Produto[] = [
  // ── Ferramentas a Bateria: Furadeiras e Parafusadeiras ──────────
  ...generateProducts(
    "bateria", "bat-furadeiras-parafusadeiras",
    ["DHP482","DHP484","DHP486","DHP487","DDF453","DDF484","DHP453"],
    ["GSB 18V-55","GSB 185-LI","GSR 18V-55","GSR 180-LI","GSB 18V-21","GSR 18V-28","GSB 18V-150 C"],
    "Furadeira/Parafusadeira de Impacto 18V LXT Makita",
    "Furadeira de Impacto 18V Bosch Professional",
    ["furadeira","parafusadeira","impacto","bateria","18v","lxt"]
  ),
  // ── Ferramentas a Bateria: Chaves de Impacto ────────────────────
  ...generateProducts(
    "bateria", "bat-chaves-impacto",
    ["DTD152","DTD154","DTW285","DTW300","DTD171","DTW700","DTW1001"],
    ["GDX 18V-200","GDX 180-LI","GDS 18V-300","GDS 18V-400","GDS 18V-1000","GDS 18V-1050 H","GDX 18V-EC"],
    "Chave de Impacto 18V LXT Makita",
    "Chave de Impacto 18V Bosch Professional",
    ["chave","impacto","parafusadeira","bateria","18v"]
  ),
  // ── Ferramentas a Bateria: Serras ────────────────────────────────
  ...generateProducts(
    "bateria", "bat-serras",
    ["DHS680","DHS782","DHS660","DJR187","DJR189","DJR147","DLS600","DLS714","DSP600","DSP180"],
    ["GKS 18V-57","GKS 18V-68","GKS 185-LI","GST 18V-LI","GST 185-LI","GCM 18V-305","GSA 18V-LI","GSA 18V-28","GSA 18V-LI C"],
    "Serra 18V LXT Makita",
    "Serra 18V Bosch Professional",
    ["serra","circular","tico-tico","sabre","esquadria","bateria","18v"]
  ),
  // ── Ferramentas a Bateria: Esmerilhadeiras ───────────────────────
  ...generateProducts(
    "bateria", "bat-esmerilhadeiras",
    ["DGA452","DGA454","DGA456","DGA516","DGA519","DGA700","DGA900"],
    ["GWS 18V-10","GWS 18-125 V-LI","GWS 180-LI","GWS 18V-15 SC","GWS 185-LI","GWS 18V-125 SC","GWX 18V-10 SC"],
    "Esmerilhadeira Angular 18V LXT Makita",
    "Esmerilhadeira Angular 18V Bosch Professional",
    ["esmerilhadeira","angular","disco","bateria","18v","lxt"]
  ),
  // ── Ferramentas a Bateria: Marteletes ────────────────────────────
  ...generateProducts(
    "bateria", "bat-furadeiras-impacto",
    ["DHR171","DHR183","DHR202","DHR242","DHR243","DHR263"],
    ["GBH 18V-20","GBH 18V-21","GBH 18V-26","GBH 36 V-LI Plus"],
    "Martelete SDS-Plus 18V LXT Makita",
    "Martelete SDS-Plus 18V Bosch Professional",
    ["martelete","sds","impacto","concreto","bateria","18v"]
  ),
  // ── Ferramentas a Bateria: Multiferramentas ──────────────────────
  ...generateProducts(
    "bateria", "bat-multiferramentas",
    ["DTM50","DTM51","DTM52","DTM53","DTM54","DBO180"],
    ["GOP 18V-28","GOP 185-LI","GOP 18V-EC","GOP 12V-28","GOS 18V-LI","GVB 18V-70","GOP 10.8V-28"],
    "Multiferramenta 18V LXT Makita",
    "Multiferramenta 18V Bosch Professional",
    ["multiferramenta","oscilante","bateria","18v","lxt"]
  ),
  // ── Ferramentas a Bateria: Aspiradores e Sopradores ─────────────
  ...generateProducts(
    "bateria", "bat-aspiradores-sopradores",
    ["DUB185","DUB186","DUB362","DUB148","DCL180","DCL184","DCL500","DVC350","DVC861"],
    ["GAS 18V-10 L","GAS 18V-LI","GAS 18V-1","GBL 18V-120","GBL 18V-120 D","GHG 180 LI"],
    "Soprador/Aspirador 18V LXT Makita",
    "Aspirador/Soprador 18V Bosch Professional",
    ["aspirador","soprador","limpeza","bateria","18v"]
  ),
  // ── Ferramentas Elétricas: Furadeiras ────────────────────────────
  ...generateProducts(
    "eletricas", "el-furadeiras-parafusadeiras",
    ["HP1630","HP1631","HP1641","HP1801","HP2010N","HP2051F","HP2071","HP0300","M0801B"],
    ["GSB 10 RE","GSB 13 RE","GSB 16 RE","GSB 21-2 RE","GSR 6-25 TE","GSR 6-45 TE","GSB 550","GSB 600 RE","GSB 750 RE"],
    "Furadeira de Impacto Elétrica Makita",
    "Furadeira de Impacto Elétrica Bosch Professional",
    ["furadeira","impacto","elétrica","fio","parafusadeira"]
  ),
  // ── Ferramentas Elétricas: Esmerilhadeiras ───────────────────────
  ...generateProducts(
    "eletricas", "el-esmerilhadeiras",
    ["GA4530","GA5030","GA6030","GA7020","GA9020","9557HN","9558HN"],
    ["GWS 700","GWS 750","GWS 850 C","GWS 7-125","GWS 9-125","GWS 13-125 CI","GWS 2000"],
    "Esmerilhadeira Angular Elétrica Makita",
    "Esmerilhadeira Angular Elétrica Bosch Professional",
    ["esmerilhadeira","angular","disco","elétrica","desbaste","corte"]
  ),
  // ── Ferramentas Elétricas: Serras ────────────────────────────────
  ...generateProducts(
    "eletricas", "el-serras",
    ["HS7600","HS7601","HS6601","HS7100","5008M","5007MG","LS1040","LS1018L","LS1016L","LS1013","LS1216L","LS0815","LS0714","MT230"],
    ["GKS 190","GKS 65 GCE","GKS 85","GKS 600","CS 10","GCM 10 S","GCM 12 GDL","GCM 10 MX","GCM 305","GCM 8 SJL","GTS 10 J","PTS 10"],
    "Serra Circular/Esquadria Elétrica Makita",
    "Serra Circular/Esquadria Elétrica Bosch Professional",
    ["serra","circular","esquadria","elétrica","corte","madeira"]
  ),
  // ── Ferramentas Elétricas: Lixadeiras ───────────────────────────
  ...generateProducts(
    "eletricas", "el-lixadeiras",
    ["BO4556","BO4557","BO5030","BO5031","BO6030","BO6040","BO3710","9032","9033"],
    ["GSS 140","GSS 23 AE","GEX 125-1 AE","GEX 150 AC","GEX 18V-125 Q","GOS 18V-28"],
    "Lixadeira Elétrica Makita",
    "Lixadeira Elétrica Bosch Professional",
    ["lixadeira","acabamento","lixar","madeira","elétrica","orbital"]
  ),
  // ── Ferramentas Elétricas: Plainas ───────────────────────────────
  ...generateProducts(
    "eletricas", "el-plainas",
    ["KP0800","KP0810","KP0810C","KP180","1901","1911B","1912B","2012NB","2030","1806B"],
    ["GHO 26-82 D","GHO 40-82 C","GHO 10-82","GHO 15-82","GHO 16-82","PHO 3-82"],
    "Plaina Elétrica Makita",
    "Plaina Elétrica Bosch Professional",
    ["plaina","madeira","aplainamento","elétrica","marcenaria"]
  ),
  // ── Marteletes: SDS-Plus ─────────────────────────────────────────
  ...generateProducts(
    "marteletes", "mart-sds-plus",
    ["HR2470","HR2630","HR2641","HR2811F","HR3000C"],
    ["GBH 2-26 DRE","GBH 2-28 DFV","GBH 3-28 DRE","GBH 4-32 DFR","GBH 5-40 DCE","GBH 2-26 F"],
    "Martelete SDS-Plus Elétrico Makita",
    "Martelete SDS-Plus Elétrico Bosch Professional",
    ["martelete","sds-plus","concreto","elétrico","perfuração"]
  ),
  // ── Marteletes: SDS-Max ──────────────────────────────────────────
  ...generateProducts(
    "marteletes", "mart-sds-max",
    ["HR4013C","HR4013","HR4511C","HR5001C","HR5211C","HM0860C","HM1214C"],
    ["GBH 5-40 DE","GBH 7-46 DE","GBH 8-45 DV","GBH 11 DE","GBH 12-52 DV","GBH 10 DC","GBH 45 DV"],
    "Martelete SDS-Max Elétrico Makita",
    "Martelete SDS-Max Elétrico Bosch Professional",
    ["martelete","sds-max","demolição","concreto","elétrico"]
  ),
  // ── Marteletes: Demolidores ──────────────────────────────────────
  ...generateProducts(
    "marteletes", "mart-demolidores",
    ["HM0810T","HM0870C","HM1100C","HM1203C","HM1307CB","HM1400","HM1812"],
    ["GSH 5 E","GSH 5 CE","GSH 7 VC","GSH 11 E","GSH 11 VC","GSH 16-30","GSH 27 VC"],
    "Demolidor Elétrico Makita",
    "Demolidor Elétrico Bosch Professional",
    ["demolidor","demolição","rompedor","concreto","elétrico"]
  ),
  // ── Ferramentas de Corte: Serras Circulares ─────────────────────
  ...generateProducts(
    "corte", "corte-circular",
    ["HS7600","HS7601","HS6601","HS7100","5008M","5007MG","DHS680","DHS782","DHS660"],
    ["GKS 190","GKS 65 GCE","GKS 85","GKS 600","GKS 18V-57","GKS 18V-68","GKS 185-LI"],
    "Serra Circular Makita",
    "Serra Circular Bosch Professional",
    ["serra","circular","madeira","corte","disco"]
  ),
  // ── Ferramentas de Corte: Serras de Esquadria/Bancada ───────────
  ...generateProducts(
    "corte", "corte-esquadria-bancada",
    ["LS1040","LS1018L","LS1016L","LS1013","LS1216L","LS0815","LS0714","MT230","DLS600","DLS714"],
    ["GCM 10 S","GCM 12 GDL","GCM 10 MX","GCM 305","GCM 8 SJL","GCM 18V-305","GTS 10 J","PTS 10"],
    "Serra de Esquadria/Bancada Makita",
    "Serra de Esquadria/Bancada Bosch Professional",
    ["serra","esquadria","bancada","corte","madeira","bisel"]
  ),
  // ── Ferramentas de Corte: Serras Sabre ──────────────────────────
  ...generateProducts(
    "corte", "corte-sabre",
    ["JR3050T","JR3060T","JR3070CT","JR140D","DJR187","DJR189","DJR147"],
    ["GSA 1200 E","GSA 1300 PCE","GSA 1100 E","GSA 900 E","GSA 18V-LI","GSA 18V-28","GSA 18V-LI C"],
    "Serra Sabre Makita",
    "Serra Sabre Bosch Professional",
    ["serra","sabre","demolição","corte","tubos","galhos"]
  ),
  // ── Ferramentas de Corte: Serras de Fita ────────────────────────
  ...generateProducts(
    "corte", "corte-fita",
    ["LB900F","LB1200F","LB1201FL","2106","2107F"],
    ["GCB 18V-LI","GCB 35 VE","GCB 35 VE-N","BS 170 E","BS 175 E"],
    "Serra de Fita Makita",
    "Serra de Fita Bosch Professional",
    ["serra","fita","madeira","corte","curvo"]
  ),
  // ── Ferramentas de Corte: Serras Mármore ────────────────────────
  ...generateProducts(
    "corte", "corte-marmore",
    ["4100KB","4100NH","4101RH","4114S","9557PBX1","SG180"],
    ["GDC 14","GDC 54","GDC 150","GDC 14-16","GCD 12 JL","GCS 10 J","GMC 14"],
    "Serra Mármore Makita",
    "Serra Mármore Bosch Professional",
    ["serra","mármore","cerâmica","porcelana","corte","molhado"]
  ),
  // ── Marcenaria: Tupias ───────────────────────────────────────────
  ...generateProducts(
    "marcenaria", "marc-tupias",
    ["RP0900","RP1110C","RP1800","RP1800F","RP2301","RP2301FC","RT0700C"],
    ["GOF 130","GOF 1250 CE","GOF 1600 CE","GKF 12V-8","GKF 600","POF 1400 ACE","POF 1200 AE"],
    "Tupia/Fresadora Makita",
    "Tupia/Fresadora Bosch Professional",
    ["tupia","fresadora","router","fresas","marcenaria","bordas"]
  ),
  // ── Marcenaria: Serra de Imersão ─────────────────────────────────
  ...generateProducts(
    "marcenaria", "marc-imersao",
    ["SP6000","SP6000J","SP6000J1","SP6000K1","DSP600","DSP180"],
    ["GKT 55 GCE","GKT 66","GKT 18V-52 GC","GKS 18V-57 G","GKS 68 BCG","GKT 55 BCE"],
    "Serra de Imersão Makita",
    "Serra de Imersão Bosch Professional",
    ["serra","imersão","trilho","painéis","mdf","marcenaria"]
  ),
  // ── Marcenaria: Lixadeiras de Cinta ─────────────────────────────
  ...generateProducts(
    "marcenaria", "marc-lixadeiras-cinta",
    ["9911","9903","9924DB","9401","BO3710"],
    ["GBS 75 AE","GBS 600","PBS 75 A","PBS 75 AE"],
    "Lixadeira de Cinta Makita",
    "Lixadeira de Cinta Bosch Professional",
    ["lixadeira","cinta","madeira","desbaste","marcenaria"]
  ),
  // ── Marcenaria: Grampeadores e Pinadores ────────────────────────
  ...generateProducts(
    "marcenaria", "marc-grampeadores",
    ["AF353","AF505","BST110","DST112","DST112ZJ","DST113","DST221"],
    ["GCN90-30 DG","GCN 45-15","GSK 64","GSK 18V-LI"],
    "Grampeador/Pinador Makita",
    "Grampeador/Pinador Bosch Professional",
    ["grampeador","pinador","pregos","grampos","marcenaria","acabamento"]
  ),
  // ── Limpeza: Lavadoras de Pressão ───────────────────────────────
  ...generateProducts(
    "limpeza", "limp-lavadoras",
    ["HW110","HW111","HW112","HW140","HW151","HW160","HW1300"],
    ["UniversalAquatak 125","EasyAquatak 100","EasyAquatak 110","AdvancedAquatak 130"],
    "Lavadora de Alta Pressão Makita",
    "Lavadora de Alta Pressão Bosch",
    ["lavadora","pressão","limpeza","veículos","calçadas"]
  ),
  // ── Limpeza: Aspiradores Industriais ────────────────────────────
  ...generateProducts(
    "limpeza", "limp-aspiradores-industriais",
    ["440","VC2510","VC2512L","VC3000L","VC3012L","VC3210LX","VC4210L","VC4510L"],
    ["GAS 15 L","GAS 20 L SFC","GAS 25 L SFC","GAS 35 L SFC"],
    "Aspirador Industrial Makita",
    "Aspirador Industrial Bosch Professional",
    ["aspirador","industrial","obra","pó","construção"]
  ),
  // ── Jardim: Bateria ──────────────────────────────────────────────
  ...generateProducts(
    "jardim", "jard-bateria",
    ["DUR192","DUR368","DUC122","DUC256","DUC353","DUN461","DUN600","DLM380"],
    ["AdvancedLeafBlower 18V-40","UniversalHedgePole 18V","ART 23-18 LI","ART 26-18 LI","UniversalChain 18"],
    "Ferramenta de Jardim 18V LXT Makita",
    "Ferramenta de Jardim 18V Bosch",
    ["jardim","bateria","aparador","cortador","soprador"]
  ),
  // ── Jardim: Elétricas e Combustão ───────────────────────────────
  ...generateProducts(
    "jardim", "jard-eletricas",
    ["UC4041A","UC4051A","EA4300","EA5000P","EA6100P","ELM3320X","ELM3800","ELM4621","EM2600L"],
    ["AHS 45-26","AHS 55-26","AHS 45-16","AKE 30-19 S","AKE 35-19 S","AFS 23-37","GGS 18V-LI"],
    "Ferramenta de Jardim Elétrica Makita",
    "Ferramenta de Jardim Bosch",
    ["jardim","elétrica","motosserra","cortador","podador"]
  ),
  // ── Acessórios: Baterias e Carregadores ─────────────────────────
  ...generateProducts(
    "acessorios", "ac-baterias-carregadores",
    ["BL1815N","BL1830B","BL1840B","BL1850B","BL1860B","DC18RC","DC18RD","DC18SF","BL4020","BL4025","BL4040","BL4050F","BL4080F","DC40RA","DC40RB","BL1015","BL1021B","BL1041B","BL1415","BL1430B","BL1460B"],
    ["GBA 18V 2.0Ah","GBA 18V 3.0Ah","GBA 18V 4.0Ah","GBA 18V 5.0Ah","GBA 18V 6.0Ah","GAL 18V-20","GAL 18V-40","GAL 18V-80","GAL 18V-160 C","ProCORE18V 4.0Ah","ProCORE18V 5.5Ah","ProCORE18V 8.0Ah","ProCORE18V 12.0Ah","GBA 12V 2.0Ah","GBA 12V 3.0Ah","GAL 12V-20","GAL 12V-40"],
    "Bateria/Carregador Makita",
    "Bateria/Carregador Bosch Professional",
    ["bateria","carregador","lithium","18v","40v","lxt","xgt"]
  ),
  // ── Acessórios: Kits e Armazenagem ──────────────────────────────
  ...generateProducts(
    "acessorios", "ac-kits-armazenagem",
    ["DK18027","832319-3","832366-0","821551-8","821701-4","191A12-7","P-71928","824980-0"],
    ["GSB/GSR 18V-55 Set","ProKit 18V","SystemBox L","SystemBox M","SystemBox S","L-BOXX 238","L-BOXX 272","L-BOXX 374"],
    "Kit / Caixa de Armazenagem Makita",
    "Kit / Caixa de Armazenagem Bosch Professional",
    ["kit","maleta","mala","armazenagem","lboxx","makpac","systainer"]
  ),
];