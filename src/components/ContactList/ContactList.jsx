import PropTypes from 'prop-types';
import { List, ListItem, ListDeleteButton } from './ContactList.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
            <ListDeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </ListDeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
