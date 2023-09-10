import { List } from "./ContactList.styled";
import PropTypes from "prop-types";

const ContactList = ({ visibleContacts, onDeleteContact }) => {
	return (
		<List>
			{visibleContacts.map(({ id, name, number }) => {
                return (
                    <ul
						key={id}
						id={id}
						name={name}
						number={number}
						onDeleteContact={onDeleteContact}
					/>
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