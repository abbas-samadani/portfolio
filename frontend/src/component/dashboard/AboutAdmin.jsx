import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { GetAbout } from '../../services/AxiosData';
import { post } from '../../services/HttpClient';

export default function AboutAdmin() {
    const [file, setFile] = useState(null)

    const history = useHistory();

    const handleImage = (e) => {
        const file = e.target.files[0];
        setFile(file);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements.name.value);
        const title = event.target.elements.title.value;
        const name = event.target.elements.name.value;
        const image = file;
        const phone = event.target.elements.phone.value;
        const city = event.target.elements.city.value;
        const birthday = event.target.elements.birthday.value;
        const age = event.target.elements.age.value;
        const degree = event.target.elements.degree.value;
        const email = event.target.elements.email.value;
        const description = event.target.elements.description.value;

        //console.log(title, name, image, phone, birthday, city, age, degree, email, description);
        const params = GetAbout(title, name, image, phone, birthday, city, age, degree, email, description);
        //console.log(params);
        post('setabout', params).then(res => console.log(res))
        //history.push('/admin/portfolios');
    }

    return (
        <div className="container mt-5 border rounded p-3">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Please Enter your job title" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="07404937502" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="birthday" className="form-label">Birthday</label>
                    <input type="text" className="form-control" id="birthday" placeholder="1988-05-02" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" id="city" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="degree" className="form-label">degree</label>
                    <input type="text" className="form-control" id="degree" />
                </div>
                <div class="col-md-12">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                </div>

                <div class="col-md-12">
                    <label for="formFile" class="form-label">Image</label>
                    <input class="form-control" type="file" id="formFile" onChange={handleImage} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
