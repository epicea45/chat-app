import React from 'react';
import Contact from './Contact.js';

const ContactList = props => {
    return (
        <div>
            {props.contacts.map(contact=>
                <Contact
                    name={contact.name} 
                    avatar={contact.avatar} 
                    online = {contact.online}
                />
            )
            }
        </div>
    )
}
    

export default ContactList