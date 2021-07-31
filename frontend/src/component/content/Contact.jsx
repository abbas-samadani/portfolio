import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'
import ContactTitle from './ContactTitle'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <ContactTitle/>
        <div className="row aos-init aos-animate" data-aos="fade-in">
          <ContactInfo/>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
