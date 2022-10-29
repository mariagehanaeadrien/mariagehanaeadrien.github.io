import React from 'react';
import "../../App.css"
import map from '../../DordogneFRANCE.png';
import './CustumPage.css';
import map2 from '../../essendierasdomaine.jpg';


export default function Hebergements() {
  return (

    <div className='CustumPage-container'>

    <div className='CustumPage-container-title'>
      <h1>Hébergements </h1>

      </div>



  <h2> Au domaine </h2>

  <p> Le domaine offre divers types de logements : chambres au château, hôtel-appartements,
emplacements de camping, gîtes pour le weekend, etc. Nous avons réalisé le tableau ci-dessous
pour résumer leur offre. </p>

<p>  <a href="Resources/HebergementsAuDomaine.pdf">HebergementsAuDomaine.pdf</a> </p>

<embed src="Resources/HebergementsAuDomaine.pdf"/>

<p> Vous pouvez voir des photos des logements sur le site du domaine <a href="https://www.essendieras.fr/hebergements/"> Page internet </a> </p>

<h3> Remarque importante </h3>
  <p> Le domaine bloque ses logements pour les invités du mariage jusqu’à fin 2022. Par la suite, les réservations
seront ouvertes au public.  </p>
<p>Vous ne pouvez donc pas réserver par leur site internet, seulement par mail ou téléphone.</p>
<p> Un acompte de 50% est demandé à la réservation et le solde 6 semaines avant le jour J. </p>
<p> Responsable : Helena Bakker </p>
<p> Téléphone : +33 (0)5 53 55 34 34</p>
<p>Courrier électronique :   <a href="mailto:helena@essendieras.fr"> helena@essendieras.fr </a>  </p>






  <h2> A proximité du domaine </h2>



  <p> Nous avons réalisé une liste indicative avec plusieurs options de logement (hôtels, auberge, chambres d’hôtes, AirBnB) dans les communes avoisinantes. C’est la campagne : vous ne trouverez pas de Uber à la demande. Il vous faudra donc soit désigner un Sam soit réserver un taxi en avance. </p>

<p>  <a href="Resources/HebergementsHorsDomaine.pdf">HebergementsHorsDomaine.pdf</a>  </p>

<embed src="Resources/HebergementsHorsDomaine.pdf"  />


<div>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
</div>


    </div>
)

}
