import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PERFIL } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  perfil = PERFIL;
}
