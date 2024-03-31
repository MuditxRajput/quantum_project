import { createSlice } from "@reduxjs/toolkit";

const UserSlice=  createSlice({
    name:"User",
    initialState:{mobileMenu:false},
    reducers: {
    setMobileMenu: (state, action) => {
        state.mobileMenu = action.payload;
    }
}

})

export const {setMobileMenu} = UserSlice.actions
export default UserSlice.reducer;