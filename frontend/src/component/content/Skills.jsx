import React from 'react'

export default function Skills() {

  const skills = [{
    skill: 'Html',
    progress: '80'
  }, {
    skill: 'Reactjs',
    progress: '90'
  }, {
    skill: 'Nodejs',
    progress: '80'
  }, {
    skill: 'JavaScript',
    progress: '90'
  }, {
    skill: 'Nodejs',
    progress: '80'
  }, {
    skill: 'Php',
    progress: '70'
  }]

  return (
    <section id="skills" className="skills ">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row skills-content">
          {skills.map(skill => 
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
              <div className="progress">
                <span className="skill">{skill.skill} <i className="val">{skill.progress}%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow={skill.progress} aria-valuemin={0} aria-valuemax={skill.progress} style={{ width: '100%' }} />
                </div>
              </div>
              </div>
            )}
          
        </div>
      </div>
    </section>
  )
}
