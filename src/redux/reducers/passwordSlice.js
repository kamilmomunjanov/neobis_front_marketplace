import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";


export const passwordRegister = createAsyncThunk(
    "password/passwordRegister",
    async ({password1, password2,user_id}, {rejectWithValue}) => {
        try {
            const response = await instance.put(`/${user_id}/set_password/`, {
                    password1,
                    password2,
                // headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
            })
            console.log(response)

            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data

        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const passwordSlice = createSlice({
    name: "password",
    initialState: {
        data: null,
        status: "",
        error: "",
    },
    reducers: {
        authPost: () => {
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(passwordRegister.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(passwordRegister.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(passwordRegister.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export default passwordSlice.reducer;