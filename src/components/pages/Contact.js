import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        alert("Message Sent Successfully");
  
      emailjs.sendForm('service_qea46jv', 'template_68gvv4g', form.current, 'dnRCPlrX1nwHbeygE')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className='contact ms-auto me-auto'>
            <h1 >
                CONTACT ME
            </h1>
            <form className='ms-auto me-auto' ref={form} onSubmit={sendEmail}>
                <div class="mb-3 ms-auto me-auto w-50">
                    <label for="exampleInputEmail1" class="form-label col-xs-4" >Email address</label>
                    <input type="email" name="user_email" class="form-control col-xs-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 ms-auto me-auto  w-50">
                    <label for="exampleInputPassword1" class="form-label">Subject</label>
                    <input  class="form-control" id="exampleInputPassword1" type="text" name="user_text" />
                </div>
                <div class="mb-3 ms-auto me-auto w-50">
                <label   class="form-label">Message</label>
                    <textarea class="form-control" name="message" placeholder="Write your Message here" id="floatingTextarea2" ></textarea>
                   
                </div>
                <button type="submit" value="Send" class="btn btn-primary">Submit</button>
            </form>
            

        </div>
    );
}

export default Contact;
