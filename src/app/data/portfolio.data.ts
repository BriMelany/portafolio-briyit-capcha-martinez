/** Categorías del filtro de proyectos. Un proyecto puede pertenecer a más de una. */
export type Categoria = 'landing' | 'corporativa' | 'ecommerce' | 'academico';
export type FiltroId = 'todos' | Categoria;

export interface Filtro { id: FiltroId; label: string; }

export const FILTROS: Filtro[] = [
  { id: 'todos',       label: 'Todos' },
  { id: 'landing',     label: 'Landings' },
  { id: 'corporativa', label: 'Webs corporativas' },
  { id: 'ecommerce',   label: 'E-commerce' },
  { id: 'academico',   label: 'Proyectos académicos' },
];

export interface Project {
  tipo: string;
  categorias: Categoria[];   // para el filtro
  titulo: string;
  tecnologias: string[];     // se muestran como etiquetas
  imagen: string;
  ancho: number;
  alto: number;
  largo?: boolean;      // captura de página completa: se desplaza al pasar el cursor
  duracion?: number;    // segundos que tarda en recorrer la página
  url: string;
  boton?: string;       // texto del botón del pop up (por defecto «Ver desarrollo»)
  caso: Caso;           // contenido del pop up
}

export interface Caso {
  problema: string;
  solucion: string;
  resultados: string;
}

export interface HeroSlide {
  nombre: string;
  escritorio: string;   // captura de escritorio (pantalla de la laptop)
  movil: string;        // captura móvil (pantalla del celular)
}

export interface Skill {
  titulo: string;
  icono: string;
  detalle: string;
}

export interface NavItem { label: string; href: string; }

// ✏️ Edita aquí tus datos personales
export const PERFIL = {
  nombre: 'Briyit Melany Capcha Martinez',
  correo: 'briyitmelanycapcha@gmail.com',
  telefono: '+51 998 845 416',
  whatsapp: 'https://wa.me/51998845416',
  linkedin: 'https://linkedin.com/in/briyit-melany-capcha96',
  github: 'https://github.com/BriMelany',
  cv: 'cv/CV_Briyit_Capcha.pdf',
};

export const NAV: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export const SKILLS_FILA_1: Skill[] = [
  { titulo: 'Frontend y diseño', icono: 'assets/icons/frontend.svg',
    detalle: 'HTML5 · CSS3 · JavaScript · React · Angular · Diseño responsive · Diseño UX/UI · Figma' },
  { titulo: 'Backend e integración', icono: 'assets/icons/backend.svg',
    detalle: 'Node.js · Express · Spring Boot · ASP.NET Core · API REST' },
  { titulo: 'Lenguajes', icono: 'assets/icons/code.svg',
    detalle: 'JavaScript · Python · Java · C#' },
];

export const SKILLS_FILA_2: Skill[] = [
  { titulo: 'Bases de Datos', icono: 'assets/icons/database.svg', detalle: 'MySQL · SQL Server' },
  { titulo: 'WordPress', icono: 'assets/icons/web.svg',
    detalle: 'Desarrollo de sitios · Plugins · SEO on-page · Mantenimiento' },
];

