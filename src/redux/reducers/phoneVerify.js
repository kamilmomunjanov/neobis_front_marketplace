
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";
import axios from "axios";




export const phoneVerify = createAsyncThunk(
    "post/phoneVerify",
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

// export const formPutUSerData = createAsyncThunk(
//     "put/formPutData",
//     async ({name,surname,date}, {rejectWithValue}) => {
//         try {
//             const response = await instance.put("form/", {
//                 first_name: name,
//                 last_name:surname,
//                 birth_date:date,
//                 headers: { Authorization: 'Bearer ' +  window.localStorage.getItem("token") }
//             })
//             console.log(response)
//
//             if (response.statusText !== "OK") {
//                 throw new Error("Ошибка при запросе")
//             }
//             return response.data
//
//         } catch (err) {
//             return rejectWithValue(err.message)
//         }
//     }
// )


const phoneSlice = createSlice({
    name:"phone",
    initialState:{
        data:null,
        status:"",
        error:"",
    },
    reducers:{
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
            // .addCase(formPutUSerData.pending, (state, action) => {
            //     state.status = "loading"
            //     state.error = ""
            // })
            // .addCase(formPutUSerData.fulfilled, (state, action) => {
            //     state.status = "done"
            //     state.data = action.payload
            // })
            // .addCase(formPutUSerData.rejected, (state, action) => {
            //     state.status = "error"
            //     state.error = action.payload
            // })
    }
})



export const {} = phoneSlice.actions;
export default  phoneSlice.reducer;