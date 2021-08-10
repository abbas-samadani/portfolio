import React, { useEffect, useState } from 'react'
import SkillsHeader from './SkillsHeader'
import SkillsBody from './SkillsBody'
import { useHistory } from 'react-router';
import { get, post } from '../../services/HttpClient';

export default function SkillsAdmin() {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        get('getskills').then(res => setSkills(res));
     }, [])

    const routerHistory = useHistory();
    const handleRoute = (e, url) => {
        e.preventDefault();
        routerHistory.push(url)
    }

    const handleCallback = async (skill) =>{
        await post(`deleteskill/${skill.id}`).then(res => console.log(res))              
        setSkills(skills.filter((item) => item.id !== skill.id));
    }
    
    const getSkills = skills.map((skill , index) => <SkillsBody skill={skill} handleCallback={handleCallback}/>)
    return (
        <div className="container mt-5">
            <button type="button " class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                <a href="" style={{ color: 'white' }} onClick={e => { handleRoute(e, '/admin/addskill') }}>Add New Skill</a>
            </button>

            <div className="row ">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header"><i className="fa fa-align-justify" /> PORTFOLIOS</div>
                        <div className="card-body">
                            <table className="table table-responsive-sm table-bordered table-striped table-sm">
                                <SkillsHeader />
                                {getSkills}
                            </table>
                            {/* <nav>
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>

                </div>

            </div>
        </div>



    )
}
