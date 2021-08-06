import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { GetPortfolios } from '../../services/AxiosData';
import { post } from '../../services/HttpClient';

export default function AddPortfolio() {

    const [file, setFile] = useState(null)

    const history = useHistory();
    const handleImage = (e) =>{
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmit =(event) =>{        
        event.preventDefault();
        //console.log(event.target.elements.formFile.value);
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const image = file;
        const github = event.target.elements.github.value;
        const link = event.target.elements.link.value;        
        
        console.log(name,description,image,github,link);
        const params = GetPortfolios( name , description , image , github , link)
        //console.log(params);
        post('addportfolio' , params).then(res => console.log(res))
        history.push('/admin/portfolios');
    }

    return (
        <div className="container mt-5 border rounded p-3">
            <form className="row g-3" onSubmit={handleSubmit} >
                <div className="col-md-12">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="Name" className="form-control" id="name" placeholder="Please Enter your project title" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="github" className="form-label">Github</label>
                    <input type="text" className="form-control" id="github" placeholder="Please Enter Link Github" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="link" className="form-label">Link</label>
                    <input type="text" className="form-control" id="link" placeholder="Please Enter Link Website" />
                </div>
                <div class="col-md-12">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                </div>
                <div class="col-md-12">
                    <label for="formFile" class="form-label">Image</label>
                    <input class="form-control" type="file" id="formFile" onChange={handleImage}/>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}
