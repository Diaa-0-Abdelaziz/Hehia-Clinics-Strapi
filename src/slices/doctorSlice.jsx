import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BaseURL } from "./clinicSlice";
import axios from "axios";


const MainURL = BaseURL

const initialState = {
    doctorData:[],
    isLoading: false,
    errors: null,
};
const getAllDoctors = createAsyncThunk("get-all-doctors", async ()=>{
    try{
        const {data} = await axios.get(`${MainURL}doctors?populate=*`)
        return data
    }catch(error){
          return error
    } 
})

const getAllDoctorsSlice = createSlice({
   name:"getDoctors",
   initialState,
   extraReducers:(builder)=>{
    builder 
    .addCase(getAllDoctors.pending, (state)=>{
        state.isLoading = true;
    })
    .addCase(getAllDoctors.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.doctorData = action.payload;
    })
    .addCase(getAllDoctors.rejected, (state, action)=>{
        state.isLoading = false;
        state.errors = action.payload;
    })
}
})

const getAllDoctorsSliceReducer = getAllDoctorsSlice.reducer;
export{getAllDoctors, getAllDoctorsSliceReducer}