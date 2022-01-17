import React from 'react';
import { BiEnvelopeOpen } from 'react-icons/bi';
import './Contact.scss';

export default function Contact() {

  return (
    <section className="container-contact">
      <div className="arrow-down" />
        <div class="section-heading">
          <h3 className="left-heading blue">KONTAKT</h3>
            <div className="contact-content">
              <BiEnvelopeOpen className="contact-envelope" />
                <form action="#" method="post" id="contact_form">
                  <div className="contact-name">
                    <input type="text" placeholder="Imię" name="name" id="name-input" required />
                  </div>
                  <div className="contact-email">
                    <input type="email" placeholder="Adres e-mail" name="email" id="email-input" required />
                  </div>
                  <div className="contact-subject">
                    <input type="text" placeholder="Temat wiadomości" name="subject" id="telephone-input" required />
                  </div>
                  <div className="contact-message">
                    <textarea name="message" placeholder="Masz jakiś problem?" id="message-input" cols="30" rows="5" required></textarea>
                  </div>
                  <div className="submit">
                    <input type="submit" value="WYŚLIJ WIADOMOŚĆ" className="submit-button" />
                  </div>
                </form>
          </div>
        </div>
    </section> 
  );
}
