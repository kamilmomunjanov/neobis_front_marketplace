import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";


export const myProductGet = createAsyncThunk(
    "myProductGet/myProductGetSlice",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance(`products/my_products/`,
                {
                    headers: {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                }
            )


            console.log(response.data)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data


        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const changeMyProduct = createAsyncThunk(
    "myProductGet/changeMyProductSlice",
    async ({data, id}, {rejectWithValue}) => {
        try {
            const response = await instance.patch(`products/${id}/`,data,
                {
                    headers: {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                }
            )


            console.log(response.data)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }


        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)

export const deleteMyProduct = createAsyncThunk(
    "myProductGet/deleteMyProduct",
    async (id, {rejectWithValue}) => {
        try {
            const response = await instance.delete(`products/${id}/`,
                {
                    headers: {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                }
            )


            console.log(response.data)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }


        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const myProductGetSlice = createSlice({
    name: "myProductGet",
    initialState: {
        data: null,
        status: "",
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(myProductGet.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(myProductGet.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(myProductGet.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })

    }
})


export const {} = myProductGetSlice.actions;
export default myProductGetSlice.reducer;