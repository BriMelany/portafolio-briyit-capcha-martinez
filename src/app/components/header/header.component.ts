import { Component, HostListener, OnInit, signal } from '@angular/core';
import { NAV, PERFIL } from '../../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  nav = NAV;
  perfil = PERFIL;
  abierto = false;

  progreso = signal(0);      // 0..1 de lo que se ha leído de la página
  scrolled = signal(false);  // sombra del header al bajar
  activo = signal('#inicio');

  ngOnInit() { this.onScroll(); }

  @HostListener('window:scroll')
  onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    this.progreso.set(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    this.scrolled.set(window.scrollY > 8);

    // Resalta en el menú la sección visible
    let actual = this.nav[0].href;
    for (const item of this.nav) {
      const el = document.querySelector<HTMLElement>(item.href);
      if (el && el.getBoundingClientRect().top <= 140) actual = item.href;
    }
    if (max > 0 && window.scrollY >= max - 4) actual = this.nav[this.nav.length - 1].href;
    this.activo.set(actual);
  }

  toggle() { this.abierto = !this.abierto; }
  cerrar() { this.abierto = false; }
}
