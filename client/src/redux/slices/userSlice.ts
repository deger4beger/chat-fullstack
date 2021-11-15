import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userApi } from '../../api/api';
import { IUserRecieve, IUserSend } from '../../types/User';
import { loginThunk, signupThunk } from './userThunks';

interface userState {
	userData: {
		id: string | null
		created: string | null
		username: string | null
		token: string | null
	}
	isAuth: boolean
	isLoading: boolean
	error: string | null
}

const initialState: userState = {
	userData: {
		id: null,
		created: null,
		username: null,
		token: null
	},
	isAuth: false,
	isLoading: false,
	error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
    	[loginThunk.pending.type || signupThunk.pending.type]: (state) => {
            state.isLoading = true;
        },
        [loginThunk.fulfilled.type || signupThunk.fulfilled.type]: (state, action: PayloadAction<IUserRecieve>) => {
            state.isLoading = false;
            state.error = ""
            state.isAuth = true
            state.userData = action.payload
        },
        [loginThunk.rejected.type || signupThunk.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default userSlice.reducer