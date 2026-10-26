import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { HERO_SLIDES } from '../../data/portfolio.data';

interface Palabra { letras: string[]; inicio: number; }

/** Segundos que se muestra cada web en la laptop y el celular. */
const SEGUNDOS_POR_SLIDE = 4;

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly texto = 'Hola, soy Briyit Melany Capcha Martinez';
  readonly slides = HERO_SLIDES;

  /** Cada palabra se parte en letras para que el salto de línea sea idéntico mientras se "escribe". */
  readonly palabras: Palabra[] = (() => {
    let inicio = 0;
    return this.texto.split(' ').map(p => {
      const w = { letras: [...p], inicio };
      inicio += p.length;
      return w;
    });
  })();

  readonly escritas = signal(0);   // letras visibles
  readonly listo = signal(false);  // terminó de escribir
  readonly actual = signal(0);     // captura visible en laptop y celular
  readonly encima = signal(false); // el cursor está sobre la laptop / el celular: el carrusel espera
  private timer?: ReturnType<typeof setTimeout>;
  private carrusel?: ReturnType<typeof setInterval>;

  ngOnInit() {
    const total = this.palabras.reduce((n, p) => n + p.letras.length, 0);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.escritas.set(total); this.listo.set(true); return;   // sin animaciones: se queda la primera captura
    }
    const escribir = () => {
      this.escritas.update(n => n + 1);
      if (this.escritas() < total) {
        this.timer = setTimeout(escribir, 55 + Math.random() * 45); // ritmo humano
      } else {
        this.timer = setTimeout(() => this.listo.set(true), 450);
      }
    };
    this.timer = setTimeout(escribir, 600);

    // Cambia de web cada cierto tiempo. No avanza si la pestaña está oculta
    // o mientras el cursor está encima de los dispositivos.
    this.carrusel = setInterval(() => {
      if (document.hidden || this.encima()) return;
      this.actual.update(i => (i + 1) % this.slides.length);
    }, SEGUNDOS_POR_SLIDE * 1000);
  }

  /** Solo el ratón pausa (en pantallas táctiles «pointerenter» se queda pegado tras un toque). */
  cursor(ev: PointerEvent, dentro: boolean) {
    if (ev.pointerType === 'mouse') this.encima.set(dentro);
  }

  ngOnDestroy() { clearTimeout(this.timer); clearInterval(this.carrusel); }
}
