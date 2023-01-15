import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { InitialState } from './UserInterface'
import { fetchUsers } from './UserThunk'

const initialState: InitialState = {
    username: {
        value: ""
    },
    user: {
        login: "",
        id: 0,
        avatar_url: "",
        url: "",
        repos_url: "",
        organizations_url: ""
    },
    users: []
}

export const UsernameSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        editUsername: (state, action: PayloadAction<{ value: string }>) => {
            state.username.value = action.payload.value
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload.items.slice(0, 6)
        })
    }
})

export default UsernameSlice.reducer
export const { editUsername } = UsernameSlice.actions

