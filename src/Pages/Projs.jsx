import React, { useLayoutEffect } from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import ContentCard from '../Components/Cards/ContentCard'

import img from '../Img/tramonto.png'
import lab from '../Img/LABORATORIO DI web design.png'
import './styles/projs.css'

import { Projlist } from './ProjList'


function Projs() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <div className="projs">
      <PageBanner pagetitle='I progetti' image={img}></PageBanner>

      <div className="container">
        <div className="pres-proj">
          <p className="flow-text">
            I progetti sono l’insieme delle soluzioni elaborate dagli studenti per visualizzare il problema, muovere le coscienze e argomentare sui rischi che la costruzione della miniera sul Beigua potrebbe comportare.
          </p>
        </div>


        <div className="pres-lab show-on-medium-and-down hide-on-large-only">
          <div className="row">
            <div className="col m12 s12 center">
              <img src={lab} alt="" />
            </div>
            <div className="col m12 s12">
              <p className="flow-text">Il corso di Web Design è stato tenuto dal Prof. Andrea Vian. Sono stati coinvolti gli studenti del Dipartimento di Architettura e Design e di Informatica.</p>
              <p className="flow-text">Il corso si è posto l’obiettivo di realizzare alcuni progetti di intervento sull’attuale questione legata alla presenza dell’amianto sul Parco del Beigua.</p>
            </div>
          </div>
        </div>


        <div className="pres-lab show-on-large hide-on-med-and-down">
          <div className="row valign-wrapper">
            <div className="col l6 center">
              <img src={lab} alt="" />
            </div>
            <div className="col l6">
              <p className="flow-text">Il corso di Web Design è stato tenuto dal Prof. Andrea Vian. Sono stati coinvolti gli studenti del Dipartimento di Architettura e Design e di Informatica.</p>
              <p className="flow-text">Il corso si è posto l’obiettivo di realizzare alcuni progetti di intervento sull’attuale questione legata alla presenza dell’amianto sul Parco del Beigua.</p>
            </div>
          </div>
        </div>

        <h3 style={{ fontWeight: 600 }}>I progetti:</h3>

        <div className="progetti row">
          {
            Projlist.map((v, k) => {
              return (
                <div className="col s12 m6 l4">
                  <ContentCard image={v.image} tit={v.tit} titlink='Tap for more' link={'/proj/' + k.toString()}></ContentCard>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projs