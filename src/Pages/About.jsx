import React, { useLayoutEffect } from 'react'
import PageBanner from '../Components/PageBanner/PageBanner'
import PersonCard from '../Components/Cards/PersonCard'
import imgbanner from '../Img/bannerinfo.jpg'
import img77 from '../Img/Component 11.png'
import './styles/About.css'
import imggabr from '../Img/gabrielem.jpeg'
import imggabriella from '../Img/gabriellab.jpeg'
import imggluca from '../Img/lucag.jpeg'
import imgerik from '../Img/erikr.jpg'
import imgomar from '../Img/omarj.jpg'
import imgglucai from '../Img/lucai.png'
import imggian from '../Img/gianlucan.jpeg'
import SingleFaq from '../Components/SingleFaq/SingleFaq'


function About() {


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })


  


  return (
    <div className="about">

      <PageBanner pagetitle='About Us' image={imgbanner}></PageBanner>

      <div className="container">
        <div className="logo-gruppo">
          <div className="row">
            <div className="col s12 m12 l12">
              <img src={img77} alt="" srcset="" />
            </div>

            <div className="col s12 m12 l12">
              <h2>
                Gruppo 77
              </h2>
            </div>
          </div>
        </div>

        <div className="pres">
          <div className="row">
            <div className="col m6 l6 s12">
              <h2>Chi siamo</h2>
              <p className='flow-text'>Gruppo 77 è un collettivo creativo composto da designers e sviluppatori.</p>
            </div>
            <div className="col m6 l6 s12">
              <h2>Il team</h2>
              <p className='flow-text'>Il team è composto da un insieme di designer e informatici che progettano UI e UX per i siti web.</p>
            </div>

          </div>
        </div>


        <div className="des">
          <h3>Design:</h3>
          <div className="row">
            <div className="col l3 m12 s12">
              <PersonCard image={imggabr} cognome='Moggio' nome={'Gabriele'} testo={'Designer genovese, amo la contaminazione di visioni alternative alle mie... Il mio motto? NEVER GIVE UP!'}></PersonCard>
            </div>
            <div className="col l3 m12 s12">
              <PersonCard image={imggabriella} cognome='Bonetti' nome={'Gabriella'} testo={'Nata tra il Monviso e le Langhe amo viaggiare, le cartoline e le passeggiate. La progettazione, a tutto tondo, è il mio hobby preferito.'}></PersonCard>
            </div>
            <div className="col l3 m12 s12">
              <PersonCard image={imggluca} cognome='Galli' nome={'Luca'} testo={'Designer milanese, improntato al visual design ed all’editoria.'}></PersonCard>
            </div>
          </div>
        </div>

        <div className="dev">
          <h3>Sviluppo:</h3>
          <div className="row">
            <div className="col l3 m12 s12">
              <PersonCard image={imgerik} cognome='Ricci' nome={'Erik'} testo={'Web developer e programmatore Android, C/C++ e Java'}></PersonCard>
            </div>
            <div className="col l3 m12 s12">
              <PersonCard image={imgomar} cognome='Jerbi' nome={'Omar'} email='omarjerbi98@gmail.com' link='https://github.com/Omar-jerbi' testo={'Programmatore con la passione per lo sviluppo full stack di siti web, la messa in funzione di dispositivi IOT e la progettatzione hardware tramite l"interazione con micro-computer e microcontrollori Hardwino a Raspberry'}></PersonCard>
            </div>
            <div className="col l3 m12 s12">
              <PersonCard image={imgglucai} cognome='Insinna' nome={'Luca'} email='luca.insinna00@gmail.com'  link='https://github.com/Luca-Insinna' testo={'Programmatore che si occupa della realizzazione full stack di siti web e assistenza informatica'}></PersonCard>
            </div>
            <div className="col l3 m12 s12">
              <PersonCard image={imggian} cognome='Napolitano' nome={'Gianluca'}  email='gianluca7700@gmail.com' testo={'Programmatore con conoscenze generali ma incentrato nello studio di applicazioni web e sviluppo videoludico'}></PersonCard>
            </div>
          </div>
        </div>
      </div>

      <div className="faq">
        <div className="faq-tit">
          <h3>FAQ</h3>
        </div>

        <div className="faqs row">
          <div className="col s12 m12 l6 xl4">

            <SingleFaq
              titolo='Che cos’è TUTELABEIGUA?'
              testo='TUTELABEIGUA è un evento trans mediale che raccoglie le idee di giovani designer ed informatici a favore i una causa comune: la salvaguardia del Parco del Beigua. La presenza di Amianto e di miniere di titanio ha ingolosito numerosi imprenditori che vorrebbero convertire il parco in una miniera a cielo aperto. Durante il nostro evento si illustreranno le possibili soluzioni progettate dagli studenti dell’Università di Genova.'
            >
            </SingleFaq>
          </div>
          <div className="col s12 m12 l6 xl4">

            <SingleFaq
              titolo='Dove e quando si svolgerà?'
              testo='L`evento si svolgerà alle porte del parco del Beigua in una piana che permette di apprezzarne il paesaggio. Per apprezzare il clima fresco della Valle, l’evento si svolgerà tra settembre e ottobre 2022.'
            >
            </SingleFaq>
          </div>

          <div className="col s12 m12 l6 xl4">

            <SingleFaq
              titolo='Serve un biglietto per partecipare?'
              testo='Non è necessario versare nessun tipo di quota per partecipare all`evento. Per questioni amministrative vi chiediamo la registrazione all’evento su Eventbrite.'
            >
            </SingleFaq>
          </div>

          <div className="col s12 m12 l6 xl4">

            <SingleFaq
              titolo='Come partecipare da relatore?'
              testo='Prepara e invia un piccolo essay con un estratto dei tuoi contenuti alla mail: infobeigua@gmail.com. Verrai ricontattato dal nostro Team!'
            >
            </SingleFaq>
          </div>

          <div className="col s12 m12 l6 xl4">

            <SingleFaq
              titolo='Food and Beverages?'
              testo='Ci saranno dei piccoli truck che provvederanno al cibo e alle bevande.'
            >
            </SingleFaq>
          </div>

          <div className="col s12 m12 l6 xl4">

            <SingleFaq
              titolo='Quanto dureranno i singoli interventi?'
              testo='Questo varierà da relatore a relatore, ma puoi aspettarti che la maggioranza degli interventi spazieranno da 30 a 60 minuti.'
            >
            </SingleFaq>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About