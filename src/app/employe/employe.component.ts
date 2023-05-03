import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employe',
  template: `
   <section class="hero is-primary is bold">
  <div class="hero-body">
  <div class="container">
    <h1 class="title">Ajouter un steward</h1>

  </div>
</div>
   </section>
   <section class="section">
    <div class="container">

    <form name="employeForm" (ngSubmit)="submitForm(employeForm)" #employeForm="ngForm">
      <div class="field">
        <label class="label">Prénom</label>
        <input 
          type="text" 
          name="prenom" 
          class="input" 
          [(ngModel)]="prenom" 
          #prenomInput="ngModel"
          required>
        <div class="help is-error" *ngIf="prenomInput.invalid">
          Prenom requis
        </div>
      </div>

      <div class="field">
        <label class="label">Nom</label>
        <input 
          type="text"
          name="name"
          class="input"
          [(ngModel)]="nom"
          #nomInput="ngModel"
          required>
        <div class="help is-error" *ngIf="nomInput.invalid">
          Nom requis
        </div>
      </div>

      <button 
      type="submit" 
      class="button is-large is-warning"
      [disabled]="employeForm.invalid">
        Ajouter
    </button>
    </form>
    </div>
   </section>
  `,
  styles: [
  ]
})
export class EmployeComponent implements OnInit{
  nom!: string;
  prenom!: string;

  constructor(){ }
  ngOnInit(){}

  submitForm(employeForm:NgForm){
    const message=`L'employé ${this.prenom} ${this.nom} a été ajouté`;
    alert(message);
    employeForm.reset();
  }
  
}
