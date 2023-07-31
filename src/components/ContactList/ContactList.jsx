import { deleteContact } from 'Redux/contactSlices'
import { useDispatch, useSelector } from 'react-redux'

const ContactList = () => {
	const contacts = useSelector(state => state.contacts.items)
	const filter = useSelector(state => state.filter)

	const dispatch = useDispatch()

	const contactsFilteredByName = () => { return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())); }


	return (<div className='m-2'>
		<h1 className="display-3 ">Contact List</h1>
		<ul className="list-group  container-sm m-2">
			{contactsFilteredByName().map(contact =>
				<li key={contact.id} className="list-group-item d-flex justify-content-between">
					<div>
						<p className='mb-1'>Name: {contact.name}</p>
						<p className='m-0'>Number: {contact.number}</p>
					</div>
					<button type="button" className="btn btn-outline-danger" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
				</li>
			)}
		</ul>
	</div>)

}



export default ContactList