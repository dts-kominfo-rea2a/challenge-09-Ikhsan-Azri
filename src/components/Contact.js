// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './contact.css'

const Contact = (props) => {
    return (
        <div className='card'>
            <img className='card-img' src={props.data.photo} alt={props.data.photo}/>
            <div className='card-detail'>
                <h4>{props.data.name}</h4>
                <p>{props.data.phone}</p>
                <a href={props.data.email}>{props.data.email}</a>
            </div>
        </div>
    )
}

export default Contact;