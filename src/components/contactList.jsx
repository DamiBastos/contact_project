import React, { useState, useEffect } from 'react';
import { Contact } from '../models/contact.class'
import ContactComponent from './contact';
import Contactform from './contactForm';


const ContactListComponent = () => {

    const contactDefault1 = new Contact('Damian', 'Bastos', 'name_lastname@example.com', false)
    const contactDefault2 = new Contact('Liliana', 'Almiron', 'name_lastname@example.com', true)
    const contactDefault3 = new Contact('Beto', 'Velez', 'name_lastname@example.com', false)
    const contactDefault4 = new Contact('Baron', 'Besucon', 'name_lastname@example.com', false)


    const [contacts, setContacts] = useState([contactDefault1, contactDefault2, contactDefault3, contactDefault4]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('contact state has been modified')
        setLoading(false)
        return () => {
            console.log('Taskcontact componente is going to unmount...')
        };
    }, [contacts]);

    const contactConected = (contact) => {
        console.log('Conected this contact:', contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        console.log('Delete this Contact:', contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1)
        setContacts(tempContacts)
    }

    function addContact(contact){
        console.log('Add this Task:', contact)
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.push(contact)
        setContacts(tempContact)
    }

    return (

        <div className='col-12'>
                <div className='card'>
                
            {/* Card Header (title)*/}
                <div className='card-header p-3'>

                    <h5>
                    Your Contacts:
                    </h5> 
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height:'400px'} }>
                    <table>
                        <thead>
                        <tr>
                            <th scope='col'> Name </th>
                            <th scope='col'> Lastname </th>
                            <th scope='col'> Email </th>
                            <th scope='col'> Status </th>
                        </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact, index) => {
                            return (
                                <ContactComponent
                                    key={index} 
                                    contact={contact} 
                                    conected={contactConected}
                                    remove={deleteContact}
                                    >
                                </ContactComponent>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Contactform add={addContact}></Contactform>

            </div>
    );
};




export default ContactListComponent;
