import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: false,
  }

export const modalSlice = createSlice({
    name: "startModal",
    initialState,
    reducers: {
        activar: (state) => {
            state.modal = true
        },
        desactivar: (state) => {
            state.modal = false
        }
    }
})

export const { activar,desactivar } = modalSlice.actions

export default modalSlice.reducer