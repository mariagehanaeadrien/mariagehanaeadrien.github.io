import React from 'react';
import "../../App.css"
import map from '../../DordogneFRANCE.png';
import './CustumPage.css';
import map2 from '../../essendierasdomaine.jpg';


export default function Itineraires() {
  return (

    <div className='CustumPage-container'>

    <div className='CustumPage-container-title'>
      <h1>Localisation & Itinéraires </h1>




      </div>


      <h2>Localisation </h2>

       <img src={map2} class="center"/>

      <h3> Domaine d’Essendiéras (<a href="https://www.essendieras.fr/le-domaine-d-essendieras-dordogne/">Lien vers le site du domaine</a>)</h3>








             <address>
             <div>
             </div>
             <div>
             Lieu-dit Essendiéras<br />
             24160 Saint Médard d’Excideuil<br />
             Dordogne FRANCE<br />
             <br />
               Coordonnées GPS<br />
               1 05′ 28′′ est<br />
               45 21′ 19′′ nord<br />
             </div>

             </address>

             <h3>Mairie de Saint Médard d’Excideuil </h3>

             <address>
             <div>
             </div>
             <div>
             Mairie ‘Le Chadeau’<br />
             24160 Saint Médard d’Excideuil<br />
             Dordogne FRANCE<br />
             </div>
             </address>










      <h2> Itinéraires </h2>




      <p>L’endroit étant très isolé, nous vous conseillons vivement de venir en voiture ou alors de prendre le train puis de louer une voiture en gare de Limoges par exemple.<br />

<div>
<p> </p>
</div>
<a href="https://www.essendieras.fr/localisation-et-acces/">Indications d'accès renseignées par le domaine</a> </p>


<img src={map} class="center"/>

      <h2> Covoiturage </h2>

<p>

Pour faciliter l'organisation des déplacements, voici un lien que vous pouvez utiliser pour organiser les covoiturages : <a href="https://docs.google.com/spreadsheets/d/1jGW2Wd2qDlaTit4609CvzCFPG5FuNA2o0E2Xi26puUA/edit?usp=sharing"> [LIEN] </a>. On vous recommande plutôt de venir en voiture, la région étant quand même mal desservie en train.
</p>


<div>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
</div>


    </div>
)

}
