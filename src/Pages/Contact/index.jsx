import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import Swal from 'sweetalert2';
import './Contact.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        const regex = /^[A-Za-z\s]*$/;
        if (regex.test(value) || value === '') {
            setName(value);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const accessKey = process.env.REACT_APP_ACCESS_KEY;

        formData.append("access_key", accessKey);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });

            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact</h2>
                <div className='input-box'>
                    <input
                        type="text"
                        className='field'
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className='input-box'>
                    <input
                        type="email"
                        className='field'
                        placeholder='Enter your email'
                        name='email'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className='input-box'>
                    <textarea
                        name="message"
                        className='field mess'
                        placeholder='Enter your message'
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                </div>
                <button type='submit'>Send Message</button>
                <div className='contactIcons flex'>
                    <div className='rightIcons'>
                        <Link to="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><FiFacebook className='icon' /></Link>
                    </div>
                    <div className='leftIcons'>
                        <Link to="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram className='icon' /></Link>
                    </div>
                </div>
            </form>

        </section>
    );
}

export default ContactForm;
