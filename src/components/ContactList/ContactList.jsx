import React from 'react';
import contactListStyles from './style.module.css';
import { selectVisibleContacts } from '../../store/selectors/selectors';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';


const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={contactListStyles.contactListUl}>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;