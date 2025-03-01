import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import contactsData from './components/Contact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsData);
  }, []);

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleToggleFavorito = (id) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === id
          ? { ...contact, favorito: !contact.favorito }
          : contact,
      ),
    );
  };

  const handleAddContact = () => {
    const nombre = prompt('Ingrese el nombre:');
    const apellido = prompt('Ingrese el apellido:');
    const telefono = prompt('Ingrese el teléfono:');

    if (nombre && apellido && telefono) {
      const newContact = {
        id: Date.now(),
        nombre,
        apellido,
        telefono,
        favorito: false,
      };
      setContacts([...contacts, newContact]);
    }
  };

  return (
    <div>
      <h1>Administrador de Contactos</h1>
      <button type="button" onClick={handleAddContact}>
        Agregar Contacto
      </button>
      <ContactList
        contacts={contacts}
        onDelete={handleDelete}
        onToggleFavorito={handleToggleFavorito}
      />
    </div>
  );
};

export default App;