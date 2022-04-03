import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constantes";

export const facturasSlice = createSlice({
    name: "facturas",
    initialState: {
        list: []
    },
    reducers: {
        setFacturas: (state, action) => {
            state.list = action.payload;
            /* console.log("action.payload = " + action.payload);
            console.log("state.initialState = " + state.list); */
        },
    },
});

export const { setFacturas } = facturasSlice.actions;

export default facturasSlice.reducer;

export const fetchFacturas = () => {
    return (dispatch) => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setFacturas(data));
            }).catch((error) => console.log(error))
    }
}