import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlices';
import { filterReducer } from './filterSlices';

export const store = configureStore({
	reducer: {
		contacts: contactReducer,
		filter: filterReducer,
	},
});
