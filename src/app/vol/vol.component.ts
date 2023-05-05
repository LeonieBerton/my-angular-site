import { Component } from '@angular/core';
import { collection, query, where,getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

@Component({
  selector: 'app-vol',
  template: `
    <section class="hero is-primary is bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Ajouter un vol</h1>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <label class="label">Steward</label>
        <div class="select is-rounded">
          <select (ngModelChange)="onChangeSteward($event)" [ngModel] = "selectedSteward">
            <option *ngFor="let nom of noms" [ngValue]="nom.data().nomPrenom">{{nom.data().nomPrenom }}</option>
          </select>
        </div>
      </div>

      <label class="label">Numero de vol</label>
      <input class="input is-rounded" type="text" 
          name="numero_vol"
          class="input"
          [(ngModel)]="numero_vol"
          #numInput="ngModel" required placeholder="Rounded input">
      <div class="help is-error" *ngIf="numInput.invalid">
        Numero de vol requis
      </div>

      <label class="label">Nombre de passagers</label>
      <input class="input is-rounded" type="text" 
          name="nb_pass"
          class="input"
          [(ngModel)]="nb_pass"
          #nbInput="ngModel" required placeholder="Rounded input">
      <div class="help is-error" *ngIf="nbInput.invalid">
        Nombre de passagers requis
      </div>

      <div class="columns is-mobile">
        <div class="column is-half">
          <label class="label">Ville de départ</label>
          <div class="select is-rounded">
            <select [(ngModel)]="select">
              <option *ngFor="let ville of villes" [ngValue]="ville">{{ville.data().Ville }}</option>
            </select>
          </div>
        </div>
        <div class="column is-half">
          <label class="label">Ville de d'arrivée</label>
          <div class="select is-rounded">
            <select [(ngModel)]="select">
              <option *ngFor="let ville of villes" [ngValue]="ville">{{ville.data().Ville }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-mobile">
          <div class="column">
            <label class="label">Année</label>
            <div class="select is-rounded">
              <select>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          <div class="column">
            <label class="label">Mois</label>
            <div class="select is-rounded">
              <select>
                <option value=01>Janvier</option>
                <option value=02>Février</option>
                <option value=03>Mars</option>
                <option value=04>Avril</option>
                <option value=05>Mai</option>
                <option value=06>Juin</option>
                <option value=07>Juillet</option>
                <option value=08>Aout</option>
                <option value=09>Septembre</option>
                <option value=10>Octobre</option>
                <option value=11>Novembre</option>
                <option value=12>Décembre</option>
              </select>
            </div>
          </div>

          <div class="column">
            <label class="label">Jour</label>
            <div class="select is-rounded">
              <select>
                <option value=01>01</option>
                <option value=02>02</option>
                <option value=03>03</option>
                <option value=04>04</option>
                <option value=05>05</option>
                <option value=06>06</option>
                <option value=07>07</option>
                <option value=08>08</option>
                <option value=09>09</option>
                <option value=10>10</option>
                <option value=11>11</option>
                <option value=12>12</option>
                <option value=13>13</option>
                <option value=14>14</option>
                <option value=15>15</option>
                <option value=16>16</option>
                <option value=17>17</option>
                <option value=18>18</option>
                <option value=19>19</option>
                <option value=20>20</option>
                <option value=21>21</option>
                <option value=22>22</option>
                <option value=23>23</option>
                <option value=24>24</option>
                <option value=25>25</option>
                <option value=26>26</option>
                <option value=27>27</option>
                <option value=28>28</option>
                <option value=29>29</option>
                <option value=30>30</option>
                <option value=31>31</option>
              </select>
            </div>
          </div>
          <div class="column">
            <label class="label">Jour de la semaine </label>
            <div class="select is-rounded">
              <select>
                <option value="Lundi">Lundi</option>
                <option value="Mardi">Mardi</option>
                <option value="Mercredi">Mercredi</option>
                <option value="Jeudi">Jeudi</option>
                <option value="Vendredi">Vendredi</option>
                <option value="Samedi">Samedi</option>
                <option value="Dimanche">Dimanche</option>
              </select>
            </div>
          </div>
        </div>


        <div class="columns is-mobile">
          <div class="column">
            <label class="label">Heure de départ</label>
            <input class="input is-rounded" type="text" 
              name="heure_depart"
              class="input"
              [(ngModel)]="heure_depart"
              #nomInput="ngModel"placeholder="Rounded input">

          </div>
          <div class="column">
            <label class="label">Heure d'arrivée</label>
            <input class="input is-rounded" type="text" 
                name="heure_arrivee"
                class="input"
                [(ngModel)]="heure_arrivee"
                #nomInput="ngModel"placeholder="Rounded input">
          </div>
        </div>


        <div class="columns is-mobile">
          <div class="column">
            <label class="label">Météo au départ</label>
            <div class="control">
              <label class="radio">
                <input type="radio" name="meteo1" value="soleil">
                Soleil☀️
              </label>
              <label class="radio">
                <input type="radio" name="meteo1" value="pluie">
                Pluie 🌧️
              </label>
              <label class="radio">
                <input type="radio" name="meteo1" value="nzigz">
                Neige ❄️
              </label>
              <label class="radio">
                <input type="radio" name="meteo1" value="nzigz">
                Nuage ☁️
              </label>
            </div>
          </div>

          <div class="column">
            <label class="label">Météo à l'arrivée</label>
            <div class="control">
              <label class="radio">
                <input type="radio" name="meteo2" value="soleil">
                Soleil☀️ 
              </label>
              <label class="radio">
                <input type="radio" name="meteo2" value="pluie">
                Pluie 🌧️ 
              </label>
              <label class="radio">
                <input type="radio" name="meteo2" value="neige">
                Neige  ❄️ 
              </label>
              <label class="radio">
                <input type="radio" name="meteo2" value="nzigz">
                Nuage ☁️
              </label>
            </div>
          </div>
        </div>

        <label class="label">Note</label>
        <input class="input is-rounded" type="text" 
          name="note"
          class="input"
          [(ngModel)]="note"
          #ntInput="ngModel" required placeholder="Rounded input">
        <div class="help is-error" *ngIf="ntInput.invalid">
        Note requise
      </div>
      
      </div>

      <div>
        <button 
          (click)="register()"
          class="button is-primary is-rounded"
          [disabled]="false">
            Enregistrer
        </button>
        <button 
          class="button is-primary is-rounded">
            Annuler
        </button>
      </div>
    </section>
  `,
  styles: [
  ]
})






export class VolComponent {

  select:any;
  numero_vol!:number;
  nb_pass!:number;
  pays!:string;
  ville!:string;
  heure_depart!:string;
  heure_arrivee!:string;
  note!:string;
  villes: any;
  noms!: any;
  selectedSteward:string = "";



  constructor() {
   

    const init = async  () => {
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

      const q = query(collection(db, "Ville"), where("Pays", "!=", "Null"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
		
		if (!querySnapshot.empty) {
        console.log("Document data:");
        this.villes=querySnapshot.docs;

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    const qu = query(collection(db, "Personne"), where("nomPrenom", "!=", "Null"));

    const queryS = await getDocs(qu);
    queryS.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
		
		if (!queryS.empty) {
        console.log("Document data:");
        this.noms=queryS.docs;

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
     
    }
    init();

  }
  ngOnInit(){}



  async envoieBDD (numero_vol:number, steward:string, nb_pass:number, note:string){
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
    const coll = collection(db, 'FluAirLine')
    const res = await addDoc(coll, {
      id: steward + " " + numero_vol,
      nomPrenom : steward,
      numeroDuVol : numero_vol,
      nombreDePassagers : nb_pass,
      note : note
    });
    const message=`Le vol ${numero_vol} a été ajouté`;
    alert(message);
  }


  register(){
    console.log('selected steward données : ' + this.selectedSteward);
    console.log('num vol données : ' + this.numero_vol);
    if (this.selectedSteward != null && this.numero_vol != null && this.note != null && this.nb_pass != null){
      this.envoieBDD(this.numero_vol, this.selectedSteward, this.nb_pass, this.note);
    }else {
      alert("Le numéro de vol, le steward, le nombre de passagers et/ou la note n'est pas sélectionné");
    }
  }



  onChangeSteward(test : string){
    this.selectedSteward = test;
  }
}