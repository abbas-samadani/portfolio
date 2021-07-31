import React from 'react'

export default function Skill({skill}) {
    return (
        
        <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
            <div className="progress">
                <span className="skill">{skill.name} <i className="val">{skill.progress}%</i></span>
                <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={skill.progress} aria-valuemin={0} aria-valuemax={skill.progress} style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    )
}
