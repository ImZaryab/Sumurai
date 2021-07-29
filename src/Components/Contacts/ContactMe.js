import React from 'react'
import { Image } from 'react-bootstrap';
import contactPic from '../../Images/contactMe.jpg';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name should be required please"),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    emailBody: yup.string().required(),
  });


function ContactMe() {
    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(schema),
      });
    
      const submitForm = (data) => {
        console.log(data);
      };
    
    return (
        <div className='row'>
            <div className='col-12 col-md-6 mt-2'>
                <Image src={contactPic} fluid rounded />
                
            </div>
            <div className='col-12 col-md-6 p-md-0 mt-2'>
                
                <form onSubmit={handleSubmit(submitForm)} className='form_custom'>
                    
                        <div className='d-flex flex-row w-100 justify-content-between'>
                            <div className='d-flex flex-column w-50 w-md-48'>
                                <input
                                    
                                    type="text"
                                    name="name"
                                    ref={register}
                                    placeholder="Name"
                                />
                                <p> {errors.name?.message} </p>
                            
                            </div>
                            <div className='d-flex flex-column w-50 w-md-48'>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    ref={register}
                                />
                                <p> {errors.email?.message} </p>
                            </div>
                    
                        </div>  
                        <div className='d-flex flex-column w-100'>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                ref={register}
                            />
                            <p> {errors.subject?.message} </p>
                        </div>
                        <div className='d-flex flex-column w-100 mt-3'>
                            <textarea 
                                name="emailBody" 
                                rows="6"
                                ref={register}
                            >
                                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                            </textarea>
                            <p> {errors.emailBody?.message} </p>
                        </div>
                        <div className='d-flex flex-column mt-3'>
                            <input type="submit" id="submit" value="Send Message"/>
                        </div>

                </form>
            </div>
        </div>
    )
}

export default ContactMe
