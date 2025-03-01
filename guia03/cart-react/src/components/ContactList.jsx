import React from 'react';
import Contact from '.components/Contact';

const ContactList = ({ contacts, onDelete, onToggleFavorito }) => {
  const sortedContacts = [...contacts].sort((a, b) => b.favorito - a.favorito);

  return (
    <div>
      {sortedContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </div>
  );
};

export default ContactList;