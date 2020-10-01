import React from 'react';
import './contactus.css'
import Header from "./Header";



function Contact() {
    return (
        <div className="contact">
            <Header/>

            <section id="contact">
                <div className="contact-form bg-primary p-2">
                    <h2 className="m-heading">Contact Us</h2>
                    <p>Please use the form below to contact us</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" id="phone" placeholder="Enter Phone Number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Enter Message"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn"/>
                    </form>
                </div>

            </section>



        </div>
    );
}

export default Contact;
