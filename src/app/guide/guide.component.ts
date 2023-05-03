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
          Ce site.... C'est quoi ?
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
            -> Cliquez sur "Enregistrer un nouveau vol"
          </ul>
          <ul>
            -> Remplissez toutes les informations demandées et cliquez sur
            envoyer
          </ul>
          <div class="important">
            Attention ! Pour les nombres à virgules remplacez celle-ci par un
            point !
          </div>
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          J'ai remarqué une erreur / je me suis trompé en enregistrant
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div class="body-container">
          <div>
            Vous connaissez le nom du steward et le numéro de vol inscrit ?
          </div>
          <div>Dans ce cas aucun souci !</div>
          <ul>
            -> Allez dans le menu déroulant principal
          </ul>
          <ul>
            -> Cliquez sur "Modifier un enregistrement"
          </ul>
          <ul>
            -> Selectionnez le vol et le steward correspondant
          </ul>
          <ul>
            -> Remplissez les champs demandés et cliquez sur envoyer
          </ul>
          <div>Sinon, cette erreur n'est pas corrigeable désolé</div>
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Comment enregistrer un nouveau collaborateur ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div class="body-container">
          <ul>
            -> Allez dans le menu déroulant principal
          </ul>
          <ul>
            -> Cliquez sur "Enregistrer un nouveau vol"
          </ul>
          <ul>
            Puis remplissez toutes les informations demandées
          </ul>
        </div>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Les grapiques proposés ne me conviennent pas. Est-il possible de les
          modifier ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        <div>En fonction des graphiques, il est possible de les modifier.</div>
        <div>
          Certains graphiques possèdent un menu déroulant en haut à droite :
          tentez de sélectionner différentes valeur et vous verrez le graphique
          changer.
        </div>
        <div>Vous avez 6 types de graphiques qui vous sont proposés :</div>
        <li>spline : une courbe arrondie</li>
        <li>line : une courbe simple</li>
        <li>scatter : des points</li>
        <li>column : un graphique en colonne</li>
        <li>bar : un graphique en colonne</li>
        <li>area : un graphique avec des zones</li>
      </igx-expansion-panel-body>
    </igx-expansion-panel>
    <igx-expansion-panel>
      <igx-expansion-panel-header>
        <igx-expansion-panel-title class="titre">
          Les données sont elles réelles ?
        </igx-expansion-panel-title>
      </igx-expansion-panel-header>
      <igx-expansion-panel-body>
        Cela dépend des graphiques
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
