import { addContact, fetchContacts } from 'Redux/api';
import { selectContacts } from 'Redux/selectors';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts)

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const checkExistingContact = (newContact) => {
		return contacts.some(contact => contact.name === newContact.name)
	}
	const handleSubmit = (e) => {
		const { name, phone } = e.target.elements
		e.preventDefault()
		const newContact = {
			id: nanoid(2),
			name: name.value,
			phone: phone.value
		}
		if (!checkExistingContact(newContact)) {
			dispatch(addContact(newContact))
			return toast.info("You added a new contact");
		}

		toast.error('U already have this contact')
	}


	return (
		<>
			<form className='container-sm m-2' onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Name</label>
					<input
						type="text"
						name="name"
						id='name'
						className='form-control'
						pattern="^[a-zA-Z\s]+$"
						title="On english!!!Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input
						className='form-control'
						type="tel"
						name="phone"
						id='phone'
						pattern="^\+380\d{9}$"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">Add Contact</button>
			</form >
		</>
	)
}


export default ContactForm