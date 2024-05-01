import { configureStore } from "@reduxjs/toolkit";
import { getAllClinicsReducer } from "../slices/clinicSlice";
import { getAllDoctorsSliceReducer } from "../slices/doctorSlice";

export const Store = configureStore({
    reducer: {
        clinics: getAllClinicsReducer,
        doctors: getAllDoctorsSliceReducer,
    },
})