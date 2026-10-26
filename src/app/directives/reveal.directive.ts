import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

const reduceMotion = () =>
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Animación de entrada al hacer scroll.
 * Uso: <div appReveal> o <div [appReveal]="indice"> (el índice escalona la entrada).
 * Los estilos .reveal / .is-in están en src/styles.css
 */
@Directive({ selector: '[appReveal]', standalone: true, host: { class: 'reveal' } })
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() appReveal: number | string = 0;
  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const e = this.el.nativeElement;
    e.style.setProperty('--d', `${(Number(this.appReveal) || 0) * 110}ms`);
    if (reduceMotion() || !('IntersectionObserver' in window)) { e.classList.add('is-in'); return; }
    this.io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { e.classList.add('is-in'); this.io?.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    this.io.observe(e);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}

/**
 * Marca con .in-view el elemento que está centrado en pantalla.
 * Se usa en móvil/tablet (sin hover) para que las capturas largas se desplacen solas.
 */
@Directive({ selector: '[appInView]', standalone: true })
export class InViewDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver;
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    if (!('IntersectionObserver' in window)) return;
    const e = this.el.nativeElement;
    this.io = new IntersectionObserver(([entry]) => e.classList.toggle('in-view', entry.isIntersecting),
      { threshold: 0.75 });
    this.io.observe(e);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}
