import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseURL } from "./clinicSlice";
import axios from "axios";

const MainURL = BaseURL
const initialState ={
    MedicalLabData:[],
    isLoading:false,
    errors: null
};

const getAllMedicalLabs = createAsyncThunk("get-All-Medical-Labs", async ()=> {
    try{
     const {data} = await axios.get(`${MainURL}medical-analysis-laboratories`)
     return data
    }catch(error){
        return error
    }
})

const getAllMedicalLabsSlice = createSlice({
    name:"getMedicalLab",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getAllMedicalLabs.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllMedicalLabs.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.MedicalLabData = action.payload;
        })
        .addCase(getAllMedicalLabs.rejected, (state, action)=>{
            state.isLoading = false;
            state.errors = action.payload;
        })
    }
})
const getAllMedicalLabsSliceReducer = getAllMedicalLabsSlice.reducer;
export {getAllMedicalLabs, getAllMedicalLabsSliceReducer}