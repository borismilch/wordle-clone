import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameReducerProps {
  black: string[],
  included: string[],
  points: number,
}

const initialState: GameReducerProps = {
  black: [],
  included: [],
  points: 0
}

const slice = createSlice({
  name: 'gameReducer',
  initialState,
  reducers: {
 
    addToIncluded: (state, action: PayloadAction<string>) => {
      state.included.push(action.payload)
    },
    addToBlack: (state, action: PayloadAction<string>) => {
      state.black.push(action.payload)
    },

    clearFields: (state) => {
      state.black = []
      state.included = []
    }
   
  }
})

export const reducer = slice.reducer

export const {addToBlack, addToIncluded, clearFields} = slice.actions
