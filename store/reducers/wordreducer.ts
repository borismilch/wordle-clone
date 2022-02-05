import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface wordReducerState {
  row: number 
  element: number 
  table: string[][],
  target: string,
  gameEnded:boolean ,
  gameWinned: boolean

}

const initialState: wordReducerState = {
  row: 0,
  element: -1,
  target: '',
  gameEnded: false,
  gameWinned: false,
  table: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ]
}

const slice = createSlice({
  name: 'wordSlice',
  initialState,
  reducers: {
    addLetter: (state, action: PayloadAction<string>) => {
      if (state.element > 4) { return }
      if (state.element < 4 ){ state.element += 1}
      
      state.table[state.row][state.element] = action.payload
      
    },
    removeLetter: (state) => {
      if (state.element > 5) state.element -= 1 

      if (state.element === -1) {state.table[state.row][0] = ''; return} 

      state.table[state.row][state.element] = ''
      state.element -= 1
    },

    enterRow: (state) => {

      localStorage.setItem('table', JSON.stringify(state.table))
      localStorage.setItem('target', state.target)
      localStorage.setItem('element', state.element.toString())
      localStorage.setItem('row', state.row.toString())

      if (state.table[state.row + 1] && state?.table[state.row]?.[4])
     {

      state.row += 1
      state.element = -1
      state.table[state.row][0] = ''
     
     } else {
      
       state.row += 1
       state.element = -1
       state.gameEnded = true
     }
    },

    setTarget: (state, action:PayloadAction<string> ) => {
      state.target = action.payload
    },

    setTable: (state, action:PayloadAction<{table: string[][], target: string, element: string, row: string }>) => {
      state.table = action.payload.table
      state.element = +action.payload.element
      state.row = +action.payload.row
      state.target = action.payload.target
    },

    winGame: (state) => {
      state.gameWinned = true
      state.gameEnded = true
    },
    refreshGame: (state) => {
      state.gameEnded = false,
      state.gameWinned = false,
      state.table = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
      ],
      localStorage.clear()
    }
    
  }
})

export const reducer = slice.reducer

export const {enterRow, addLetter, removeLetter, setTarget, winGame, refreshGame, setTable} = slice.actions