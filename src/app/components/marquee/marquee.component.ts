import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.css',
})
export class MarqueeComponent {
  texto = 'Desarrolladora web · Diseñadora UX/UI · WordPress';
  repeticiones = [1, 2, 3, 4, 5, 6];
}
