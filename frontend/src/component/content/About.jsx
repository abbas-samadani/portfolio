import React, { useEffect, useState } from 'react'
import { get } from '../../services/HttpClient';

export default function About() {
    const [about, setAbout] = useState([])

    useEffect(() => {
        get('getabout').then(res => setAbout(res[0]));
      }, [])

    const imageStyle = {
        width : '300px',
        height : '350px'
    }  
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                            <img src={about.image} className="img-fluid" style={imageStyle} alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                            <h3>{about.title}</h3>
                            <p className="font-italic">{about.description}</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right" /> <strong>Birthday: </strong>{about.birthday}</li>
                                        <li><i className="icofont-rounded-right" /> <strong>Website: </strong>{about.email}</li>
                                        <li><i className="icofont-rounded-right" /> <strong>Phone: </strong>{about.phone}</li>
                                        <li><i className="icofont-rounded-right" /> <strong>City: </strong>{about.city}</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="icofont-rounded-right" /> <strong>Age: </strong>{about.age}</li>
                                        <li><i className="icofont-rounded-right" /> <strong>Degree: </strong>{about.degree}</li>
                                        <li><i className="icofont-rounded-right" /> <strong>Email: </strong>{about.email}</li>
                                        <li><i className="icofont-rounded-right" /> <strong>Freelance: </strong> Available</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
