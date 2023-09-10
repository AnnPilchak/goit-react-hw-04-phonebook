import { List, Button } from "./ContactList.styled";
import PropTypes from "prop-types";

const ContactList = ({ visibleContacts, deleteItem }) => {
	return (
		<List>
			{visibleContacts.map(({ id, name, number }) => {
                return (
                    <li>
                            <p>Name: {name}</p>
                            <p>Number: {number}</p>
                            <Button onClick={() => deleteItem(id)}>Delete</Button>
                        </li>
				);
			})}
		</List>
	);
};

ContactList.propTypes = {
	visibleContacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	deleteItem: PropTypes.func.isRequired,
};

export default ContactList;