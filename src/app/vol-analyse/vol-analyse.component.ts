import { Component  } from '@angular/core';
import * as Highcharts from 'highcharts';
import { doc, getDoc,collection, setDoc,query, where,getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, getCountFromServer } from "firebase/firestore";



@Component({
  selector: 'app-vol-analyse',
  template: `
<h1 class="title has-text-centered">Tableau de bord</h1>

<div class="columns">
    <div class="column">
    <div class='card equal-height'>
        <div class="card-image has-text-centered">
        <figure class="image is-24x24 is-inline-block">
          <img src="assets/img/avion_picto.png">
        </figure>
        </div>
        <div class='card-content has-text-centered'>936 vols enregistrés</div>
        </div>

      <div id="graphStewart"></div>
      <div id="graphNuit"></div>  
      <div id="graphVille"></div>            
    </div>

    <div class="column">
    <div class='card equal-height'>
        <div class="card-image has-text-centered">
        <figure class="image is-24x24 is-inline-block">
          <img src="assets/img/homme_picto.png">
        </figure>
        </div>
        <div class='card-content has-text-centered'>{{nombre}} Steward</div>
        </div>
    <div id="graphMeteo"></div>
    <div id="graphRepos"></div>
    <div id="graphNote"></div>

    </div>
    
</div>

  `,
  styles: [
  ]
})
export class VolAnalyseComponent {
  

  public options_1: any = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
    },
    title: {
        text: 'Répartition des vols jour / nuit'
    },
    tooltip: {
        pointFormat: '{series.name}: {point.percentage:.1f}%'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
      data: [{
            name: 'Jour',
            y: 2796,
            sliced: true
        }, {
            name: 'Nuit',
            y: 1592
        }]
      }]
  }
                       
  public meteo: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Nombre de vol par note par météo'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ["<2", "2-3", "3-4", ">4"],
      tickmarkPlacement: 'on',
      title: {
          text: 'Note'
      }
  },
    series: [{
      name: 'soleil',
      data: [241,281,244,279],
      color : 'yellow'
    }, {
      name: 'pluie',
      data: [241,242,245,286]
    }, {
      name: 'nuage',
      data: [285,289,302,297],
      color : 'grey'
    }, {
      name: 'neige',
      data: [295,246,275,340],
      color : 'purple'
    }]
  }
  
  public stewart: any = {
    chart: {
      type: 'bar'
    },
    title: {
      text: "Nombre de vol par Steward"
    },
    xAxis: {
      categories:[],
      //["Emmanuel Guillon", "Maryse Lopez", "Alfred Chevallier-Duval", "Honore de Lombard", "Alex Torres", "Laurence Fernandez", "Dorothee de la Gomez", "Josephine Renard", "Olivie Vaillant de Baron", "Luc Carre", "Stephane Blanc", "Alexandre Blot", "Christelle Michel-Perez", "Dominique du Pires", "Claude Lebrun", "Roland Fernandez"],
      
      title: {
        text: "steward"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Vol',
      data: [270, 286, 290, 275, 262, 260, 259, 294, 271, 277, 280, 268, 284, 275, 264, 273],
      color: ''
    }]
    
  }
  public repos: any = {
    chart: {
      type: 'spline'
    },
    title: {
      text: "Nombre moyen de jours de repos par mois"
    },
    xAxis: {
      categories: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"],
      title: {
        text: "mois"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Repos',
      data: [1.472246066, 1.50763583, 1.525611746, 1.4518, 1.459855072, 1.512045889, 1.490175953],
      color: ''
    }]
  }

  public ville_char: any = {
    chart: {
      type: 'column'
    },
    title: {
      text: "Nombre de vol par ville"
    },
    xAxis: {
      categories:[],
      //["Lisbonne", "Palma", "Bordeaux", "New York", "Quebec", "Londres", "Vancouver", "Paris", "Moscou", "Tokyo", "Stockholm", "Miami", "Rio de Janeiro"],
      title: {
        text: "Ville"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      reversed: false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Vol',
      data: [351, 326, 327, 344, 335, 309, 366, 326, 349, 335, 353, 313, 354],
      color: ''
    }]
  }
  public note: any = {
    Chart: {
      type: 'area',
      height: 700
    },
    title: {
      text: 'Moyenne des notes par mois'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
      tickmarkPlacement: 'on',
      title: {
          text: 'Mois'
      }
  },
    series: [{
      name: '2022',
      data: [3.05, 2.94, 2.94, 3.12, 3.05, 3.09, 2.97, 2.95, 3.02, 2.95, 2.97, 2.97]
    }, {
      name: '2023',
      data: [3.19,2.86,2.95]
    }]
  }
  villes: any;
  noms: any;
  city:any;
  nombre:any;
  test:any;
  jour:any;

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

      const q = query(collection(db, "Personne"), where("id", "!=", "Null"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
      });
		
		if (!querySnapshot.empty) {
        /*console.log("Document data:");*/
        this.noms=querySnapshot.docs;
        this.stewart.xAxis.categories=[];
        for (let nom of this.noms) {
          this.stewart.xAxis.categories.push(nom.data().nomPrenom);
        }
        Highcharts.chart('graphStewart', this.stewart);
      
      }
    else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    
    const coll = collection(db, "Personne");
    const quest = query(coll, where("id", "!=", "Null"));
    const snapshot = await getCountFromServer(quest);
    console.log('count: ', snapshot.data().count);
    this.nombre=snapshot.data().count;
      

    const qu = query(collection(db, "Ville"), where("id", "!=", "Null"));

      const queryS = await getDocs(qu);
		
		if (!queryS.empty) {
        /*console.log("Document data:");*/
        this.villes=queryS.docs;
        this.ville_char.xAxis.categories=[];
        for (let ville of this.villes) {
          this.ville_char.xAxis.categories.push(ville.data().Ville);
          console.log(ville.data().Ville)
        }
        Highcharts.chart('graphVille', this.ville_char);
      
      }
    else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }


    /*const collec = collection(db, "FluAirLine");
    const question = query(collec, where("heureDecollage", ">", 8.00),where("heureDecollage", "<", 22.00));
    const snapsh = await getCountFromServer(question);
    this.options_1.series.data.y=Int8Array;
    console.log('count: ', snapsh.data().count);
    this.options_1.series.data.y=snapsh.data().count;
    
    Highcharts.chart('graphNuit', this.options_1);*/
    }
    init();

  }

  ngOnInit() {
    Highcharts.chart('graphStewart', this.stewart);
    Highcharts.chart('graphMeteo', this.meteo);
    Highcharts.chart('graphRepos', this.repos);
    Highcharts.chart('graphNuit', this.options_1);
    Highcharts.chart('graphVille', this.ville_char);
    Highcharts.chart('graphNote', this.note);
  }

}