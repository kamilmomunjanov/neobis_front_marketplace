import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";
import axios from "axios";




export const formUserData = createAsyncThunk(
    "form/formUserData",
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios("http://68.183.79.205:8000/form/",{
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
            })

            console.log(response.data)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data
        }catch (err) {
            // return rejectWithValue(err.message)
            return console.log("Hello")
        }
    }
)

export const formPutUSerData = createAsyncThunk(
    "put/formPutData",
    async ({name,surname,date}, {rejectWithValue}) => {
        try {
            const response = await instance.put("form/", {
                first_name: name,
                last_name:surname,
                birth_date:date,
            },
            {
                headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
            }
            )

            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data

        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const formSlice = createSlice({
    name:"form",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder
            .addCase(formUserData.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(formUserData.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(formUserData.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
            .addCase(formPutUSerData.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(formPutUSerData.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(formPutUSerData.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})



export const {} = formSlice.actions;
export default  formSlice.reducer;