import React from 'react'
import { post } from '../../services/HttpClient'
import { useHistory } from 'react-router-dom';

export default function NewSkill() {
    //const [newSkill, setNewSkill] = useState([]);
    const history = useHistory();

    const handleSubmit =(event) =>{        
        event.preventDefault();
        console.log(event.target.elements.skill.value);
        const name = event.target.elements.skill.value;
        const progress = event.target.elements.progress.value;
        post('addskill' , {
            name,
            progress
        }).then(res => console.log(res))
        history.push('/admin/skills');
    }
    
    return (
        // <h1>salam</h1>
        <div className="container mt-5 border rounded p-3">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="Title" className="form-label">Skill</label>
                    <input type="text" className="form-control" id="skill" placeholder="php" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="github" className="form-label">Progress</label>
                    <input type="text" className="form-control" id="progress" placeholder="80" />
                </div>
                
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
