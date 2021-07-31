import React, { useEffect, useState } from 'react'
import { get } from '../../services/HttpClient'
import ContactBody from './ContactBody'
import ContactHeader from './ContactHeader'

export default function ContactAdmin() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        get('getcontacts')
        .then(res => setContacts(res))
    }, [])

    const getContacts = contacts.map((contact , index) => <ContactBody 
        name={contact.name} 
        email={contact.email} 
        subject={contact.subject} 
        message={contact.message} 
        created_at={contact.created_at}
        />)
    return (
      <div className="container mt-5">
      <div className="row ">
          <div className="col-lg-12">
              <div className="card">
                  <div className="card-header"><i className="fa fa-align-justify" /> Contacts </div>
                  <div className="card-body">
                      <table className="table table-responsive-sm table-bordered table-striped table-sm">
                          <ContactHeader/>
                          {getContacts}
                          
                      </table>
                      <nav>
                          <ul className="pagination">
                              <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#">4</a></li>
                              <li className="page-item"><a className="page-link" href="#">Next</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}
