import PropTypes from 'prop-types';

import { List, ListItem, Button } from './ContactList.styled';

const ContactList = ({ dataContacts, handlerDelete }) => {
  // const array = dataContacts();
  return (
    <>
      <List>
        {dataContacts().map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name}: {number}{' '}
              <Button type="button" id={id} onClick={() => handlerDelete(id)}>
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
  dataContacts: PropTypes.func.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};
