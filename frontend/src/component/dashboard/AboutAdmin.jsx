import React from 'react'

export default function AboutAdmin() {
    return (
        <div className="container mt-5 border rounded p-3">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="Name" className="form-control" id="name" placeholder="Please Enter your job title" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="Name" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="07404937502" />
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
                    <input class="form-control" type="file" id="formFile" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
