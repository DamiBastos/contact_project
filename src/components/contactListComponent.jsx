import React from 'react';
import { Contact } from '../models/contact.class'
import ContactComponent from './contactComponent';


const ContactListComponent = () => {

    const contactDefault = new Contact('Damian', 'Bastos', 'name_lastname@example.com', false)

    return (

        <div>
            <div>
                <h1>
                    Contact list:
                </h1>
            
            </div>
            <ContactComponent contact={contactDefault}></ContactComponent>
        </div>
    );
};




export default ContactListComponent;
