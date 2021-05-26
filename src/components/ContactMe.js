import React, {useState, useRef} from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function ContactMe() {

    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState: { errors }} = useForm();

    const serviceId = "service_ID";
    const templateId = "template_ID";
    const userId = "user_YJ1kpYOHawTFlYoFyhA1w";

    const onSubmit = (data, r) => {
        sendEmail(serviceId, templateId, {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
        }, userId)
        r.target.reset();
    }

    function sendEmail(serviceId, templateId, variables, userId) {
        emailjs.send(serviceId, templateId, variables, userId)
          .then(() => {
            setSuccessMessage("Form send successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Somthing went wrong ${err}`));
      }
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    {...register("name", { 
                                        required: "Please enter your name", 
                                        maxLength: {
                                            value: 20,
                                            message: "Please enter a name with fewer than 20 characters"
                                        } 
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <ErrorMessage
                                errors={errors}
                                name="name"
                                render={({ message }) => <span className="error-message">{message}</span>}
                            />
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    {...register("phone", { 
                                        required: "Please add your phone number" 
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <ErrorMessage
                                errors={errors}
                                name="phone"
                                render={({ message }) => <span className="error-message">{message}</span>}
                            />
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    {...register("email", { 
                                        required: "Please provide your email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email"
                                        }
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => <span className="error-message">{message}</span>}
                            />
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    {...register("subject", { 
                                        required: "OOps, you forgot to add the subject."
                                    })}
                                />
                                <div className="line"></div>
                            </div>
                            <ErrorMessage
                                errors={errors}
                                name="subject"
                                render={({ message }) => <span className="error-message">{message}</span>}
                            />
                        </div>
                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION INPUT */}
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Please describe shortly your project ..."
                                    name="description"
                                    {...register("description", { 
                                        required: "Please describe shortly your project needs..."
                                    })}
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <ErrorMessage
                                errors={errors}
                                name="description"
                                render={({ message }) => <span className="error-message">{message}</span>}
                            />
                            <button className="btn-main-offer contacts-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
