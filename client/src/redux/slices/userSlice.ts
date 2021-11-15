import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import decode, {JwtPayload} from "jwt-decode"
import { IUserRecieve } from '../../types/User';
import { authThunk } from './userThunks';

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
    reducers: {
    	initializeUser(state) {
    		const user = localStorage.getItem("user")
    		if (user) {
    			const userData: IUserRecieve = JSON.parse(user)
    			const decodedToken = decode<JwtPayload>(userData.token)
    			if (decodedToken.exp && (decodedToken.exp * 1000 > new Date().getTime())) {
    				state.isAuth = true
    				state.userData = userData
    			}
    		}
    	}
    },
    extraReducers: {
    	[authThunk.pending.type]: (state) => {
            state.isLoading = true;
        },
        [authThunk.fulfilled.type]: (state, action: PayloadAction<IUserRecieve>) => {
            state.isLoading = false;
            state.error = ""
            state.isAuth = true
            state.userData = action.payload
        },
        [authThunk.rejected.type]: (state,  action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export const { initializeUser } = userSlice.actions

export default userSlice.reducer