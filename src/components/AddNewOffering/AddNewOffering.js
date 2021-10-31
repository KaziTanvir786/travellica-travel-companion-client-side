import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewOffering.css';

const AddNewOffering = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://quiet-cove-10103.herokuapp.com/offerings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully.');
                    window.location = "/";
                    reset();
                }
            })
    };
    return (
        <div className="add-offering">
            <h1 className="title mx-auto mt-2 mb-4">Add a new Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" placeholder="Name" {...register("name", { required: true, maxLength: 100 })} /> <br />
                <textarea className="form-control" placeholder="Description" {...register("description")} /> <br />
                <input className="form-control" placeholder="Cost" type="number" {...register("price")} /> <br />
                <input className="form-control" placeholder="Image URL" {...register("img")} /> <br />
                <button className="btn login-btn btn-outline-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNewOffering;