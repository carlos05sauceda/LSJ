
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  NavItem, 
  Slide, 
  Feature, 
  ValueItem, 
  EducationalPillar, 
  SocialLink, 
  ContactInfo 
} from './home.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class HomeComponent {

  isMenuOpen: boolean = false;

  // Método para alternar el estado del menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para cerrar el menú (por ejemplo al hacer clic en un enlace)
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
  collegeName = 'COLEGIO LICEO SAN JUAN';
  tagline = 'Educación, formación y valores para la vida.';
  logoUrl = '/logo.jpeg';
  currentYear = new Date().getFullYear();

  navItems: NavItem[] = [
    { label: 'INICIO', link: '#inicio' },
    { label: 'OFERTA ACADÉMICA', link: '/OfertaAcademica' },
    { label: 'GALERÍA', link: '/Galeria' },
    { label: 'CONTACTO', link: '/Contacto' }
  ];

  slides: Slide[] = [
    { id: 1, imageUrl: '/slide1.jpg', altText: 'Instalaciones del Liceo San Juan 1' },
    { id: 2, imageUrl: '/slide2.jpg', altText: 'Instalaciones del Liceo San Juan 2' },
    { id: 3, imageUrl: '/slide3.jpg', altText: 'Instalaciones del Liceo San Juan 3' }
  ];

  features: Feature[] = [
    {
      iconUrl: '/birrete.svg',
      title: 'Excelencia Académica',
      description: 'Promovemos el aprendizaje continuo con estándares de calidad y dedicación.'
    },
    {
      iconUrl: '/corazon.svg',
      title: 'Formación en Valores',
      description: 'Guiamos a nuestros estudiantes con principios éticos y morales para la vida.'
    },
    {
      iconUrl: '/usuarios.svg',
      title: 'Docentes Comprometidos',
      description: 'Contamos con un equipo docente altamente capacitado y comprometido.'
    },
    {
      iconUrl: '/seguridad.svg',
      title: 'Ambiente Seguro',
      description: 'Ofrecemos espacios seguros y adecuados para el desarrollo integral de nuestros estudiantes.'
    }
  ];

  values: ValueItem[] = [
    {
      title: 'Respeto',
      description: 'Fomentamos la consideración hacia uno mismo, hacia los demás y hacia el entorno.'
    },
    {
      title: 'Responsabilidad',
      description: 'Promovemos el compromiso con los deberes y el asumir las consecuencias de cada acto.'
    },
    {
      title: 'Integridad',
      description: 'Actuamos siempre con honestidad, transparencia, rectitud y coherencia ética.'
    },
    {
      title: 'Excelencia',
      description: 'Buscamos la mejora continua en cada aspecto académico, social y personal.'
    }
  ];

  pillars: EducationalPillar[] = [
    {
      title: 'Enfoque Académico',
      description: 'Metodologías activas enfocadas en el desarrollo de competencias, razonamiento lógico y resolución de problemas reales.'
    },
    {
      title: 'Formación Integral',
      description: 'Complemento con actividades socioemocionales, culturales, artísticas y deportivas para el equilibrio personal.'
    },
    {
      title: 'Uso de Tecnología',
      description: 'Integración continua de herramientas digitales y entornos de aprendizaje adaptados a la era moderna.'
    }
  ];

  contactInfo: ContactInfo = {
    address: 'Bo. Los Dolores, Calle La Fuente, Tegucigalpa, Francisco Morazán.',
    phone: '(504) 8760-2515/ 3211-5442',
    email: 'sanjuanliceo@gmail.com',
    mailtoUrl: 'mailto:sanjuanliceo@gmail.com?Subject=Interesado%20en%20el%20curso'
  };

  socialLinks: SocialLink[] = [
    { platform: 'Facebook', url: 'https://www.facebook.com/liceo.saunjuan', iconUrl: '/Facebook.svg' },
    { platform: 'Instagram', url: 'https://www.instagram.com/liceosanjuanhn/', iconUrl: '/Instagram.svg' },
    { platform: 'WhatsApp', url: 'https://wa.me/message/6V4XPC5X2ECLN1', iconUrl: '/Whatsapp.svg' }
  ];
}