export const PROYECTOS: Project[] = [
  { tipo: '2 Landing pages', categorias: ['landing'], titulo: 'Ed Global Trader',
    tecnologias: ['Diseño UX/UI', 'WordPress', 'SEO'],
    imagen: 'assets/img/full-ed-global-trader.webp', ancho: 640, alto: 2345, largo: true, duracion: 8.8, url: 'https://www.edglobaltrader.com',
    caso: {
      problema: 'Ed Global Trader requirió el desarrollo de dos landing pages diferenciadas: una dirigida al público de Latinoamérica y otra enfocada en las ventas en Estados Unidos.',
      solucion: 'Se realizó un diseño personalizado, adaptado a las características y objetivos del negocio, utilizando los colores del logo. Para Latinoamérica se estableció el verde como color principal, mientras que para Estados Unidos se eligió el anaranjado, diferenciando visualmente ambas landing pages.',
      resultados: 'Se obtuvieron dos landing pages responsive, diferenciadas por mercado y alineadas con la identidad visual de la marca. La optimización SEO contribuyó a mejorar la visibilidad online y a potenciar la captación de clientes minoristas y mayoristas en Latinoamérica y Estados Unidos.',
    }
  },
  { tipo: 'Web corporativa', categorias: ['corporativa'], titulo: 'Biogenia',
    tecnologias: ['Diseño UX/UI', 'WordPress', 'SEO'],
    imagen: 'assets/img/full-biogenia.webp', ancho: 640, alto: 2906, largo: true, duracion: 11.0, url: 'https://somosbiogenia.com',
    caso: {
      problema: 'Biogenia requirió una web corporativa que reflejara su identidad y mostrara sus soluciones y servicios.',
      solucion: 'Se diseñó e implementó una web corporativa que reflejaba la identidad de la marca y permitía mostrar de forma eficiente sus soluciones y servicios.',
      resultados: 'Web corporativa responsive que presenta las soluciones y los servicios de la empresa, con formularios y llamadas a la acción.',
    }
  },
  { tipo: 'Web corporativa', categorias: ['corporativa'], titulo: 'Energy Project',
    tecnologias: ['Diseño UX/UI', 'WordPress', 'SEO'],
    imagen: 'assets/img/full-epg.webp', ancho: 640, alto: 1937, largo: true, duracion: 7.0, url: 'https://epg.com.pe',
    caso: {
      problema: 'Energy Project requirió una web corporativa que permitiera mostrar sus servicios, los proyectos realizados previamente y los productos disponibles para compra por WhatsApp.',
      solucion: 'Se diseñó e implementó una web corporativa que reflejaba la identidad de la marca y permitía mostrar los servicios, proyectos y productos.',
      resultados: 'Web corporativa responsive con llamadas a la acción y formulario de contacto, que permitió aumentar la confianza de los clientes y mostrar resultados concretos.',
    }
  },
  { tipo: 'Web corporativa', categorias: ['corporativa'], titulo: 'Truck Motors',
    tecnologias: ['Diseño UX/UI', 'WordPress', 'SEO'],
    imagen: 'assets/img/full-truck-motors.webp', ancho: 640, alto: 2431, largo: true, duracion: 9.2, url: 'https://truckmotorsperu.com/',
    caso: {
      problema: 'Truck Motors requirió una web corporativa que permitiera mostrar sus servicios y los productos disponibles para compra por WhatsApp.',
      solucion: 'Se diseñó e implementó una web corporativa que reflejaba la identidad de la marca y permitía mostrar los servicios y productos.',
      resultados: 'Web corporativa responsive con llamadas a la acción y formulario de contacto, que permitió mostrar los servicios de la empresa y aumentar la confianza de los clientes.',
    }
  },
  { tipo: 'Landing page', categorias: ['landing'], titulo: 'Patch Healing',
    tecnologias: ['Diseño UX/UI', 'WordPress', 'SEO'],
    imagen: 'assets/img/full-patch-healing.webp', ancho: 640, alto: 3640, largo: true, duracion: 11.0, url: 'https://patchhealing.com',
    caso: {
      problema: 'Patch Healing requirió una landing page que permitiera mostrar una solución de Biogenia: un producto natural para la cicatrización de quemaduras.',
      solucion: 'Se diseñó e implementó una landing page que reflejaba el ambiente de investigación y de la Amazonía peruana, incentivando a los usuarios a adquirir este producto innovador o a realizar pruebas en su comunidad.',
      resultados: 'Landing page responsive que permitió mostrar un producto desarrollado por Biogenia con temática amazónica y de investigación.',
    }
  },
  { tipo: 'Web corporativa', categorias: ['corporativa'], titulo: 'Fundación Calma',
    tecnologias: ['Diseño UX/UI', 'WordPress', 'SEO'],
    imagen: 'assets/img/full-fundacion-calma.webp', ancho: 640, alto: 1988, largo: true, duracion: 7.2, url: 'https://fundacioncalma.org',
    caso: {
      problema: 'Fundación Calma requirió una web corporativa que permitiera mostrar las campañas y actividades que realiza la fundación en apoyo de la comunidad.',
      solucion: 'Se diseñó e implementó una web corporativa que reflejaba el apoyo de la fundación a la comunidad mediante las imágenes y la estructura, resaltando las líneas de acción y las personas detrás de cada iniciativa.',
      resultados: 'Web corporativa responsive con gran parte de contenido visual de campañas y actividades de la fundación, que permitió mostrar su impacto en la comunidad y aumentar la confianza de los donantes.',
    }
  },
  { tipo: 'Proyecto académico', categorias: ['academico'], titulo: 'Sistema para una Biblioteca',
    tecnologias: ['Angular', 'Spring Boot', 'API REST', 'JWT', 'Préstamos y reservas'],
    imagen: 'assets/img/biblioteca.webp', ancho: 960, alto: 540, url: 'https://github.com/BriMelany/SistemaBiblioteca',
    boton: 'Ver repositorio',
    caso: {
      problema: 'Se requería un sistema para gestionar el inventario y los préstamos de libros en la biblioteca.',
      solucion: 'Se diseñó un sistema para gestionar el inventario y los préstamos de libros en la biblioteca, con tecnologías como Angular y Spring Boot, organizado en diferentes módulos.',
      resultados: 'Se comprendieron a profundidad las reglas de negocio de la biblioteca y, con base en ellas, se implementó una solución que permitía manejar los préstamos, las reservas y las devoluciones en un mismo sistema.',
    }
  },
  { tipo: 'Proyecto académico', categorias: ['academico', 'ecommerce'], titulo: 'Tienda en Línea para una Farmacia',
    tecnologias: ['ASP.NET Core', 'C#', 'SQL Server', 'Carrito de compras', 'Autenticación'],
    imagen: 'assets/img/farmacia.webp', ancho: 960, alto: 540, url: 'https://github.com/BriMelany',
    boton: 'Ver repositorio',
    caso: {
      problema: 'Se requería una tienda en línea para una farmacia que permitiera a los clientes comprar productos de manera segura y eficiente.',
      solucion: 'Se diseñó e implementó una tienda en línea para una farmacia utilizando ASP.NET Core y SQL Server, con funcionalidades como carrito de compras, autenticación de usuarios y gestión de inventario con roles.',
      resultados: 'Se logró una tienda en línea funcional y segura que permitió a los clientes comprar productos de manera eficiente, mejorando la experiencia de compra y aumentando las ventas de la farmacia. Además, el administrador y el farmacéutico pudieron gestionar los productos y pedidos en un solo sistema.',
    }
  },
  { tipo: 'Proyecto académico', categorias: ['academico'], titulo: 'CRM Centro Cultural',
    tecnologias: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'Reportes', 'Autenticación'],
    imagen: 'assets/img/crm.webp', ancho: 960, alto: 540, url: 'https://github.com/BriMelany/Yoga_Proyecto',
    boton: 'Ver repositorio',
    caso: {
      problema: 'Se requería un sistema de gestión de relaciones con clientes para el Centro Cultural.',
      solucion: 'Se diseñó e implementó un CRM para el Centro Cultural utilizando tecnologías como JavaScript, Node.js y Express, con funcionalidades de gestión de contactos y generación de reportes.',
      resultados: 'Se logró desarrollar un sistema que permitió guardar los datos de los clientes y generar reportes.',
    }
  },
];

// Capturas que se alternan en la laptop y el celular del inicio (misma posición = mismo sitio)
export const HERO_SLIDES: HeroSlide[] = [
  { nombre: 'Energy Project',   escritorio: 'assets/img/epg.webp',              movil: 'assets/img/m-epg.webp' },
  { nombre: 'Ed Global Trader', escritorio: 'assets/img/ed-global-trader.webp', movil: 'assets/img/m-ed-global-trader.webp' },
  { nombre: 'Biogenia',         escritorio: 'assets/img/biogenia.webp',         movil: 'assets/img/m-biogenia.webp' },
  { nombre: 'Truck Motors',     escritorio: 'assets/img/truck-motors.webp',     movil: 'assets/img/m-truck-motors.webp' },
  { nombre: 'Patch Healing',    escritorio: 'assets/img/patch-healing.webp',    movil: 'assets/img/m-patch-healing.webp' },
  { nombre: 'Fundación Calma',  escritorio: 'assets/img/fundacion-calma.webp',  movil: 'assets/img/m-fundacion-calma.webp' },
];
