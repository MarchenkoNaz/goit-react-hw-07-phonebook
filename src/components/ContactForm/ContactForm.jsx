import { addContact } from 'Redux/contactSlices';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(state => state.contacts.items)


	const checkExistingContact = (newContact) => {
		return contacts.some(contact => contact.name === newContact.name)
	}
	const handleSubmit = (e) => {
		const { name, number } = e.target.elements
		e.preventDefault()
		const newContact = {
			id: nanoid(2),
			name: name.value,
			number: number.value
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
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="number" className="form-label">Number</label>
					<input
						className='form-control'
						type="tel"
						name="number"
						id='number'
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"

						required
					/>
				</div>

				<button type="submit" className="btn btn-primary">Add Contact</button>
			</form >
		</>
	)
}

ContactForm.propTypes = {
	onSubmit: PropTypes.func
}

export default ContactForm