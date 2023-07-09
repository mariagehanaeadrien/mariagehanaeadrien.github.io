import React from 'react';
import "../../App.css"
import './CustumPage.css';
import bbq_pict from '../../BBQ.jpg';
import brunch_pict from '../../Brunch.jpg';
import dday_pict from '../../DDAY.jpg';



export default function Programme() {
  return (

    <div className='CustumPage-container'>
    <div className='CustumPage-container-title'>
      <h1>Programme </h1>
      </div>
<center>



      <h2>Vendredi 14 juillet 2023 </h2>

      <img src={bbq_pict} class="banner" />

      <h3>19h30 </h3>



      <p>Barbecue de bienvenue</p>

      <p>Cour intérieure des châteaux - Domaine d’Essendiéras</p>

      <h2>Samedi 15 juillet 2023</h2>

      <img src={dday_pict} class="center"/>

      <p>Matinée et début d’après-midi en autonomie.</p>




<h3> 15h30 </h3>

    <p>Cérémonie civile  </p> <p> Mairie de Saint Médard d’Excideuil </p>



<h3>16h30 </h3>

    <p>Cérémonie d’échange de vœux </p> <p>Jardin aux pins parasols près des pagodes - Domaine d’Essendiéras</p>




    <p>À l’issue de la cérémonie, suivez les mariés !</p>
    <p>Une photo générale sera prise juste avant le cocktail.</p>

    <h3>17h30-20h</h3>

    <p>Cocktail</p>
    <p>Terrasse du château neuf XIXe</p>

    <h3>19h00-19h45</h3>

    <p>Photos de groupe</p>
    <p>Jardin du château neuf XIXe</p>

    <h3>20h30-23h30</h3>

    <p>Dîner</p>
    <p>Clubhouse</p>

    <h3>23h30-jusqu'au bout de la nuit !</h3>

    <p>Soirée</p>
    <p>Clubhouse</p>

    <h2>Dimanche 16 juillet 2023</h2>

    <img src={brunch_pict} class="banner" />

    <h3>11h-14h</h3>

    <p>Brunch</p>
    <p>Clubhouse - Domaine d’Essendiéras</p>
</center>

<div>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
<span></span><br/><span></span>
</div>

    </div>
)



}
