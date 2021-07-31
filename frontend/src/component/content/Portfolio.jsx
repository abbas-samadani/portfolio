import React , { useEffect, useState } from 'react'
import Project from './Project'
import { get } from '../../services/HttpClient'

export default function Portfolio() {

  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    get('getportfolios').then(res => setPortfolios(res));
  }, [])

  const project = portfolios.map(portfolio => <Project portfolio={portfolio}/>)
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>        

        {project}

      </div>
    </section>
  )
}
