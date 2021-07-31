import React, { useEffect, useState } from 'react'
import { get } from '../../services/HttpClient';
import Skill from './Skill'

export default function Skills() {

  const [skills, setSkills] = useState([]);

  // const skills = [{
  //   skill: 'Html',
  //   progress: '80'
  // }, {
  //   skill: 'Reactjs',
  //   progress: '90'
  // }, {
  //   skill: 'Nodejs',
  //   progress: '80'
  // }, {
  //   skill: 'JavaScript',
  //   progress: '90'
  // }, {
  //   skill: 'Nodejs',
  //   progress: '80'
  // }, {
  //   skill: 'Php',
  //   progress: '70'
  // }]

  

  useEffect(() => {
    get('getskills').then(res => setSkills(res));
  }, [])

  //console.log(skills);

  const skill = skills.map(skill => <Skill skill={skill}/>)
  return (
    <section id="skills" className="skills ">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="row skills-content">
          {skill}         
        </div>
      </div>
    </section>
  )
}
