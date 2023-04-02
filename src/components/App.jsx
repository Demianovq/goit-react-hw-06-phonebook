import { useDispatch } from 'react-redux';
import { ContactList } from './Contacts/Contacts';
import { FormContacts } from './form/form';
import { Filter } from './Filter/Filter';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormContacts onFormSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
