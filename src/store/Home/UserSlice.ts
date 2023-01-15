import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Username {
    value: string
}

const initialState: Username = {
    value: ""
}

export const UsernameSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        editUsername: (state, action: PayloadAction<{ value: string }>) => {
            state.value = action.payload.value
        },
    }
})

export default UsernameSlice.reducer
export const { editUsername } = UsernameSlice.actions

