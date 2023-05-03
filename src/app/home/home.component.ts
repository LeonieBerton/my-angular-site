import { Component } from '@angular/core';
import { doc, getDoc,collection, setDoc,query, where,getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




@Component({
  selector: 'app-home',
  template: `
   <section class="hero is-primary is bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <p class="title has-text-link-dark">
      FluAirLine
    </p>
    <p class="subtitle has-text-link-dark">
      Tout ce dont vous avez besoin pour <strong>gérer</strong> vos vols
    </p>
  </div>
  </div>
</section>
  `,
  styles:[`
  .hero{
    background-image: url('/assets/img/avion.jpg');
    background-size:cover;
    background-position: center center;

  }
  `]
})
export class HomeComponent { 
}


