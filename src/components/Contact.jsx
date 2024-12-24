import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.others}</p>
            <a
          href={`mailto:${CONTACT.email}`}
          className="border-b hover:text-green-400 transition-colors duration-200"
        >{CONTACT.email}</a>
        </div>
      
    </div>
  )
}

export default Contact;
