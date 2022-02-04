import React, { useRef } from 'react'
import { BiEnvelopeOpen } from 'react-icons/bi'
import Slide from 'react-reveal/Slide'
import emailjs, { init } from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Contact.scss'
init("user_UcyOY52xyQziUNyUjxg65")

export default function Contact() {
  const form = useRef();
  const notify = () => toast("Wow so easy!");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mskorus', 'template_shy9dma', e.target, 'user_UcyOY52xyQziUNyUjxg65')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="container-contact" id="contact">
      <div className="arrow-down" />
        <div class="contact-heading">
          <h3 className="left-heading">KONTAKT</h3>
            <div className="contact-content gradient-slow">
              <Slide bottom opposite cascade>
                <BiEnvelopeOpen className="contact-envelope" />
               </Slide>
                  <form onSubmit={sendEmail}>
                    <div className="contact-name">
                      <input type="text" placeholder="Imię" name="name" required />
                    </div>
                    <div className="contact-email">
                      <input type="email" placeholder="Adres e-mail" name="email" required />
                    </div>
                    <div className="contact-subject">
                      <input type="text" placeholder="Temat wiadomości" name="subject" required />
                    </div>
                    <div className="contact-message">
                      <textarea name="message" placeholder="Treść wiadomości" cols="30" rows="5" required></textarea>
                    </div>
                    <div className="submit">
                      <input type="submit" value="WYŚLIJ WIADOMOŚĆ" className="submit-button" onClick={notify} />
                    </div>
                  </form>
            </div>
        </div>
      <div className="bottom-mobile" />
    </section> 
  );
}
