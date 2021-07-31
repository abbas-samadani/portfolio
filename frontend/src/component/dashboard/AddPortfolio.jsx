import React from 'react'
import { post } from '../../services/HttpClient';

export default function AddPortfolio() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.elements.formFile);
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        //const image = event.target.elements.image.value;
        const github = event.target.elements.github.value;
        const link = event.target.elements.link.value;        

        post('addportfolio' , {
            name,
            description,
            github,
            link
        }).then(res => console.log(res))
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
                    <input class="form-control" type="file" id="formFile" />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}
