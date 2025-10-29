import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  id: "",
  authenticate: false,
};

//     function authenticateReducer(state=initialState,action){
//         let {type,payload} = action
//         switch(type){
//             case "LOGIN_SUCCESS":
//                 return {...state,id:payload.id,authenticate:true}
//             case "LOGOUT":
//                 return {...state,authenticate:false}
//             default:
//                 return {...state}
//         }
// }

// export default authenticateReducer

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.id = action.payload.id;
      state.authenticate = true;
    },
    logout(state, action) {
      state.authenticate = false;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
