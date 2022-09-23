import React, { useLayoutEffect } from 'react'
import ContentCard from '../Components/Cards/ContentCard'
import PageBanner from '../Components/PageBanner/PageBanner'
import ParagrafoHome from '../Components/ParagrafoHome/ParagrafoHome'
import img from '../Img/img1.jpg'
import lmp from '../Img/lmp.png'
import tb from '../Img/tb.png'
import card77 from '../Img/77card.jpg'


import './styles/Home.css'

function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })



  return (
    <div className="home">
      <PageBanner pagetitle='Tuteliamo il Beigua' image={img}></PageBanner>

      <div className="container">
        <div className="pres flow-text">
          <p className='flow-text'>
            Ti diamo il benvenuto su tutelabeigua. Abbiamo raccolto i progetti degli studenti dell'universita di Genova
            inerenti alla divulgazione sui pericoli ai quali e sottoposto parco del Beigua causati dalla concreta minaccia dell'amianto.
          </p>
        </div>

        <div className="paragrafi">
          <div className="paragrafi-desk">
            <ParagrafoHome
              title='Il Parco del Beigua'
              text1="Qui trovarai un insieme di progetti della classe di web design del dipartimento di architettura in collaborazione con gli sviluppatori del dipartimento di informatica dell'universita'di Genova."
              text2="Tutti i progetti si articoleranno seguendo lo stesso filo conduttore: La messa al bando del progetto di allestimento di una miniera di amianto nell'attuale parco del Beigua.">
            </ParagrafoHome>
            <ParagrafoHome
              title='La tua salute'
              text1="L’inalazione di Amianto e il conseguente abbattimento di foreste per garantire alle estrazioni un migliore spazio di lavorazione risulta tossico e dannoso per la nostra salute."
              text2="I maggiori problemi sono legati all’apparato respiratorio e conducendo cosi alle gravose dipendenze di un tumore polmonare.L’abbattimento degli Alberi del Parco del Beigua contribuirebbe ad abbassare la qualità dell’aria respirata.">
            </ParagrafoHome>
            <ParagrafoHome
              title="L'ambiente"
              text1="Un territorio il cui patrimonio geologico è tutelato dall'UNESCO. Con questo prestigioso riconoscimento si presenta il comprensorio del Beigua, la più vasta area naturale protetta della Liguria - che coinvolge i comuni di Arenzano, Campo"
              text2="Ligure, Cogoleto, Genova, Masone, Rossiglione, Sassello, Stella, Tiglieto e Varazze riconosciuto come sito UNESCO nell'ambito della prestigiosa lista dei Geoparchi mondiali (UNESCO Global Geoparks).">
            </ParagrafoHome>
          </div>
        </div>

        <div className="cards">
          <div className="row">
            <div className="col s12 m12 l4">
              <ContentCard image={lmp} tit='Scopri i progetti di tutela del Beigua' titlink='i progetti' link='/projs'></ContentCard>
            </div>
            <div className="col s12 m12 l4">
              <ContentCard image={tb} tit='Cosa sai di TUTELABEIGUA?' link='/tutela' titlink='tutelabeigua' ></ContentCard>
            </div>
            <div className="col s12 m12 l4">
              <ContentCard image={card77} tit='Scopri di più sul Gruppo77' link='/about' titlink='about us'></ContentCard>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home