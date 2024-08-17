import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        isloggedin:false,
        userid:null,
    },
    reducers: {
      setid(state,action){
        state.userid=action.payload
      },
      setisLoggedin(state,action){
        state.isloggedin=action.payload
      },
    },
  })


  export default userSlice.reducer
  export const {setid,setisLoggedin}=userSlice.actions