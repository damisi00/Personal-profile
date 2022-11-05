import React, { useState } from 'react'

// name
const name = 'Oluwadamisi Enioluwafe';


const ContactPage = () => {
    const [enteredMsg, setMsg] = useState('');
    const [submit, setSubmit] = useState(false);
    const [errorMsg, setError] = useState(false);

    const handleSubmit = ev => {
        
        ev.preventDefault();
        setSubmit(true);
        if (enteredMsg.trim().length === 0) {
             setError(true) 
             return null;
        };
        setTimeout(() => {
            setSubmit(false);
        }, 4000);
        
    }
  return (
    <>
        <section className='contact-wrap'>
            <h1>Contact Me</h1>
            <p className='description'>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit}>
                <div className='grp'>
                    <div className='l-input'>
                        <label htmlFor='first_name'>First name</label>
                        <input id='first_name'  placeholder='Enter your first name' type='text' required/>
                    </div>
                    
                    <div className='l-input'>
                        <label htmlFor='last_name'>Last name</label>
                        <input id='last_name'  placeholder='Enter your last name' type='text' required/>
                    </div>
                </div>
                <div className='grp '>
                    <div className='l-input ii'>
                        <label htmlFor='email'>Email</label>
                        <input id='email'  placeholder='yourname@email.com' type='email' required/>
                    </div>
                </div>
                <div className='grp'>
                    <div className='l-input ii'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' value={enteredMsg} 
                            onChange={ev => setMsg(ev.target.value)}
                            placeholder="Send me a message and I'll reply you as soon as possible..."  />
                        {errorMsg && <h6 className='err-msg'>Please enter a message</h6>}
                    </div>
                </div>
                <div className='check'>
                    <input type='checkbox'  id='check_box' required/>
                    <label htmlFor='check_box'>You agree to providing your data to {name} who may contact you.</label>
                </div>
                <button type='submit' id='btn__submit' >Send message</button>   
                {submit && !errorMsg &&
                    <p className="">Message sent successfully.</p>
                }    
            </form>
        </section>
    </>
  )
}

export default ContactPage