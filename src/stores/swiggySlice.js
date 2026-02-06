import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk(
    'data/instamart',
    async (offset = 1) => {
        const cors = "https://cors-anywhere.herokuapp.com/";
        const URL = `https://www.swiggy.com/api/instamart/home/v2?offset=${offset}&layoutId=4987&storeId=1404165&primaryStoreId=1404165&secondaryStoreId=&clientId=INSTAMART-APP`;
        let res = await fetch(cors + URL);
        let data = await res.json();
        return data

    }
)
const swiggySlicer = createSlice({
    name: "swiggerSlicer",
    initialState: {
        data: [],
        instaData: null,
        loading: false,
        error: false
    },
    reducers: {
        addCart: (state, action) => {
            state.data.push({ ...action.payload, quantity: 1 })
        },
        IncreamentCart: (state, action) => {
            const element = state.data.find(item => item.id === action.payload.id);
            element.quantity += 1;
        },
        DecreamentCart: (state, action) => {
            const element = state.data.find(items => items.id === action.payload.id)
            if (element.quantity > 1) {
                element.quantity -= 1
            }
            else {

                state.data = state.data.filter(item => item.id !== action.payload.id);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.instaData = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.state = true
            })
    }
})
export const { addCart, IncreamentCart, DecreamentCart } = swiggySlicer.actions;
export default swiggySlicer.reducer