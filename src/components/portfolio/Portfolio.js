import React from 'react'
import Fade from 'react-reveal/Fade'
import PolonezAutodrive from '../../assets/img/projects/polonez_autodrive.jpg'
import MSKORUS from '../../assets/img/projects/portfolio.jpg'
import construction from '../../assets/img/projects/construction.png'
import Projects from './Project'
import './Portfolio.scss'

const projects = [
  { 
    id: 1, 
    pic: MSKORUS,
    title: 'MSKORUS.PL - moje portfolio',
    description: 'Strona internetowa prezenująca moje portfolio. Wykonana przy pomocy React Three Fiber oraz Blendera. Stworzone w nim modele zostały przekonwertowane przy pomocy GLTFJSX do formatu umożliwiającego proste operowanie elementami sceny.',
    live: 'https://mskorus.pl/',
    git: 'https://github.com/SkorczanFFF/MSKORUS-portfolio'
  },
  { 
    id: 2, 
    pic: PolonezAutodrive,
    title: 'POLONEZ AUTODRIVE', 
    description: 'Prosta animacja w stylu Synthwave/lat 80 podana w formie interaktywnej kolorowanki dzięki wbudowanemu GUI. Modele wraz z animacjami zostały wykonane w 3Ds Max 2019 i wyeksportowane do plików .fbx. Miłego kolorowania! *P.S. Marek Biliński*',
    live: 'http://polonezautodrive.cba.pl/',
    git: 'https://github.com/SkorczanFFF/Polonez-Autodrive'
  },
  { 
    id: 3,
    pic: construction,
    title: 'TO BE ANNOUCED',
    description: 'Coming soon',
    live: '',
    git: '' 
  }
];
export default function Portfolio() {
  return (
    <section className="portfolio-heading" id="portfolio">
      <h3 className="left-heading">PORTFOLIO</h3>
        <div className="portfolio-content">
          <Fade bottom cascade><p className="content-desc">Projekty mojego autorstwa</p></Fade>
            <Projects posts={projects} />
          <Fade top><p className="content-desc">WIĘCEJ WKRÓTCE</p></Fade>
        </div>
    </section>
  );
}
