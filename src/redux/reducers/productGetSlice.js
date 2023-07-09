import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";


export const productGet = createAsyncThunk(
    "productGet/productGetSlice",
    async (_, {rejectWithValue}) => {
        try {
            const response = await instance("products/",
                {
                    headers: {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                }
            )


            console.log(response.data.products)
            if (response.statusText !== "OK") {
                throw new Error("Ошибка при запросе")
            }
            return response.data.products


        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const productGetSlice = createSlice({
    name: "productGet",
    initialState: {
        data: null,
        status: "",
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productGet.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(productGet.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(productGet.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export const {} = productGetSlice.actions;
export default productGetSlice.reducer;