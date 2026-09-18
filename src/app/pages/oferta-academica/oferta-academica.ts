import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oferta-academica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oferta-academica.html',
  styleUrl: './oferta-academica.css'
})

export class OfertaAcademica {

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  collegeName = 'COLEGIO LICEO SAN JUAN';
  tagline = 'Educación, formación y valores para la vida.';
  logoUrl = '/logo.jpeg';
  currentYear = new Date().getFullYear();

  contactInfo = {
    address: 'Bo. Los Dolores, Calle La Fuente, Tegucigalpa, Francisco Morazán.',
    phone: '(504) 8760-2515/ 3211-5442',
    email: 'sanjuanliceo@gmail.com',
    mailtoUrl: 'mailto:sanjuanliceo@gmail.com?Subject=Interesado%20en%20el%20curso'
  };

  socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/liceo.saunjuan',
      iconUrl: '/Facebook.svg'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/liceosanjuanhn/',
      iconUrl: '/Instagram.svg'
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/message/6V4XPC5X2ECLN1',
      iconUrl: '/Whatsapp.svg'
    }
  ];

}
