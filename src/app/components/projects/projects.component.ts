import { Component, ElementRef, HostListener, OnDestroy, ViewChild, computed, signal } from '@angular/core';
import { FILTROS, FiltroId, PROYECTOS, Project } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnDestroy {
  readonly vistaCompleta = signal<string | null>(null);   // título de la tarjeta que se está recorriendo (solo una a la vez)

  alternarVista(p: Project) { this.vistaCompleta.update(t => (t === p.titulo ? null : p.titulo)); }

  readonly filtros = FILTROS;
  readonly filtro = signal<FiltroId>('todos');

  /** Proyectos que cumplen el filtro activo. */
  readonly visibles = computed(() => {
    const f = this.filtro();
    return f === 'todos' ? PROYECTOS : PROYECTOS.filter(p => p.categorias.includes(f));
  });

  contar(id: FiltroId) {
    return id === 'todos' ? PROYECTOS.length : PROYECTOS.filter(p => p.categorias.includes(id)).length;
  }

  filtrar(id: FiltroId) { this.filtro.set(id); this.vistaCompleta.set(null); }

  readonly activo = signal<Project | null>(null);   // proyecto abierto en el pop up

  @ViewChild('cerrarBtn') private cerrarBtn?: ElementRef<HTMLButtonElement>;
  private disparador: HTMLElement | null = null;     // para devolver el foco al cerrar

  abrir(p: Project, ev: Event) {
    this.disparador = ev.currentTarget as HTMLElement;
    this.activo.set(p);
    document.body.style.overflow = 'hidden';
    setTimeout(() => this.cerrarBtn?.nativeElement.focus());
  }

  @HostListener('document:keydown.escape')
  cerrar() {
    if (!this.activo()) return;
    this.activo.set(null);
    document.body.style.overflow = '';
    this.disparador?.focus();
  }

  /** Mantiene el foco dentro del pop up mientras está abierto. */
  atrapar(ev: KeyboardEvent) {
    if (ev.key !== 'Tab') return;
    const panel = ev.currentTarget as HTMLElement;
    const items = panel.querySelectorAll<HTMLElement>('button, a[href]');
    const primero = items[0], ultimo = items[items.length - 1];
    if (ev.shiftKey && document.activeElement === primero) { ev.preventDefault(); ultimo.focus(); }
    else if (!ev.shiftKey && document.activeElement === ultimo) { ev.preventDefault(); primero.focus(); }
  }

  ngOnDestroy() { document.body.style.overflow = ''; }
}
