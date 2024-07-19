import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axiosInstance from '../utils/api'
// import { API_PATHS } from '../constants/apiPaths'
// // eslint-disable-next-line import/no-cycle
// import { RootState } from './index'
// import { clearUser, setUser } from './userSlice'
// import { formatTimestamp } from '../utils/dateFormat'
// import { getCookie } from '../utils/getCookie'

// interface SignupData {
//   username: string
//   name: string
//   email: string
//   password: string
//   dob: Date
//   gender: string
//   height: number
//   weight: number
// }

// interface LoginData {
//   identifier: string
//   password: string
// }

// interface AuthState {
//   loading: boolean
//   error: string | null
//   success: boolean
//   message: string
// }

// const initialState: AuthState = {
//   loading: false,
//   error: null,
//   success: false,
//   message: ''
// }

// export const signup = createAsyncThunk(
//   'auth/signup',
//   async (userData: SignupData, { rejectWithValue, dispatch }) => {
//     try {
//       const formattedUserData = {
//         ...userData,
//         dob: formatTimestamp(userData.dob)
//       }
//       const response = await axiosInstance.post(
//         API_PATHS.signup,
//         formattedUserData,
//         { withoutAuth: true }
//       )
//       const { accessToken, refreshToken, userInfo } = response.data.data
//       const { message } = response.data.message

//       document.cookie = `access_token=${accessToken}; path=/;`
//       document.cookie = `refresh_token=${refreshToken}; path=/;`
//       document.cookie = `name=${userInfo.name}; path=/;`
//       document.cookie = `role=${userInfo.role}; path=/;`
//       dispatch(setUser(userInfo))
//       return { message, userInfo }
//     } catch (err) {
//       const error = err as { response?: { data?: { message?: string } } }
//       const errorMessage = error.response?.data?.message || 'Signup failed'
//       return rejectWithValue(errorMessage)
//     }
//   }
// )

// export const login = createAsyncThunk(
//   'auth/login',
//   async (loginData: LoginData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await axiosInstance.post(API_PATHS.login, loginData, {
//         withoutAuth: true
//       })
//       const { accessToken, refreshToken, userInfo } = response.data.data

//       document.cookie = `access_token=${accessToken}; path=/;`
//       document.cookie = `refresh_token=${refreshToken}; path=/;`
//       document.cookie = `name=${userInfo.name}; path=/;`
//       document.cookie = `role=${userInfo.role}; path=/;`

//       dispatch(setUser(userInfo))

//       return { userInfo }
//     } catch (err) {
//       const error = err as { response?: { data?: { message?: string } } }
//       const errorMessage = error.response?.data?.message || 'Login failed'
//       return rejectWithValue(errorMessage)
//     }
//   }
// )

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue, dispatch }) => {
//     try {
//       const refreshToken = getCookie('refresh_token')
//       const response = await axiosInstance.post(API_PATHS.logout, {
//         refreshToken
//       })
//       document.cookie =
//         'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
//       document.cookie =
//         'refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
//       document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
//       dispatch(clearUser())
//       const { message } = response.data.message
//       return { message }
//     } catch (err) {
//       return rejectWithValue('Logout failed')
//     }
//   }
// )

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     resetState: (state) => {
//       state.loading = false
//       state.error = null
//       state.success = false
//       state.message = ''
//     }
//   },
//   extraReducers: (builder) => {
//     builder.addCase(signup.pending, (state) => {
//       state.loading = true
//       state.error = null
//       state.success = false
//       state.message = ''
//     })
//     builder.addCase(signup.fulfilled, (state, action) => {
//       state.loading = false
//       state.success = true
//       state.message = action.payload.message
//     })
//     builder.addCase(signup.rejected, (state, action) => {
//       state.loading = false
//       state.error = action.payload as string
//     })
//     builder.addCase(login.pending, (state) => {
//       state.loading = true
//       state.error = null
//       state.success = false
//       state.message = ''
//     })
//     // in below we can pass action if needed
//     builder.addCase(login.fulfilled, (state) => {
//       state.loading = false
//       state.success = true
//       state.message = 'Login successful'
//     })
//     builder.addCase(login.rejected, (state, action) => {
//       state.loading = false
//       state.error = action.payload as string
//     })
//     builder.addCase(logout.pending, (state) => {
//       state.loading = true
//     })
//     builder.addCase(logout.fulfilled, (state) => {
//       state.loading = false
//       state.success = true
//       state.message = 'Logout successful'
//     })
//     builder.addCase(logout.rejected, (state, action) => {
//       state.loading = false
//       state.error = action.payload as string
//     })
//   }
// })

// export const { resetState } = authSlice.actions

// export default authSlice.reducer

// export const selectAuthLoading = (state: RootState) => state.auth.loading
// export const selectAuthError = (state: RootState) => state.auth.error
// export const selectAuthSuccess = (state: RootState) => state.auth.success
// export const selectAuthMessage = (state: RootState) => state.auth.message
