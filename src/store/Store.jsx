import { configureStore } from "@reduxjs/toolkit";
import { getAllClinicsReducer } from "../slices/clinicSlice";
import { getAllDoctorsSliceReducer } from "../slices/doctorSlice";
import { getAllMedicalLabsSliceReducer } from "../slices/MedicalSclice";
import { getAllRadiologyLabsSliceReducer } from "../slices/RadiologySlice";
import { authSliceReducer } from "../slices/tokenSlice";

export const Store = configureStore({
    reducer: {
        clinics: getAllClinicsReducer,
        doctors: getAllDoctorsSliceReducer,
        medicalLab: getAllMedicalLabsSliceReducer,
        RadiologyLab:getAllRadiologyLabsSliceReducer,
       auth: authSliceReducer,
    },
})