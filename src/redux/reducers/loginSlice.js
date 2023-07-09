import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";




export const loginUserData = createAsyncThunk(
    "login/loginUserData",
    async ({username, password}, {rejectWithValue}) => {
        try {
            const response = await instance.post("login/",{
                username: username,
                password: password
            })


            console.log(response.data.token)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }

             window.localStorage.setItem("token", response.data.token.access)
             window.localStorage.setItem("tokenRefresh", response.data.token.refresh)
            return  response.data

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
        logoutUser: (state, action) => {
            state.data = null
        }
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



export const {logoutUser} = loginSlice.actions;
export default  loginSlice.reducer;