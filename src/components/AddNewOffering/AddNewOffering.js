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
            <h3>This is add offering</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 100 })} /> <br />
                <textarea placeholder="Description" {...register("description")} /> <br />
                <input placeholder="Price" type="number" {...register("price")} /> <br />
                <input placeholder="Image URL" {...register("img")} /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewOffering;