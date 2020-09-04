import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const funData = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.name},My Contact number is ${data.phone}, My email is ${data.email} and Here what i want to say is ${data.message}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group mb-3">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={funData} placeholder="Enter Your Name" />
                            </div>
                            <div class="form-group mb-3">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={funData} placeholder="name@example.com" />
                            </div>
                            <div class="form-group mb-3">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={funData} placeholder="Phone Number" />
                            </div>

                            <div class="form-group mt-3">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={funData} rows="3"></textarea>
                            </div>
                            <div className="col-12 mt-3">
                                <button className="btn btn-primary" type="submit">
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;