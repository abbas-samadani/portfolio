import React from 'react'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">          
          <div className="col-12 col-xl-7">
            <div className="card-body">
              <h5 className="card-title"><a href="project.html" className="theme-link">Project Heading</a></h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            </div>
          </div>
          <div className="col-12 col-xl-5 card-img-holder">
            <img src="styles/assets/img/portfolio/portfolio-3.jpg" className="card-img" alt="image" />
          </div>
        </div>


        <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay={100} style={{ position: 'relative', height: '877.5px' }}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{ position: 'absolute', left: '0px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="App 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{ position: 'absolute', left: '380px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{ position: 'absolute', left: '760px', top: '0px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="App 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{ position: 'absolute', left: '0px', top: '292.5px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="Card 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{ position: 'absolute', left: '380px', top: '292.5px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="Web 2"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app" style={{ position: 'absolute', left: '760px', top: '292.5px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="App 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{ position: 'absolute', left: '0px', top: '585px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="Card 1"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-card" style={{ position: 'absolute', left: '380px', top: '585px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="Card 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web" style={{ position: 'absolute', left: '760px', top: '585px' }}>
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox vbox-item" title="Web 3"><i className="bx bx-plus" /></a>
                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
