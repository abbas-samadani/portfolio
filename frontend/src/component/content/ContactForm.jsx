import React, { useState } from 'react'
import { post } from '../../services/HttpClient'

export default function ContactForm() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;
        
        post('setcontact' , {
            name,
            email,
            subject,
            message
        }).then(res => console.log(res))
    }


    
    return (
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows={10} data-rule="required" data-msg="Please write something for us" defaultValue={""} />
                    <div className="validate" />
                </div>
                <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                    <button type="submit">Send Message</button>
                </div>
            </form>
        </div>

    )
}
