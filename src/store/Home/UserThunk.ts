import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetch",
    async (value: string, thunkAPI) => {
        const response = await fetch(`https://api.github.com/search/users?q=${value}`, {
            method: "GET",
            // headers: {
            //     Autorization: "Token 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",
            //     "Content-Type": "application/xml"
            // },

        })
        const data = response.json();
        return data;
    }
)