import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MarqueeComponent } from './components/marquee/marquee.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, MarqueeComponent, AboutComponent,
            SkillsComponent, ProjectsComponent, ContactComponent, FooterComponent],
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-marquee />
      <app-about />
      <app-skills />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
