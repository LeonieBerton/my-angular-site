import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar is-primary" role="navigation" aria-label="dropdown navigation">
  <a class="navbar-item">
    <img src="assets/img/Logo_2.png"
      width="112" height="28">
  </a>
  <a class="navbar-item" routerLink="/">
  Home
</a>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      Menu
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item"  routerLink="/Vol-Analyse">
      Tableau de bord
      </a>
      <a class="navbar-item" routerLink="/Employe">
      Ajouter un steward 
      </a>
      <a class="navbar-item" routerLink="/Vol">
        Ajouter un vol
      </a>
      <a class="navbar-item" routerLink="/Guide">
        Guide utilisateur
      </a>
    </div>
  </div>
</nav>

  `,
  styles: [
  ]
})
export class HeaderComponent {

}
