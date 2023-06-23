import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";
import {authUserData} from "./authSlice";


export const loginUserData = createAsyncThunk(
    "post/loginUserData",
    async ({username,password}, {rejectWithValue}) => {
        try {
            const response = await instance.post("login/",{
                username,
                password
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
        authPost:()=>{}
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUserData.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(authUserData.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(authUserData.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})

export default  loginSlice.reducer;