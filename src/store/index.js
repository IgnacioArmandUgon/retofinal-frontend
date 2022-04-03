import { configureStore } from "@reduxjs/toolkit";
import facturasSlice from "./slices";

export default configureStore({
    reducer: {
        facturasSlice
    }
});