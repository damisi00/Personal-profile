import React from 'react'

const name = 'Oluwadamisi Enioluwafe';

const ContactPage = () => {
  return (
    <>
        <section className='contact-wrap'>
            <h1>Contact Me</h1>
            <p className='description'>Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className='grp'>
                    <div className='l-input'>
                        <label for='first_name'>First name</label>
                        <input id='first_name'  placeholder='Enter your first name' type='text'/>
                    </div>
                    
                    <div className='l-input'>
                        <label for='last_name'>Last name</label>
                        <input id='last_name'  placeholder='Enter your last name' type='text'/>
                    </div>
                </div>
                <div className='grp '>
                    <div className='l-input ii'>
                        <label for='email'>Email</label>
                        <input id='email'  placeholder='yourname@email.com' type='email'/>
                    </div>
                </div>
                <div className='grp'>
                    <div className='l-input ii'>
                        <label for=''>Message</label>
                        <textarea id=''  placeholder="Send me a message and I'll reply you as soon as possible..." cols='' rows='' />
                    </div>
                </div>
                <div className='check'>
                    <input type='checkbox' value='' id='' />
                    <label for=''>You agree to providing your data to {name} who may contact you.</label>
                </div>
                <button type='submit' id='btn__submit' >Send message</button>       
            </form>
        </section>
    </>
  )
}

export default ContactPage