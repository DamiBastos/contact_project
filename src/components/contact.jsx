import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class'


const ContactComponent = ({contact, conected, remove}) => {

    useEffect(() => {
        console.log('Created contact')
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`)
        };
    }, [contact]);

    function contactConectedIcon(){
        if(contact.conected){
            return (<i onClick={ () => conected(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={ () => conected(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{contact.name}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.lastname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>
            {contactConectedIcon()}
                <i className='task-action' ></i>
            </td>
            <td className='align-middle'>
                <i className='bi-trash task-action' style={{color: 'tomato' }} onClick={() => remove(contact)}></i>
            </td>
        </tr>
        
    )
}


Contact.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
