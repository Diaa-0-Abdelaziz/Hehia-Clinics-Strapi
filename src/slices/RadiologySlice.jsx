import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseURL } from "./clinicSlice";
import axios from "axios";

const MainURL = BaseURL
const initialState ={
    RadiologyLabData:[],
    isLoading:false,
    errors: null
};

const getAllRadiologyLabs = createAsyncThunk("get-All-Radiology-Labs", async ()=> {
    try{
     const {data} = await axios.get(`${MainURL}radiology-laboratories`)
     return data
    }catch(error){
        return error
    }
})

const getAllRadiologyLabsSlice = createSlice({
    name:"getRadiologyLab",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getAllRadiologyLabs.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllRadiologyLabs.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.RadiologyLabData = action.payload;
        })
        .addCase(getAllRadiologyLabs.rejected, (state, action)=>{
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})
const getAllRadiologyLabsSliceReducer = getAllRadiologyLabsSlice.reducer;
export {getAllRadiologyLabs, getAllRadiologyLabsSliceReducer}