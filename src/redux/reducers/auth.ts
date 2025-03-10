/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../types/user";

interface IinitialState {
  user: UserModel;
  loading: boolean;
  token: string | null;
  isAuthenticated: boolean;
  isWhatsappCodeSend: boolean;
  rediectToLogin: boolean | null;
  isOtpVerified: boolean|null, // New state for OTP verification

}

const userInitState: UserModel = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  role: "SELLER",
  isSeller: false,
  password: "",
  isEmailConfirmed: false,
  emailVerifyToken: "",
  passwordResetToken: "",
  isPhoneNumberConfirmed: false,
  isCountryConfirmed: false,
  status: "ACTIVE",
  createdAt: "",
  updatedAt: "",
};

const initialState: IinitialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: false,
  user: userInitState,
  isWhatsappCodeSend: false,
  rediectToLogin: false,
  isOtpVerified: false, // New state for OTP verification

};

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    userLoaded: (state, { payload }) => {
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
      };
    },
    otpVerified: (state) => {
      state.isOtpVerified = true;
    },
    setUser: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        user: payload,
      };
    },
    toggleWhatsappCode: (state) => {
      state.isWhatsappCodeSend = !state.isWhatsappCodeSend;
    },
    loginSuccess: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isAuthenticated: payload.isAuthenticated ?? state.isAuthenticated, // Keep it false until OTP is verified
        loading: false,
      };
    },
    signOut: (state) => {
      return {
        ...state,
        token: null,
        loading: false,
        user: userInitState,
        isAuthenticated: false,
      };
    },
  },
});

export const {
  loginSuccess,
  signOut,
  setUser,
  userLoaded,
  toggleWhatsappCode,
  otpVerified,
} = AuthSlice.actions;

export default AuthSlice.reducer;
