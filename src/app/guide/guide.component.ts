import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  template: `
  <section class="hero is-primary is bold">
  <div class="hero-body">
  <div class="container">
    <h1 class="title">Guide utilisateur</h1>

  </div>
</div>
   </section>
  <igx-switch [(ngModel)]="singleBranchExpand"
  >Un seul texte déplié à la fois</igx-switch>
  
  <article class="sample-wrapper">
  <igx-accordion #accordion [singleBranchExpand]="singleBranchExpand">
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Ce site... C'est quoi ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div>Il s'agit du rapport de notre compagnie : FluAirLine.</div>
        <div>
          En temps que manager vous êtes en charge de veiller au bien être de
          vos collaborateurs. Dans ce sens, sur chaque vol, les collaborateurs
          sont évalués par tous les passagers.
        </div>
        <div>
          Pour cela, ce site est mis à votre disposition : il retrace chaque
          vol.
        </div>
        <p class="important">Pensez bien à tous les enregistrer !</p>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Comment enregistrer un vol ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div class="body-container">
          <ul>
            -> Allez dans le menu déroulant principal
          </ul>
          <ul>
            -> Cliquez sur "Ajouter un vol"
          </ul>
          <ul>
            -> Remplissez toutes les informations demandées et cliquez sur
            envoyer
          </ul>
          <br>
          <div class="important">
            Attention ! Pour les nombres à virgules remplacez celle-ci par un
            point !
          </div>
          <br>
		      <div class="important">
            NB : notez ces données sur une feuille... Le service ne fonctionne pas encore
          </div>
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Comment enregistrer un nouveau steward ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div class="body-container">
          <ul>
            -> Allez dans le menu déroulant principal
          </ul>
          <ul>
            -> Cliquez sur "Ajouter un steward"
          </ul>
          <ul>
            Puis remplissez toutes les informations demandées
          </ul>
        </div>
        <br>
		    <div class="important">
            NB : notez ces données sur une feuille... Le service ne fonctionne pas encore
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
	<igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          A quoi correspondent les graphiques ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div>
          Les graphiques retracent l'évolution de notre compagnie depuis que nous avons commencé à récolter 
          les données dans une optique d'amélioration continue.
        </div>
        <div>
            Les données démarrent donc en janvier 2022
        </div>
        <div>
          Les chiifres tout en haut correspondent :
        </div>
          <ul>
            - au nombre total de vols effectués depuis janvier 2022
          </ul>
          <ul>
            - au nombre total de stewards de notre compagnie
          </ul>
        <div></div> <br>
        <div>
          Dessous vous avez pour le moment 6 graphiques diiférents :
        </div>
          <ul>
            - la répartition des vols jour / nuit
          </ul>
          <ul>
            - le nombre de vol par note par météo
          </ul>
          <ul>
            - le nombre de vol par Steward
          </ul>
          <ul>
            - le nombre moyen de jours de repos par mois
          </ul>
          <ul>
            - le nombre de vol par ville
          </ul>
          <ul>
            - la moyenne des notes par mois
          </ul>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Les données sont elles réelles ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div>
          Cela dépend des graphiques :
        </div>
        <div>
          Les données situées tout en haut proviennent effectivement de la base de données, 
          ainsi que les données qui constituent les graphiques :
        </div>
        <div>
          <ul>
          -
          </ul>
        </div>
        <div>
          Les autres sont des données que l'on a calculé à partir du fichier Excel et mises en brutes dans le code.
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
  </igx-accordion>
</article>
  `,
  styles: [
  ]
})
export class GuideComponent {
    public singleBranchExpand = true
}