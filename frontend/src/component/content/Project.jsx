import React from 'react'

export default function Project({ portfolio }) {


  return (
    <>
      <div className="row shadow p-3 mb-3 bg-body rounded " >
        <div className="col-12 col-xl-7">
          <div className="card-body">
            <h5 className="card-title"><a href="project.html" className="theme-link">{portfolio.name}</a></h5>
            <p className="card-text">{portfolio.description}</p>
          </div>
        </div>
        <div className="col-12 col-xl-5 card-img-holder">
          <img src={portfolio.image} className="card-img"  alt="image" />
        </div>
        <div>
          <a href={portfolio.github}><button className="btn btn-primary">Github</button></a>
          <a href={portfolio.link}><button className="btn btn-primary ml-4">Project Link</button></a>
        </div>

      </div>

    </>
  )
}
