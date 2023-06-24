import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";


export const authUserData = createAsyncThunk(
    "posts/authUserData",
    async ({email, userName,}, {rejectWithValue}) => {
        try {
            const response = await instance.post("register/",{
                email:email,
                username:userName
            })
            console.log(response)

            if (response.statusText !== "Created") {
                throw new Error("Ошибка при запросе")
            }

            return response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const authSlice = createSlice({
    name:"register",
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
            .addCase(authUserData.pending, (state) => {
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



export const authSliceSelector = state => state.authSlice
export const {authPost} = authSlice.actions;
export default  authSlice.reducer;