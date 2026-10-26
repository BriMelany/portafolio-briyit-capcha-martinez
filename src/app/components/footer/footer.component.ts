import { Component } from '@angular/core';
import { NAV, PERFIL } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  nav = NAV;
  perfil = PERFIL;
  anio = new Date().getFullYear();
}
