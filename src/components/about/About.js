import React from 'react'
import Fade from 'react-reveal/Fade';
import './About.scss'
export default function About() {
  return (
    <section className="about-heading" id="about">
      <h3 className="left-heading">O MNIE</h3>
        <div className="about-content"> 
            <div className="greeting-container">
              <Fade left>
                  <h2 className="greeting">Hej, jestem Maciej.</h2>
              </Fade>
            </div>
            <div className="greeting-container">
              <Fade right>
                  <h2 className="greeting right">Junior Frontend Developer.</h2>
              </Fade>
            </div>
        </div>
          <h3 className="about-desc">Tworzę strony internetowe. Z ciekawości i dla satysfakcji.</h3>

          <p className="about-details">Podczas budowania stron kieruję się podstawowymi zagadnieniami takimi jak przejrzysty i intuicyjny interfejs oraz odpowiednie dostosowanie wyświetlanej zawartości do wszystkich typów urządzeń. Stawiam także na nietypowy, przykuwający uwagę design tworzonych przeze mnie aplikacji. <br/>
          Główne technologie używane przeze mnie to React, HTML i CSS, jednak z zaciekawieniem poszukuję nowych technologii. Jedną z nich jest biblioteka Three.js, która w połączeniu ze znajomością programów graficznych daje mi możliwość przelewania fantazji do świata trójwymiarowego, dostępnego dla każdego i w każdej przeglądarce. 
          </p>
    </section>
  );
}