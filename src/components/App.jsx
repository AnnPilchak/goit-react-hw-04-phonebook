import { useEffect, useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

import { nanoid } from "nanoid";
import {Container} from "./App.styled"

const App = () => {
const [contacts, setContacts] = useState(() => {
		const contacts = JSON.parse(localStorage.getItem("contacts"));
		return contacts ? contacts : [];
	});
	const [filter, setFilter] = useState("");

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);
	
	const onHandleFilter = (e) => {
		setFilter(e.target.value);
	};
	// перевірка на дублікати
	const isDublicate = (name) => {
		const normalizedName = name.toLowerCase();
		const result = contacts.find(({ name }) => {
			return name.toLowerCase() === normalizedName;
		});
		return Boolean(result);
	};
	// додавання нового контакту
	const addContact = ({ name, number }) => {
		if (isDublicate(name)) {
			alert(`${name} is already in the contacts list`);
			return false;
		}
		setContacts((prevContacts) => {
			const newContact = {
				id: nanoid(),
				name,
				number,
			};
			return [newContact, ...prevContacts];
		});
		return true;
	};
	const onDeleteItem = (id) => {
		setContacts((prevContacts) =>
			prevContacts.filter((item) => item.id !== id)
		);
	};
	const getFilteredContacts = () => {
		if (!filter) {
			return contacts;
		}

		const normalizedFilter = filter.toLowerCase();
		const result = contacts.filter(({ name }) => {
			return name.toLowerCase().includes(normalizedFilter);
		});

		return result;
	};

	const filteredContacts = getFilteredContacts();
	const isContacts = Boolean(filteredContacts.length);
	return (
		<Container>
			<h2>Phonebook</h2>
			<ContactForm onSubmit={addContact} />
			<h2>Contacts</h2>
			<Filter filter={filter} onChange={onHandleFilter} />
			{isContacts && (
				<ContactList
					visibleContacts={filteredContacts}
					deleteItem={onDeleteItem}
				/>
			)}
			{!isContacts && (
				<p style={{ display: "flex", justifyContent: "center" }}>
					No contacts in the list
				</p>
			)}
		</Container>
	);
}
export default App;