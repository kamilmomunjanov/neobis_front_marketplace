import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";
import {phoneVerify} from "./phoneVerify";


export const codeVerify = createAsyncThunk(
    "code/codeVerify",
    async ({code}, {rejectWithValue}) => {
        try {
            const response = await instance.post(`verify_code/${window.localStorage.getItem("phone")}`,{
                    code,
                },
                {
                    headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
                }
            )
            console.log(response)

            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data

        }catch (err) {
            return console.log("Put")
        }
    }
)


const codeSlice = createSlice({
    name:"code",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(codeVerify.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(codeVerify.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(codeVerify.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export const {} = codeSlice.actions;
export default  codeSlice.reducer;