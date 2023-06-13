import PropTypes from 'prop-types';

import { List, ListItem, Button } from './ContactList.styled';
const ContactList = ({ dataContacts, handlerDelete }) => {
  console.log(dataContacts);
  return (
    <>
      <List>
        {dataContacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name}: {number}{' '}
              <Button type="button" id={id} onClick={handlerDelete}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default ContactList;
ContactList.propTypes = {
  dataContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handlerDelete: PropTypes.func.isRequired,
};
