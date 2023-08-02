import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "./Loading/Loading";
import { selectContacts, selectError, selectIsLoading } from "Redux/selectors";

export const App = () => {
	const contacts = useSelector(selectContacts);
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)


	return (
		<>
			<ContactForm />
			{contacts.length !== 0 && <Filter />}
			{isLoading && <Loading />}
			{error && toast.error(error)}
			<ContactList />
			<ToastContainer />
		</>
	);
};
