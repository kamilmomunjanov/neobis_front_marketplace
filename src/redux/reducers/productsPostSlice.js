import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../axios";


export const productPost = createAsyncThunk(
    "post/productSlice",
    async ({ title, price, short_description, long_description, user_id}, {rejectWithValue}) => {
        try {
            const response = await instance.post("products/", {
                    title, price, short_description, long_description
                },
                {
                    headers: {Authorization: 'Bearer ' + window.localStorage.getItem("token")}
                }
            )


            console.log(response.data)
            if (response.statusText !== "Created") {
                throw new Error("Ошибка при запросе")
            }
            return response.data


        } catch (err) {
            return rejectWithValue(err.message)
        }
    }
)


const productSlice = createSlice({
    name: "product",
    initialState: {
        data: null,
        status: "",
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productPost.pending, (state, action) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(productPost.fulfilled, (state, action) => {
                state.status = "done"
                state.data = action.payload
            })
            .addCase(productPost.rejected, (state, action) => {
                state.status = "error"
                state.error = action.payload
            })
    }
})


export const {} = productSlice.actions;
export default productSlice.reducer;