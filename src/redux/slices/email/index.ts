import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    textValue_Email: string;
    textValue_Phone: string;
    textValue_Company: string;
    textValue_Job: string;
    textValue_F_Name: string;
    textValue_L_Name: string;
}

const initialState: FormState = {
    textValue_Email: "",
    textValue_Phone: "",
    textValue_Company: "",
    textValue_Job: "",
    textValue_F_Name: "",
    textValue_L_Name: "",
};

const formSlice = createSlice({
    name: "email",
    initialState,
    reducers: {
        setContactEmail: (state, action: PayloadAction<any>) => {
            state.textValue_Email = action.payload;
        },
        setContactPhoneNo: (state, action: PayloadAction<any>) => {
            state.textValue_Phone = action.payload;
        },
        setCompanyName: (state, action: PayloadAction<any>) => {
            state.textValue_Company = action.payload;
        },
        setCompanyJob: (state, action: PayloadAction<any>) => {
            state.textValue_Job = action.payload;
        },
        setNameFirst: (state, action: PayloadAction<any>) => {
            state.textValue_F_Name = action.payload;
        },
        setNameLast: (state, action: PayloadAction<any>) => {
            state.textValue_L_Name = action.payload;
        },
    },
});

export const {
    setContactEmail,
    setContactPhoneNo,
    setCompanyName,
    setCompanyJob,
    setNameFirst,
    setNameLast,
} = formSlice.actions;

export default formSlice.reducer;
