import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUserSend } from '../../types/User';
import { userApi } from '../../api/api';

export const loginThunk = createAsyncThunk(
    'user/login',
    async (payload: IUserSend, thunkAPI) => {
        try {
            const userData = await userApi.login(payload)
            localStorage.setItem("user", JSON.stringify(userData))
            return userData
        } catch (e) {
            return thunkAPI.rejectWithValue("Auth failed")
        }
    }
)

export const signupThunk = createAsyncThunk(
    'user/signup',
    async (payload: IUserSend, thunkAPI) => {
        try {
            const userData = await userApi.signup(payload)
            localStorage.setItem("user", JSON.stringify(userData))
            return userData
        } catch (e) {
            return thunkAPI.rejectWithValue("Registration failed")
        }
    }
)