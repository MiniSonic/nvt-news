import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		updateProfileStart: (state) => {
			state.isFetching = true;
		},
		updateProfileSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser.exportData.FullName = action.payload.FullName;
			state.currentUser.exportData.Avatar = action.payload.Avatar;
		},
		updateProfileFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logoutSuccess: (state) => {
			state.currentUser = null;
			state.isFetching = false;
			state.error = false;
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	updateProfileStart,
	updateProfileSuccess,
	updateProfileFailure,
	logoutSuccess,
} = userSlice.actions;
export default userSlice.reducer;
