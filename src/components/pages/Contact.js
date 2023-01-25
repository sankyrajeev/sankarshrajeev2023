import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contact ms-auto me-auto'>
            <h1 >
                CONTACT ME
            </h1>
            <form className='ms-auto me-auto'>
                <div class="mb-3 ms-auto me-auto w-50">
                    <label for="exampleInputEmail1" class="form-label col-xs-4">Email address</label>
                    <input type="email" class="form-control col-xs-4" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 ms-auto me-auto  w-50">
                    <label for="exampleInputPassword1" class="form-label">Subject</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 ms-auto me-auto w-50">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                    <textarea class="form-control" placeholder="Write your Message here" id="floatingTextarea2" ></textarea>
                   
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default Contact;
