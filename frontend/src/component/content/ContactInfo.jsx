import React from 'react'

export default function ContactInfo() {
    return (
        <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
                <div className="address">
                    <i className="icofont-google-map" />
                    <h4>Location:</h4>
                    <p>M108 Street, Kolkata, WB 723453</p>
                </div>
                <div className="email">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>samadani.abbas@gmail.com</p>
                </div>
                <div className="phone">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>+44 7404937502</p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{ border: 0, width: '100%', height: '290px' }} allowFullScreen />
            </div>
        </div>

    )
}
