import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SKILLS_FILA_1, SKILLS_FILA_2 } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  fila1 = SKILLS_FILA_1;
  fila2 = SKILLS_FILA_2;
}
