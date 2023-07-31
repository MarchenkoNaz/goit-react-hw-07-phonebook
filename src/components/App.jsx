import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";

export const App = () => {
	const contacts = useSelector(state => state.contacts);
	console.log(contacts);
	return (
		<>
			<ContactForm />
			{contacts.length !== 0 && <Filter />}
			<ContactList />
			<ToastContainer />
		</>
	);
};
