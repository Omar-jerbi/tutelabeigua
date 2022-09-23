import React, { useLayoutEffect } from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import PersonCard from '../Components/Cards/PersonCard'
import banner from '../Img/parco-beigua-671551.jpg'
import vian from '../Img/andrea_vian.jpg'
import barla from '../Img/annalisa_barla.jpg'
import musio from '../Img/ms_musio.jpg'
import giam from '../Img/g_giampedrone.jpg'

import './styles/Tutela.css'

function Tutela() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <div className="tutela">
      <PageBanner image={banner} pagetitle={"L'evento"}></PageBanner>

      <div className="container">
        <div className="pres-tb row">
          <div className="col s12 m6 l6"><h4>Cos’è <br /> TUTELABEIGUA?</h4></div>
          <div className="col s12 m6 l6"><p className="flow-text">TUTELABEIGUA è un evento eterogeneo che coinvolge tante personalità e tantissime discipline differenti col desiderio di collaborare con un unico fine, la tutela della nostra salute e dell’ambiente.</p></div>
        </div>
      </div>


      <div className="programma">

        <div className="row banner-evento">
          <div className="col s10 l8 m8 offset-l2 offset-s1 offsetm2 pub-evento">
            <h5 style={{ fontWeight: 600 }} >TUTELABEIGUA</h5>
            <h1 style={{ fontWeight: 600 }} >-3 Giorni</h1>
            <h3 style={{ fontWeight: 300 }}>all'inizio dell'evento!</h3>
            <h5 style={{ fontWeight: 700, marginTop: '40px' }}>scopri il programma</h5>
          </div>
        </div>

        <div className="container orari">
          <div className="row">
            <div className="col s12 m12 l12 center"><h2>LunedÌ</h2></div>
            <div className="col s12 m12 l4">
              <h5>GG/mm</h5>
              <h3>Mattina</h3>
              <p className='flow-text'>L’evento avrà luogo presso l’aula San Salvatore del DAD, in Piazza Sarzano, Genova. Dopo il caffè di benvenuto verranno esposti parte dei lavori degli studenti, con un intervento finale dei professori Andrea Vian e Massimo Sale Musio.</p>
            </div>
            <div className="col s12 m12 l4">
              <h5>GG/mm</h5>
              <h3>Pomeriggio</h3>
              <p className='flow-text'>Dopo la pausa pranzo termineremo le presentazioni dei progetti degli studenti. Alle h 16 coffee break e a seguire una tavola rotonda sulle possibili azioni della politica ligure.</p>
            </div>
            <div className="col s12 m12 l4">
              <h5>GG/mm</h5>
              <h3>Sera</h3>
              <p className='flow-text'>Fine lavori alle ore 18, con discorso conclusivo dell’assessore Giacomo Raul Giampedrone. Seguirà aperitivo e proiezione dei video realizzati da alcuni studenti.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container ospiti">
        <h3 style={{ fontWeight: 600 }}>I nostri ospiti</h3>
        <div className="row">
          <div className="col s6 m6 l3">
            <PersonCard cognome={'Vian'} nome={'Andrea'} image={vian} testo={'Professore e ricercatore dell’Università degli Studi di Genova. Si occupa di Design di vite future e di informatica.'}></PersonCard>
          </div>
          <div className="col s6 m6 l3">
            <PersonCard cognome={'Barla'} nome={'Annalisa'} image={barla} testo={'Professoressa associata dell’Università degli Studi di Genova, presso il DAD tiene il corso di Information Design.'}></PersonCard>
          </div>

          <div className="col s6 m6 l3">
            <PersonCard cognome={'Sale'} nome={'Massimo Musio'} image={musio} testo={'Massimo Musio-Sale è professore ordinario) al dipartimento Architettura e Design (dAD), Scuola Politecnica dell’Università degli Studi di Genova e componente del Collegio Docenti del Corso di DOTTORATO in SCIENZE e TECNOLOGIE del MARE.'}></PersonCard>
          </div>

          <div className="col s6 m6 l3">
            <PersonCard cognome={'Giampiedrone'} nome={'Giacomo'} image={giam} testo={'Assessore ai Lavori pubblici, Infrastrutture e Viabilità, Ciclo delle Acque e dei Rifiuti, Difesa del Suolo, Ambiente e Tutela del territorio, Ecosistema costiero, Antincendio Boschivo, Protezione civile, Emergenze, Partecipazioni Regionali della Regione Liguria.'}></PersonCard>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Tutela