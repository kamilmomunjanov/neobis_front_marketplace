
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";
import axios from "axios";




export const phoneVerify = createAsyncThunk(
    "phone/phoneVerify",
    async ({phone_number, code}, {rejectWithValue}) => {
        try {
            const response = await instance.post("update_phone_number/",{
                phone_number,
                code,
            },
            {
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
            }
            )

            if (response.statusText !== "Created") {
                throw new Error("Ошибка при запросе")
            }
            window.localStorage.setItem("phone", response.data.phone_number)
            return response.data

        }catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const phoneSlice = createSlice({
    name:"phone",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
        statusChange: (state, action)=>{
            state.status = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(phoneVerify.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(phoneVerify.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(phoneVerify.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export const {statusChange} = phoneSlice.actions;
export default  phoneSlice.reducer;