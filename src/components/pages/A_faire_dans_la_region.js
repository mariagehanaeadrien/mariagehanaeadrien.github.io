import React from 'react';
import "../../App.css"
import './CustumPage.css';
import map from '../../DordogneFRANCE.png';
import map2 from '../../DordogneFRANCE.png';

export default function A_faire_dans_la_region() {
  return (
    <div className='CustumPage-container'>
    <div className='CustumPage-container-title'>
      <h1>  À faire dans la région </h1>
    </div>

    <p> <img src={map} /></p>

<p> Le Périgord, région historique correspondant à peu près au département de la Dordogne (24), est
traditionnellement découpé en 4 couleurs :
</p>
<span></span><br/><span></span>


<p>
- le Périgord Vert pour ses plaines favorables à la culture de céréales et ses forêts verdoyantes
</p>
<p>
- le Périgord Blanc en raison de la couleur de la pierre calcaire abondante dans la vallée de l'Isle
</p>
<p>
- le Périgord Pourpre en référence au vin rouge ainsi qu’à la couleur des vignes à l’automne du vignoble de Bergerac
</p>
<p>
- le Périgord Noir initialement nommé en raison du feuillage des yeuses, de chênes verts très sombres, il est aujourd'hui souvent associé à la truffe de la région de Sarlat
</p>

<p> <img src={map2} /></p>

<h2> Activités dans la région </h2>

<p> - Châteaux : Château de Hautefort (15min en voiture), Pompadour, Ségur le Château... </p>
<p> - Grottes préhistoriques : grottes de Lascaux II, Tourtoirac, Villars... </p>
<p> - Visites culturelles de villes : Sarlat, Périgueux, Brantôme... </p>
<p> - Sport en plein air : accrobranche, canoë, vélo-rail, ski-nautique... </p>
<p> - Randonnée : parc naturel du Périgord-Limousin </p>
<p> - Shopping : magasin d’usine Repetto à Saint Médard d’Excideuil </p>
<p> - Événement : feu d’artifice du 14 juillet à Excideuil </p>

<h2> Le domaine d’Essendiéras </h2>

<p> Le Domaine d’Essendiéras, situé en Périgord Vert se trouve au sommet d’une des plus hautes
collines de la Dordogne, avec une vue magnifique sur la vallée de l’Isle. </p>
<p> Les deux châteaux ont été magnifiquement restaurés par des artisans locaux dans la plus pure
tradition Périgourdine. Le château le plus récent date du XIXème siècle, et ouvre ses portes sur
les jardins et une piscine au panorama exceptionnel. Le “vieux” château quant à lui, date du
XVIème siècle, et révèle ses salons de réception, ses suites nuptiales, son spa, le tout dans un
esprit d’une rare authenticité. </p>
<p> Les terres d’Essendiéras s’étendent sur plus de 300 hectares et offrent une très grande variété
de paysages. Des vues panoramiques aux petits sentiers forestiers feront la joie du
promeneur. </p>

<h2> Activités au domaine </h2>

<p>  - Golf </p>
<p>  - Court de tennis en contre-bas des châteaux </p>
<p>  - Ile de jeux pour les enfants à proximité des étangs </p>
<p>  - Spa avec hammam, jacuzzi, sauna, soins et massages au vieux château </p>
<p>  - Étangs de pêche </p>
<p>  - Balades à poney pour les enfants de moins de 12 ans </p>
<p>  - Terrains de sport : terrain de football, beach-volley et pétanque à proximité des étangs </p>
<p>  - VTT </p>
<p>  - 25km de chemins de randonnée </p>

<div>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
</div>

      </div>)
}
