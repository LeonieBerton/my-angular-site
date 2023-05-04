import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { getFirestore, getCountFromServer } from "firebase/firestore";
import { doc, getDoc,collection, setDoc,query, where,getDocs, addDoc } from "firebase/firestore";

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

  constructor(){}
  ngOnInit(){}

  async envoieBDD (prenom:string, nom:string){
    const firebaseConfig = {
      apiKey: "AIzaSyCAcK11zkfA_nD1VS0P-asIcbGXEbaIRcE",
      authDomain: "fluairline.firebaseapp.com",
      databaseURL: "https://fluairline-default-rtdb.firebaseio.com",
      projectId: "fluairline",
      storageBucket: "fluairline.appspot.com",
      messagingSenderId: "303672598384",
      appId: "1:303672598384:web:e7ba6f07482ac6496cb9b5",
      measurementId: "G-CX9QSLS9X2"
    };
    const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const name = prenom + " " + nom;
      console.log(name);
      const coll = collection(db, 'Personne')
      if (nom != null){
        const res = await addDoc(coll, {name : name});
        console.log('hello');
      }
      else{alert("Le nom est vide")}
  }
  

  submitForm(employeForm:NgForm){
    this.envoieBDD(this.prenom, this.nom);
    const message=`L'employé ${this.prenom} ${this.nom} a été ajouté`;
    alert(message);
    employeForm.reset();
    
  }
}