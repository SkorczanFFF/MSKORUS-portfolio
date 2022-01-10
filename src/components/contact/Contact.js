import React from 'react';
import './Contact.scss';

export default function Contact() {

  return (
    <section className="container-contact">
        <div class="contact-heading">
          <h3 className="left-heading">KONTAKT</h3>
            <div className="contact-content">
              <form className="form">
                <div className="nameInput">
                    <label for="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="firstName"
                        tabIndex="1"
                    />
                    <label for="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="lastName"
                        tabIndex="2"
                    />
                  </div>
                </form>
              </div>
        </div>
    </section> 
  );
}
