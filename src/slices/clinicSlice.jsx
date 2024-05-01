import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const BaseURL = "http://localhost:1337/api/";
const initialState = {
    clinicData:[],
    clinicDataDetails:{},
    isLoading: false,
    errors: null,
};

const getAllClinics = createAsyncThunk("get-all-clinics", async ()=>{
    try{
        const data = await axios.get(`${BaseURL}clinics/?populate=*`)
        return data.data
    }catch(error){
          return error
    }
})
const getClinicsDetails = createAsyncThunk("get-all-clinics-details", async (clinicName)=>{
    try{
        const data = await axios.get(`${BaseURL}clinics/${clinicName}?populate=*`)
        return data.data
    }catch(error){
          return error
    }
})
const getAllClinicsSlice = createSlice({
    name:"getAllClinics",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getAllClinics.pending, (state, action)=>{
            state.isLoading = true;
        })
        .addCase(getAllClinics.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.clinicData = action.payload;
        })
        .addCase(getAllClinics.rejected, (state, action)=>{
            state.isLoading = false;
            state.errors = action.payload;
        })
        .addCase(getClinicsDetails.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.clinicDataDetails = action.payload;
        })
    }
})
const getAllClinicsReducer = getAllClinicsSlice.reducer;
export{getAllClinics, getAllClinicsReducer, getClinicsDetails}