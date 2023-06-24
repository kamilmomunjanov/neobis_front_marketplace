import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";




export const loginUserData = createAsyncThunk(
    "post/loginUserData",
    async ({username, password}, {rejectWithValue}) => {
        try {
            const response = await instance.post("login/",{
                username: username,
                password: password
            })

            console.log(response)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const loginSlice = createSlice({
    name:"login",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserData.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(loginUserData.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(loginUserData.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export const {} = loginSlice.actions;
export default  loginSlice.reducer;